import { z } from 'zod'

export const LOGIN_URL = '/accessControl/login'

export const LoginPayload = z.object({
	username: z.string(),
	password: z.string()
})
export type ILoginPayload = z.infer<typeof LoginPayload>

// export function useLoginMutation(): ReturnType<typeof useMutation> {
// 	return useMutation((body: ILoginPayload) =>
// 		request(LOGIN_URL, {
// 			method: 'post'
// 		})
// 	)
// }
