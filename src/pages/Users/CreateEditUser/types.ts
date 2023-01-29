import type { IUser } from '../api'

export interface ICreateEditUserProperties {
	onClose: () => void
	selectedUser: IUser | null
}

export interface IFieldValues {
	name: string
	vwId: string
	roles: string[]
	active: boolean
}
