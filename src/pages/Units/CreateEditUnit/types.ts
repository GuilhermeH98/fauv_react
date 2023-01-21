import type { IUnit } from '../api'

export interface ICreateEditUnitProperties {
	onClose: () => void
	selectedUnit: IUnit | null
}

export interface IFieldValues {
	name: string
	active: boolean
}
