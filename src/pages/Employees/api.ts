import { makeMutation, makeQuery } from 'utils/api'
import { z } from 'zod'

export const EMPLOYEES_URL = `${
	import.meta.env.VITE_ANALYZER_URL ?? ''
}employee`

export const Employee = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string(),
	active: z.boolean()
})
export type IEmployee = z.infer<typeof Employee>

export const EmployeePayload = z.object({
	id: z.number().optional(),
	name: z.string(),
	email: z.string(),
	active: z.boolean()
})

export const useEmployeesQuery = makeQuery(EMPLOYEES_URL, z.array(Employee))

export const useEmployeeMutation = makeMutation(EMPLOYEES_URL, EmployeePayload)
