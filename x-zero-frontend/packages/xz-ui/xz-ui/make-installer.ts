import type { App, Plugin } from '@vue/runtime-core'
import { INSTALLED_KEY } from '@xz-ui/constants'

export const makeInstaller = (components: Plugin[] = []) => {
    const install = (app: App, options?: any) => {
        if (app[INSTALLED_KEY]) return
        
        app[INSTALLED_KEY] = true
        components.forEach((c) => app.use(c))

        // TODO: options

    }
    return {
        version: '0.0.1',
        install
    }
}
