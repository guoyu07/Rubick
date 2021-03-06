import { AxiosInstance } from 'axios'
import VUE from 'vue'
import { Route } from 'vue-router'
import { Store } from 'vuex'

import { RootState, Tip } from 'types'

import { RbModal } from 'components'

declare global {
  interface Window {
    __INITIAL_STATE__: RootState
  }

  const __DEV__: boolean
  const __SERVER__: boolean
  const NON_INDEX_REGEX: RegExp
  const I18N_REGEX: RegExp
  const SERVER_PREFIX: string
  const API_PREFIX: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $v: any
    $http: AxiosInstance
    $modal: RbModal
    $style: any
    $util: {
      [key: string]: any
    }
    $alert: Tip
    $confirm: Tip
    $toast: Tip
    $prompt: Tip
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends VUE> {
    asyncData?: (
      params: {
        axios: AxiosInstance
        store: Store<RootState>
        route: Route
      },
    ) => any
    title?: string | (() => string)
    validator?: any
  }
}

declare module 'vue-translator/dist/esm/translator' {
  export interface Translator {
    toggleLocale?(): void
  }
}
