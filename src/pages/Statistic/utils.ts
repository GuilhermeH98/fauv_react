import type { IStatisticPreview } from 'pages/StatisticPreview/api'
import type { IStatistic } from './api'
import { GraphicType } from './api'

export function getGraphicTypeLabel(graphicType: GraphicType) {
	switch (graphicType) {
		case GraphicType.CEP_INDIVIDUAL_VALUES: {
			return 'CEP - Valores Individuais'
		}
		case GraphicType.CEP_MOVEL_AMPLITUDE: {
			return 'CEP - Amplitude Móvel'
		}
		case GraphicType.INDIVIDUAL_VALUES: {
			return 'Especificação - Valores Individuais'
		}
		case GraphicType.MOVEL_AMPLITUDE: {
			return 'Especificação - Amplitude Móvel'
		}
		default: {
			return 'Desconhecido'
		}
	}
}

export function getGraphicDataByType(
	statistic: IStatistic,
	currentGraphicType: GraphicType
) {
	switch (currentGraphicType) {
		case GraphicType.CEP_INDIVIDUAL_VALUES: {
			return statistic.cepIndividualValuesGraphic
		}
		case GraphicType.CEP_MOVEL_AMPLITUDE: {
			return statistic.cepMovelAmplitudeGraphic
		}
		case GraphicType.INDIVIDUAL_VALUES: {
			return statistic.individualValuesGraphic
		}
		default: {
			return statistic.movelAmplitudeGraphic
		}
	}
}

export function assertLocationState(
	state: unknown
): state is IStatisticPreview {
	return !!state
}
