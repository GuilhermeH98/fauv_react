import { Unit } from 'pages/Units/api'
import { makeMutation, makeQuery } from 'utils/api'
import { z } from 'zod'

export const EQUIPMENTS_URL = `${
	import.meta.env.VITE_ANALYZER_URL ?? ''
}equipment`

export const Equipment = z.object({
	id: z.number(),
	name: z.string(),
	unit: Unit,
	active: z.boolean()
})
export type IEquipment = z.infer<typeof Equipment>

export const EquipmentPayload = z.object({
	id: z.number().optional(),
	name: z.string(),
	unit: z.number(),
	active: z.boolean()
})

export const useEquipmentsQuery = makeQuery(EQUIPMENTS_URL, z.array(Equipment))

export const useEquipmentMutation = makeMutation(
	EQUIPMENTS_URL,
	EquipmentPayload
)
