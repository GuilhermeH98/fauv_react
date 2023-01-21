import type { ICatalog } from '../api'

export interface ICreateEditCatalogProperties {
	onClose: () => void
	selectedCatalog: ICatalog | null
}

export interface IFieldValues {
	name: string
	active: boolean
}
