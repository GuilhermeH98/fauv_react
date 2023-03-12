import type { IFm, IFmImpact, IPmp } from 'pages/Models/api'

export interface ICreateEditFmProperties {
	selectedFm: IFm | null
	addFm: (fm: IFm) => void
	updateFm: (fm: IFm) => void
	fieldsPmpList: IPmp[]
}
export type IImpactRow = Omit<IFmImpact, 'id'> & {
	id: number
}
