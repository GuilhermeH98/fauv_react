import type { IGraphicValues } from 'pages/Statistic/api'

interface IGraphData extends IGraphicValues {
	positiveZoneA?: number | null
	positiveZoneB?: number | null
	positiveZoneC?: number | null
	negativeZoneA?: number | null
	negativeZoneB?: number | null
	negativeZoneC?: number | null
}

export interface IGraphProperties {
	data: IGraphData
}
