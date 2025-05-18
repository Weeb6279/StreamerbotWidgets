/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_TWITCH_CLIENT_ID: string
  readonly VITE_TWITCH_CLIENT_SECRET: string
  readonly VITE_TWITCH_BROADCASTER_LOGIN: string
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
