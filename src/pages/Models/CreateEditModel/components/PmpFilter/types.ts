import type { IPmp } from 'pages/Models/api'

export interface IPmpFilter {
	pmpList: IPmp[]
	setFilteredList: (filteredList: IPmp[]) => void
}
