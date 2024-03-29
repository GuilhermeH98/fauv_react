import { Role } from 'layouts/Navigation/types'
import { makeMutation, makeQuery } from 'utils/api'
import type { ISelectOption } from 'utils/miscellaneous'
import { z } from 'zod'

export const USERS_URL = `${import.meta.env.VITE_AUTHENTICATION_URL ?? ''}user`

export const ROLES_OPTIONS: ISelectOption[] = [
	{ label: 'Administrador', value: 'administrator' },
	{ label: 'Inspetor', value: 'inspector' },
	{ label: 'Consultor', value: 'consultant' }
]

export const User = z.object({
	vwId: z.string(),
	roles: z.array(Role),
	active: z.boolean()
})
export type IUser = z.infer<typeof User>

export const UserPayload = z.object({
	vwId: z.string(),
	roles: z.array(Role.pick({name: true})),
	active: z.boolean(),
	password: z.string(),
	passwordConfirmation: z.string()
})

export const useUsersQuery = makeQuery(USERS_URL, z.array(User))

export const useUserMutation = makeMutation(USERS_URL, UserPayload)
