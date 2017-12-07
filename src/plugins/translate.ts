import Vue from 'vue'

import { LOCALE, StrObj, Translate } from 'types'
import { LOCALE_COOKIE, Lang, Locale, getCookie, setCookie } from 'utils'

const context = require.context('../views', true, I18N_REGEX)

const { EN, ZH } = LOCALE

const TOGGLE_LOCALE = {
  [EN]: ZH,
  [ZH]: EN,
}

const translations: {
  [locale: string]: {
    [key: string]: string
  }
} = context.keys().reduce((modules: any, key: string) => {
  const module = context(key)
  const lang = key.match(I18N_REGEX)[1]
  const matched = modules[lang] || (modules[lang] = {})
  Object.assign(matched, module)
  return modules
}, {})

const setDocLang = (locale: LOCALE) => {
  document.documentElement.setAttribute(Lang, locale)
}

const createTranslate = (DEFAULT_LOCALE = ZH) => {
  const instance: Translate = (key: string, params?: StrObj) => {
    const value = translations[instance.locale][key]
    return (
      (value &&
        value.replace(/{([^{}]+)}/g, (matched, $0) => params[$0.trim()])) ||
      key
    )
  }

  instance.toggleLocale = (locale: LOCALE = TOGGLE_LOCALE[instance.locale]) => {
    if (locale !== instance.locale) {
      setCookie(LOCALE_COOKIE, (instance.locale = locale), Infinity)
      setDocLang(locale)
    }
  }

  instance.create = createTranslate

  Vue.util.defineReactive(instance, Locale, DEFAULT_LOCALE)

  return instance
}

let defaultLocale

if (!__SERVER__) {
  defaultLocale = (getCookie(LOCALE_COOKIE) as LOCALE) || undefined

  if (defaultLocale && !window.__INITIAL_STATE__) {
    setDocLang(defaultLocale)
  }
}

export const translate = createTranslate(defaultLocale)

Object.defineProperty(
  Vue.prototype,
  '$t',
  __SERVER__
    ? {
        configurable: __DEV__,
        get() {
          return this.$ssrContext.translate
        },
      }
    : { value: translate, writable: __DEV__ },
)
