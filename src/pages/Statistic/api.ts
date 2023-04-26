import { CatalogType, FmImpact } from 'pages/Models/api'
import { makeQuery } from 'utils/api'
import { z } from 'zod'

export const STATISTIC_URL = `${
	import.meta.env.VITE_ANALYZER_URL ?? ''
}statistic`

export enum GraphicType {
	CEP_INDIVIDUAL_VALUES = 'CEP_INDIVIDUAL_VALUES',
	CEP_MOVEL_AMPLITUDE = 'CEP_MOVEL_AMPLITUDE',
	INDIVIDUAL_VALUES = 'INDIVIDUAL_VALUES',
	MOVEL_AMPLITUDE = 'MOVEL_AMPLITUDE'
}

export enum StatisticCriteria {
	POINT_ABOVE_LCS = 'POINT_ABOVE_LCS',
	POINT_BELOW_LCS = 'POINT_BELOW_LCS',
	FIFTEEN_CONSECUTIVE_POINS_IN_ZONE_C = 'FIFTEEN_CONSECUTIVE_POINS_IN_ZONE_C',
	FOURTEEN_CONSECUTIVE_POINTS_ALTERNATING_UP_AND_DOWN = 'FOURTEEN_CONSECUTIVE_POINTS_ALTERNATING_UP_AND_DOWN',
	EIGHT_CONSECURTIVE_POINTS_OUT_OF_ZONE_A = 'EIGHT_CONSECURTIVE_POINTS_OUT_OF_ZONE_A',
	TWO_OUT_OF_THREE_CONSECUTIVE_POINTS_IN_ZONE_A = 'TWO_OUT_OF_THREE_CONSECUTIVE_POINTS_IN_ZONE_A',
	FOUR_OUT_OF_FIVE_CONSECUTIVE_POINTS_OUTSIDE_ZONE_C = 'FOUR_OUT_OF_FIVE_CONSECUTIVE_POINTS_OUTSIDE_ZONE_C',
	NINE_CONSECUTIVE_POINTS_ON_THE_SAME_SIDE_OF_THE_MIDDLE_LINE = 'NINE_CONSECUTIVE_POINTS_ON_THE_SAME_SIDE_OF_THE_MIDDLE_LINE',
	OUT_OF_TOLERANCE = 'OUT_OF_TOLERANCE'
}

const GraphicDetail = z.object({
	sampleId: z.number(),
	pin: z.string(),
	updatedDate: z.string(),
	value: z.number(),
	statisticCriteriaList: z.array(z.nativeEnum(StatisticCriteria))
})
export type IGraphicDetail = z.infer<typeof GraphicDetail>

const GraphicValues = z.object({
	graphicType: z.string(),
	higherTolerance: z.number(),
	lowerTolerance: z.number(),
	mediumLine: z.number(),
	detailedFmGraphicsList: z.array(GraphicDetail)
})
export type IGraphicValues = z.infer<typeof GraphicValues>

const CepIndividualValuesGraphic = GraphicValues.extend({
	positiveZoneA: z.number(),
	positiveZoneB: z.number(),
	posttiveZoneC: z.number(),
	negativeZoneA: z.number(),
	negativeZoneB: z.number(),
	negativeZoneC: z.number()
})

// TODO: add z1,z2 and isProcessCapable
export const Statistic = z.object({
	name: z.string(),
	catalogType: z.nativeEnum(CatalogType),
	io: z.number(),
	bk: z.number(),
	ak: z.number(),
	totalIo: z.number(),
	totalBk: z.number(),
	totalAk: z.number(),
	cp: z.number(),
	cpk: z.number(),
	pp: z.number(),
	ppk: z.number(),
	standardDeviation: z.number(),
	sigmaLevel: z.number(),
	average: z.number(),
	nominalDistribution: z.number(),
	mappedPmpList: z.array(z.string()),
	impactList: z.array(FmImpact.pick({ info: true })),
	cepIndividualValuesGraphic: CepIndividualValuesGraphic,
	cepMovelAmplitudeGraphic: GraphicValues,
	individualValuesGraphic: GraphicValues,
	movelAmplitudeGraphic: GraphicValues
})
export type IStatistic = z.infer<typeof Statistic>

export function useStatisticQuery(
	isFm: boolean,
	modelId: string,
	name: string
) {
	const queryWithParameters = `${STATISTIC_URL}/${
		isFm ? 'fm' : 'pmp'
	}/${modelId}/${name}`

	return makeQuery(queryWithParameters, Statistic)
}
