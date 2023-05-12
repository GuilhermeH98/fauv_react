import { CatalogType, Level, PointAxis } from 'pages/Models/api'
import { SAMPLES_URL, Status } from 'pages/Samples/api'
import { makeQuery } from 'utils/api'
import { z } from 'zod'

export const SAMPLE_OVERVIEW_URL = `${
	import.meta.env.VITE_ANALYZER_URL ?? ''
}${SAMPLES_URL}/overview`

enum ToleranceTypeStatus {
	AK = 'AK',
	BK = 'BK',
	IO = 'IO'
}

export enum ToleranceType {
	INTOL = 'INTOL',
	OUTOL = 'OUTOL'
}

const axisCoordinateOverview = z.object({
	name: z.string(),
	value: z.number(),
	axis: z.nativeEnum(PointAxis),
	toleranceType: z.nativeEnum(ToleranceType),
	toleranceStatus: z.nativeEnum(ToleranceTypeStatus),
	higherTolerance: z.number(),
	lowerTolerance: z.number(),
	wasFound: z.boolean()
})
export type IAxisCoordinateOverview = z.infer<typeof axisCoordinateOverview>

const PmpOverview = z.object({
	name: z.string(),
	x: z.number(),
	y: z.number(),
	z: z.number(),
	ak: z.number(),
	bk: z.number(),
	io: z.number(),
	axisCoordinateOverviewList: z.array(axisCoordinateOverview),
	wasFound: z.boolean()
})
export type IPmpOverview = z.infer<typeof PmpOverview>

const FmOverview = z.object({
	name: z.string(),
	axis: z.nativeEnum(PointAxis),
	tolerance: z.nativeEnum(ToleranceType),
	catalog: z.nativeEnum(CatalogType),
	pmpList: z.array(z.string()),
	impactList: z.array(z.string()),
	toleranceStatus: z.nativeEnum(ToleranceTypeStatus),
	higherTolerance: z.number(),
	lowerTolerance: z.number(),
	value: z.number(),
	fmLevel: z.nativeEnum(Level),
	wasFound: z.boolean()
})
export type IFmOverview = z.infer<typeof FmOverview>

const SampleOverview = z.object({
	uploadedDate: z.string(),
	uploadedUser: z.string(),
	equipmentName: z.string(),
	partNumber: z.string(),
	carName: z.string(),
	pin: z.string(),
	initDate: z.string(),
	endDate: z.string(),
	status: z.nativeEnum(Status),
	totalFmAk: z.number(),
	totalFmBk: z.number(),
	totalFmIo: z.number(),
	totalPmpAk: z.number(),
	totalPmpBk: z.number(),
	totalPmpIo: z.number(),
	fmListAk: z.array(z.string()),
	fmOverviewList: z.array(FmOverview),
	pmpOverviewList: z.array(PmpOverview)
})

export function useSampleOverviewQuery(sampleId: string) {
	const queryWithParameters = `${SAMPLE_OVERVIEW_URL}/${sampleId}`

	return makeQuery(queryWithParameters, SampleOverview)
}
