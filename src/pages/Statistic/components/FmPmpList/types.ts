import type { IStatisticPreview } from 'pages/StatisticPreview/api'

export interface IFmPmpListProperties {
	currentName: string
	filterValue: string
	isFm: boolean
	isShowingFmList: boolean
	state: IStatisticPreview | null
}
