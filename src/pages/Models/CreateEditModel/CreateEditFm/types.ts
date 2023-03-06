import type { IFm, IPmp } from 'pages/Models/api'

export interface ICreateEditFmProperties {
	onClose: () => void
	selectedFm: IFm | null
	addFm: (fm: IFm) => void
	updateFm: (index: number, fm: IFm) => void
	fieldsPmpList: IPmp[]
}
