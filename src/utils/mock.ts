import type { DefaultBodyType } from 'msw'
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'

export function mock<TData>(
	method: keyof typeof rest,
	url: string,
	json?: TData,
	leadingSlash = true
) {
	return rest[method](
		`${leadingSlash ? '/' : ''}${url}`,
		(_, response, context) =>
			response(json ? context.json(json) : context.status(200))
	)
}

export function createHandlers<TData extends DefaultBodyType>(
	url: string,
	json: TData
) {
	return [mock<TData>('get', url, json), mock('post', url), mock('put', url)]
}
