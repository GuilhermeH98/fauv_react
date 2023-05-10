import { Fm, Pmp } from 'pages/Models/api'
import { makeQuery } from 'utils/api'
import { z } from 'zod'

export const STATISTIC_PREVIEW_URL = `${
	import.meta.env.VITE_ANALYZER_URL ?? ''
}statistic/${import.meta.env.VITE_UNIT_ID ?? '1'}`

const DefaultFm = Fm.pick({ name: true, level: true, axis: true, active: true })
export type IDefaultFm = z.infer<typeof DefaultFm>

const DefaultPmp = Pmp.pick({ name: true })
export type IDefaultPmp = z.infer<typeof DefaultPmp>

export const StatisticPreview = z.object({
	carName: z.string(),
	partNumber: z.string(),
	unitName: z.string(),
	initDate: z.string(),
	endDate: z.string(),
	numberOfSamples: z.number(),
	numberOfDefectiveSamples: z.number(),
	totalAk: z.number().nullish(),
	totalBk: z.number().nullish(),
	totalIo: z.number().nullish(),
	samplesIds: z.array(z.number()),
	modelId: z.number(),
	defaultFmNames: z.array(DefaultFm),
	defaultPmpNames: z.array(DefaultPmp)
})
export type IStatisticPreview = z.infer<typeof StatisticPreview>

export const useStatisticPreviewsQuery = makeQuery(
	STATISTIC_PREVIEW_URL,
	z.array(StatisticPreview)
)
