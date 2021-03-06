<template lang="pug">
main
  form(@submit.prevent="login")
    div {{ $t(isAccount ? 'account_login' : 'user_login') }}
    rb-input(v-for="type of ['account', 'username', 'password']"
             v-if="!isAccount || type !== 'username'"
             :class="{invalid: $v[type].$error}"
             :label="$t(type)"
             :key="type"
             v-model="_self[type]"
             :type="type === 'password' ? type : 'text'"
             @input="$v[type].$touch()")
      template(v-if="$v[type].$error", slot="error") {{ $t('required') }}
    rb-btn.btn-block(style="margin-bottom: 20px", type="submit", :loading="submitting") {{ $t('login') }}
    router-link(:to="{ path: '/login' + (isAccount ? '' : '/account'), query: $route.query }", replace) {{ $t(isAccount ? 'user_login' : 'account_login') }} »
    router-link.pull-right(v-if="isAccount" to="/forget-password") {{ $t('forget_password') + $t('question_mark') }}
  .tips.text-center
    router-link(to="/register") {{ $t('register_tips') }}
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Action } from 'vuex-class'

import { Next, User } from 'types'

import RbInput from 'components/rb-input/RbInput.vue'

@Component({
  components: {
    RbInput,
  },
  translator: {
    zh: {
      register_tips: '没有账号？现在注册',
      provided_credentials_not_correct: '用户名/邮箱或密码不正确',
    },
    en: {
      register_tips: 'Need an account? Register now',
      provided_credentials_not_correct:
        'username/email or password is incorrect',
    },
  },
  validator: {
    account: {
      minLength: 1,
    },
    username: {
      minLength: 1,
    },
    password: {
      minLength: 1,
    },
  },
})
export default class Login extends Vue {
  account: string = null
  username: string = null
  password: string = null

  isAccount = false
  submitting = false

  @Action setUser: (user: User) => void

  created() {
    this.isAccount = !!this.$route.params.type
  }

  beforeRouteUpdate(to: Route, from: Route, next: Next) {
    this.isAccount = !!to.params.type
    this.$v.$reset()
    next()
  }

  async login() {
    const excepted: string[] = []

    if (this.isAccount) {
      excepted.push('username')
    }

    this.$v.$touch(...excepted)

    if (this.$v.$error) {
      return
    }

    this.submitting = true

    try {
      const { data: { url, user } } = await this.$http.post('/login', {
        organization: this.account,
        username: this.username,
        password: this.password,
        next: this.$route.query.next,
      })

      this.setUser(user)

      this.$router.push(url)
    } catch (e) {
      this.$alert(this.$t(e.response.data.code))
    } finally {
      this.submitting = false
    }
  }
}
</script>
