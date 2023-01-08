import { makeMutation } from 'utils/api'
import { z } from 'zod'

export const LOGIN_URL = 'accessControl/login'

export const Credentials = z.object({
	name: z.string(),
	token: z.string(),
	isActive: z.boolean(),
	roles: z.array(z.object({ name: z.string() }))
})
export type ICredentials = z.infer<typeof Credentials>

export const SignInPayload = z.object({
	username: z.string(),
	password: z.string()
})
export type ISignInPayload = z.infer<typeof SignInPayload>

export const useSignInMutation = makeMutation(LOGIN_URL, SignInPayload)
