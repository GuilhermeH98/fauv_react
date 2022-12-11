import type { RestHandler } from 'msw'

interface IModule {
	handlers: RestHandler[]
}
const modules = import.meta.globEager<IModule>('./**/index.ts')
export const handlers = Object.values(modules).flatMap(
	module => module.handlers
)
