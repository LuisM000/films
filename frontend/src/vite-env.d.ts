
interface ImportMetaEnv {
  readonly VITE_API_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.jpg' {
  const path: string
  export default path
}
declare module '*.jpeg' {
  const path: string
  export default path
}
declare module '*.svg' {
  const path: string
  export default path
}
declare module '*.png' {
  const path: string
  export default path
}