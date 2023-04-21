import { Model } from 'pages/Models/api'
import { makeMutation, makeQuery } from 'utils/api'
import { z } from 'zod'

export const STATISTIC_CONFIGURATIONS_URL = `${
	import.meta.env.VITE_ANALYZER_URL ?? ''
}statisticConfiguration`

const StatisticConfiguration = z.object({
	id: z.number(),
	model: Model,
	useCep: z.boolean(),
	cepSamples: z.number().nullish(),
	useSpecification: z.boolean(),
	specificationSamples: z.number().nullish(),
	useCpCpk: z.boolean(),
	cp: z.number().nullish(),
	cpk: z.number().nullish(),
	usePpPpk: z.boolean(),
	pp: z.number().nullish(),
	ppk: z.number().nullish(),
	useNormalDistribution: z.boolean(),
	useSigma: z.boolean()
})
export type IStatisticConfiguration = z.infer<typeof StatisticConfiguration>

export const StattisticConfigurationPayload = StatisticConfiguration.omit({
	model: true
})
export type IStatisticConfigurationPayload = z.infer<
	typeof StattisticConfigurationPayload
>

export interface IFilterProperties {
	carId: number | ''
	modelId: number | ''
}

export const useStatisticConfigurationsQuery = makeQuery(
	STATISTIC_CONFIGURATIONS_URL,
	z.array(StatisticConfiguration)
)

export const useStatisticConfigurationMutation = makeMutation(
	STATISTIC_CONFIGURATIONS_URL,
	StattisticConfigurationPayload
)
