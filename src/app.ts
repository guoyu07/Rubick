import { AxiosInstance } from 'axios'
import { Context } from 'koa'
import { Component, Vue } from 'vue-property-decorator'

import 'plugins'

import App from './views/App.vue'

import createRouter from './router'
import createStore from './store'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
])

export default (axios: AxiosInstance, ctx?: Context) => {
  const store = createStore(axios, ctx)
  const router = createRouter()

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  const prepare = async () => {
    if (!/^\/login$/.test(ctx.path)) {
      await store.dispatch('commonCheck')
    }
  }

  const ready = () => {
    router.beforeEach((to, from, next) => {
      if (
        to.matched.some(route => route.meta.auth) &&
        !store.state.common.user.namespace
      ) {
        next({
          path: '/login',
          replace: true,
          query: {
            next: to.fullPath,
          },
        })
        return
      }

      next()
    })
  }

  return { app, router, store, prepare, ready }
}
