import type { IFm } from 'pages/Models/api'

export interface IFmFilter {
	fmList: IFm[]
	setFilteredList: (filteredList: IFm[]) => void
}
