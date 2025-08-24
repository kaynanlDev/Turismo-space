/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.png' {
    const value: string
    export default value
}
declare module '*.jpg' {
    const value: string
    export default value
}
declare module '*.jpeg' {
    const value: string
    export default value
}
declare module '*.svg' {
    const value: string
    export default value
}

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_APP_TITLE?: string
    readonly [key: string]: string | undefined
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}