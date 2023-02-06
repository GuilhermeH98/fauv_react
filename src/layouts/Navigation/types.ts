import { z } from 'zod'

export const Role = z.object({
	id: z.number().nullish(),
	name: z.string(),
	admin: z.boolean().nullish(),
	authority: z.string().nullish()
})
export type IRole = z.infer<typeof Role>
