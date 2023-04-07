/* eslint-disable unicorn/prevent-abbreviations */
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_MSW?: true
	readonly VITE_AUTHENTICATION_URL?: string
	readonly VITE_ANALYZER_URL?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
