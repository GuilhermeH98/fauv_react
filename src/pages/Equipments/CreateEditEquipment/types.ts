import type { IEquipment } from '../api'

export interface ICreateEditEquipmentProperties {
	onClose: () => void
	selectedEquipment: IEquipment | null
}

export interface IFieldValues {
	name: string
	unit: number
	active: boolean
}
