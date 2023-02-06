import { makeMutation } from 'utils/api'
import { z } from 'zod'

export const LOGIN_URL = 'accessControl/login'

export const Credentials = z.object({
	token: z.string()
})
export type ICredentials = z.infer<typeof Credentials>

export const SignInPayload = z.object({
	username: z.string(),
	password: z.string()
})
export type ISignInPayload = z.infer<typeof SignInPayload>

export const useSignInMutation = makeMutation(LOGIN_URL, SignInPayload)

export const JWTPayload = z.object({
	sub: z.string(),
	current_roles: z.string()
})
export type IJWTPayload = z.infer<typeof JWTPayload>
