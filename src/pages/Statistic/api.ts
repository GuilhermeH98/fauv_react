import { CatalogType, Fm, PointAxis } from 'pages/Models/api'
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
	EIGHT_CONSECURTIVE_POINTS_OUT_OF_ZONE_C = 'EIGHT_CONSECURTIVE_POINTS_OUT_OF_ZONE_C',
	TWO_OUT_OF_THREE_CONSECUTIVE_POINTS_IN_ZONE_A = 'TWO_OUT_OF_THREE_CONSECUTIVE_POINTS_IN_ZONE_A',
	SIX_CONSECUTIVE_POINTS_ASCENDING = 'SIX_CONSECUTIVE_POINTS_ASCENDING',
	SIX_CONSECUTIVE_POINTS_DESCENDING = 'SIX_CONSECUTIVE_POINTS_DESCENDING',
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
	midline: z.number(),
	detailedFmGraphicsList: z.array(GraphicDetail)
})
export type IGraphicValues = z.infer<typeof GraphicValues>

const CepIndividualValuesGraphic = GraphicValues.extend({
	positiveZoneA: z.number(),
	positiveZoneB: z.number(),
	positiveZoneC: z.number(),
	negativeZoneA: z.number(),
	negativeZoneB: z.number(),
	negativeZoneC: z.number()
})

export const Statistic = z.object({
	name: z.string(),
	catalogType: z.nativeEnum(CatalogType),
	percentageIo: z.number(),
	percentageBk: z.number(),
	percentageAk: z.number(),
	totalIo: z.number(),
	totalBk: z.number(),
	totalAk: z.number(),
	cp: z.number(),
	cpk: z.number(),
	pp: z.number(),
	ppk: z.number(),
	z1: z.number().nullish(),
	z2: z.number().nullish(),
	able: z.boolean(),
	standardDeviation: z.number(),
	sigmaLevel: z.number(),
	average: z.number(),
	nominalDistribution: z.number(),
	restOfNormalDistribution: z.number().nullish(),
	mappedPmpList: z.array(z.string()).nullish(),
	mappedFmList: z
		.array(Fm.pick({ name: true, axis: true, catalogType: true }))
		.nullish(),
	impactList: z.array(z.string()),
	cepIndividualValuesGraphic: CepIndividualValuesGraphic,
	cepMovelAmplitudeGraphic: GraphicValues,
	individualValuesGraphic: GraphicValues,
	movelAmplitudeGraphic: GraphicValues
})
export type IStatistic = z.infer<typeof Statistic>

const PmpAxisStatistic = z.object({
	axis: z.nativeEnum(PointAxis),
	percentageIo: z.number(),
	percentageBk: z.number(),
	percentageAk: z.number(),
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
	restOfNormalDistribution: z.number().nullish(),
	cepIndividualValuesGraphic: CepIndividualValuesGraphic,
	cepMovelAmplitudeGraphic: GraphicValues,
	individualValuesGraphic: GraphicValues,
	movelAmplitudeGraphic: GraphicValues,
	able: z.boolean()
})
export type IPmpAxisStatistic = z.infer<typeof PmpAxisStatistic>

export const PmpStatistic = z.object({
	name: z.string(),
	mappedFmList: z
		.array(Fm.pick({ name: true, axis: true, catalogType: true }))
		.nullish(),
	axisList: z.array(z.nativeEnum(PointAxis)),
	pmpStatisticsList: z.array(PmpAxisStatistic)
})
export type IPmpStatistic = z.infer<typeof PmpStatistic>

export function useStatisticQuery(modelId: string, name: string) {
	const queryWithParameters = `${STATISTIC_URL}/fm/${modelId}/${name}`

	return makeQuery(queryWithParameters, Statistic)
}

export function usePmpStatisticQuery(modelId: string, name: string) {
	const queryWithParameters = `${STATISTIC_URL}/pmp/${modelId}/${name}`

	return makeQuery(queryWithParameters, PmpStatistic)
}
