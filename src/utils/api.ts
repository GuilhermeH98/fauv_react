import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { z } from 'zod'

interface IRequestInit extends Omit<RequestInit, 'body'> {
	method?: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'
	body?: unknown
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function request(url: string, init?: IRequestInit) {
	const headers: HeadersInit = {}
	if (init?.method && init.method !== 'GET') {
		headers['Content-Type'] = 'application/json'
	}

	const token = localStorage.getItem('token')
	if (token) {
		headers.Authorization = `Bearer ${token}`
	}

	const response = await fetch(
		new URL(
			url,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			import.meta.env.VITE_API_URL ?? window.location.origin
		).toString(),
		{
			...init,
			headers: {
				...headers,
				...init?.headers
			},
			body: init?.body ? JSON.stringify(init.body) : undefined
		}
	)

	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return await response.json()
	} catch {
		// No response body.
	}

	return response.json()
}

export const post = async (
	url: string,
	init?: IRequestInit
): Promise<unknown> => request(url, { ...init, method: 'POST' })

export const put = async (url: string, init?: IRequestInit): Promise<unknown> =>
	request(url, { ...init, method: 'PUT' })

export const patch = async (
	url: string,
	init?: IRequestInit
): Promise<unknown> => request(url, { ...init, method: 'PATCH' })

export const get = request

export function makeMutation<
	TPayloadSchema extends z.ZodTypeAny,
	TResponseSchema extends z.ZodTypeAny,
	TVariables = z.infer<TPayloadSchema>,
	TData = z.infer<TResponseSchema>
>(
	url: string,
	payloadSchema: TPayloadSchema,
	responseSchema?: TResponseSchema,
	queryKey?: string
) {
	return (isEdit = false) => {
		const queryClient = useQueryClient()
		return useMutation<TData, Error, TVariables>(
			async variables => {
				const response = (await request(url, {
					body: payloadSchema.parse(variables),
					method: isEdit ? 'PUT' : 'POST'
				})) as TData
				if (responseSchema) {
					return responseSchema.parse(response) as TData
				}
				return response
			},
			{
				onSuccess() {
					void queryClient.invalidateQueries([queryKey ?? url])
				}
			}
		)
	}
}

function appendURLParameters(
	url: string,
	parameters?: Record<string, string>[]
): string {
	if (parameters) {
		const urlParameters = new URLSearchParams(
			parameters
				.flatMap(parameter => Object.entries(parameter))
				.filter(([, value]) => !!value)
		)
		return `${url}?${urlParameters.toString()}`
	}
	return url
}

export function makeQuery<
	TSchema extends z.ZodTypeAny,
	TData = z.infer<TSchema>
>(url: string, schema: TSchema, queryKeys?: string[]) {
	return (parameters?: Record<string, string>[], enabled = true) =>
		useQuery<TData, Error>(
			[...(queryKeys ?? [url]), ...(parameters ?? [])],
			async () =>
				schema.parse(await get(appendURLParameters(url, parameters))) as TData,
			{
				enabled
			}
		)
}
