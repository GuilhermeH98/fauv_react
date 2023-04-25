import type { IDefaultFm, IDefaultPmp } from 'pages/StatisticPreview/api'

export interface IFmPmpListProperties {
	isShowingFmList: boolean
	toggleIsShowingFmList: () => void
	fmNamesList: IDefaultFm[]
	pmpNamesList: IDefaultPmp[]
}
