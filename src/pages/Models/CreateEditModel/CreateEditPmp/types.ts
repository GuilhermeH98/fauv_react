import type { INominalAxisCoordinate, IPmp } from 'pages/Models/api'

export interface ICreateEditPmpProperties {
	onClose: () => void
	selectedPmp: IPmp | null
	addPmp: (pmp: IPmp) => void
	updatePmp: (pmp: IPmp) => void
}

export type IAxisRow = Omit<INominalAxisCoordinate, 'id'> & {
	id: number
}
