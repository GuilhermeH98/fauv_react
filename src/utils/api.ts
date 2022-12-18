interface IRequestInit extends Omit<RequestInit, 'body'> {
	method?: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'
	body?: unknown
}

export async function request(
	url: string,
	init?: IRequestInit
): Promise<unknown> {
	const headers: HeadersInit = {}
	if (init?.method && init.method !== 'GET') {
		headers['Content-Type'] = 'application/json'
	}

	try {
		headers.Authorization = `Bearer `
	} catch {
		// Do nothing.
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
