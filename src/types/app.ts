import { InjectionKey } from 'vue'

export interface Configuration {
  APP_API_URL: string
  APP_MICRO_URL: string
}

export const configKey: InjectionKey<Configuration> = Symbol('configKey')

export interface SingleSpaProps {
  name: string
  mountParcel: () => void
  singleSpa: {
    NOT_LOADED: 'NOT_LOADED'
    LOADING_SOURCE_CODE: 'LOADING_SOURCE_CODE'
    NOT_BOOTSTRAPPED: 'NOT_BOOTSTRAPPED'
    BOOTSTRAPPING: 'BOOTSTRAPPING'
    NOT_MOUNTED: 'NOT_MOUNTED'
    MOUNTING: 'MOUNTING'
    UPDATING: 'UPDATING'
    LOAD_ERROR: 'LOAD_ERROR'
    MOUNTED: 'MOUNTED'
    UNMOUNTING: 'UNMOUNTING'
    SKIP_BECAUSE_BROKEN: 'SKIP_BECAUSE_BROKEN'
    addErrorHandler: (handler: any) => void
    checkActivityFunctions: (location: Location) => void
    ensureJQuerySupport: (jQuery: any /* default to window.jQuery if has jQuery */) => void
    getAppNames: () => string[]
    getAppStatus: (appName: string) => string
    getMountedApps: () => string[]
    mountRootParcel: () => void
    navigateToUrl: (obj: any) => void
    pathToActiveWhen: (path: string, exactMatch: string) => void
    registerApplication: (appNameOrConfig: string, appOrLoadApp: any, activeWhen: any, customProps: any) => any
    removeErrorHandler: (handler: any) => void
    setBootstrapMaxTime: (time: any, dieOnTimeout: any, warningMillis: any) => any
    setMountMaxTime: (time: any, dieOnTimeout: any, warningMillis: any) => any
    setUnloadMaxTime: (time: any, dieOnTimeout: any, warningMillis: any) => any
    setUnmountMaxTime: (time: any, dieOnTimeout: any, warningMillis: any) => any
    start: (opts: any) => void
    triggerAppChange: () => void
    unloadApplication: (appName: string, opts: any) => any
    unregisterApplication: (appName: string) => void
  }
}

export const SingleSpaKey: InjectionKey<SingleSpaProps> = Symbol('SingleSpaProps')
