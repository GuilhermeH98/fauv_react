import { Unit } from 'pages/Units/api'
import { makeMutation, makeQuery } from 'utils/api'
import { z } from 'zod'

export const CARS_URL = 'car'

export const Car = z.object({
	id: z.number(),
	name: z.string(),
	unit: Unit,
	active: z.boolean()
})
export type ICar = z.infer<typeof Car>

export const CarPayload = z.object({
	id: z.number().optional(),
	name: z.string(),
	unit: z.number(),
	active: z.boolean()
})

export const useCarsQuery = makeQuery(CARS_URL, z.array(Car))

export const useCarMutation = makeMutation(CARS_URL, CarPayload)
