import { App, createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import singleSpaVue from 'single-spa-vue'
import singleSpaCss from 'single-spa-css'
import NProgress from 'nprogress'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'virtual:unocss-devtools'

import VueApp from './App.vue'

import { SingleSpaKey, SingleSpaProps, configKey } from '~/types'
import { config } from '~/helpers'

const cssLifecycles = singleSpaCss({
  cssUrls: import.meta.env.DEV ? [] : [`${config.APP_MICRO_URL}style.css?a=${Math.floor(Math.random() * 10000)}`],
  webpackExtractedCss: false,
  shouldUnmount: false,
  timeout: 5000,
  createLink(url) {
    const linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href = url
    return linkEl
  },
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(VueApp)
    },
  },
  handleInstance: (app: App, props: SingleSpaProps) => {
    const routes = setupLayouts(generatedRoutes)
    routes.push({ path: '/:catchAll(.*)', redirect: { name: 'Error 404' } })
    const router = createRouter({ history: createWebHistory(), routes })

    router.beforeEach(() => {
      NProgress.start()
    })

    router.afterEach((route) => {
      NProgress.done()
      document.title = String(route.name)
    })

    app.use(router)
    app.provide(SingleSpaKey, props)
    app.provide(configKey, config)
  },
})

export const bootstrap = [cssLifecycles.bootstrap, vueLifecycles.bootstrap]
export const mount = [cssLifecycles.mount, vueLifecycles.mount]
export const unmount = [vueLifecycles.unmount, cssLifecycles.unmount]

