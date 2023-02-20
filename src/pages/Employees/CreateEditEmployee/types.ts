import type { IEmployee } from '../api'

export interface ICreateEditEmployeeProperties {
	onClose: () => void
	selectedEmployee: IEmployee | null
}

export interface IFieldValues {
	name: string
	email: string
	active: boolean
}
