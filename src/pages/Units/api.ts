import { makeMutation, makeQuery } from 'utils/api'
import { z } from 'zod'

export const UNITS_URL = 'unit'

export const Unit = z.object({
	id: z.number(),
	name: z.string(),
	active: z.boolean()
})
export type IUnit = z.infer<typeof Unit>

export const UnitPayload = Unit.partial({ id: true })

export const useUnitsQuery = makeQuery(UNITS_URL, z.array(Unit))

export const useUnitMutation = makeMutation(UNITS_URL, UnitPayload)
