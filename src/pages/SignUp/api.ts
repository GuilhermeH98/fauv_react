import { makeMutation } from 'utils/api'
import { z } from 'zod'

export const REGISTER_URL = `${
	import.meta.env.VITE_AUTHENTICATION_URL ?? ''
}accessControl/register`

export const RegisterPayload = z.object({
	vwId: z.string(),
	password: z.string(),
	passwordConfirmation: z.string(),
	roles: z.array(z.string()).min(1)
})
export type IRegisterPayload = z.infer<typeof RegisterPayload>

export const useRegisterMutation = makeMutation(REGISTER_URL, RegisterPayload)
