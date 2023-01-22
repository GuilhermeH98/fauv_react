import { z } from 'zod'

export const Role = z.object({ name: z.string() })
export type IRole = z.infer<typeof Role>
