import type { ICar } from '../api'

export interface ICreateEditCarProperties {
	onClose: () => void
	selectedCar: ICar | null
}

export interface IFieldValues {
	name: string
	active: boolean
	unit: number
}
