import type { IGraphicDetail } from 'pages/Statistic/api'
import { StatisticCriteria } from 'pages/Statistic/api'

export function getStatisticCriteriaLabel(
	statisticCriteria: StatisticCriteria
) {
	switch (statisticCriteria) {
		case StatisticCriteria.POINT_ABOVE_LCS: {
			return 'Ponto acima do LSC'
		}
		case StatisticCriteria.POINT_BELOW_LCS: {
			return 'Ponto abaixo do LSC'
		}
		case StatisticCriteria.FIFTEEN_CONSECUTIVE_POINS_IN_ZONE_C: {
			return '15 pontos consecutivos na zona C'
		}
		case StatisticCriteria.FOURTEEN_CONSECUTIVE_POINTS_ALTERNATING_UP_AND_DOWN: {
			return '14 pontos consecutivos alternando para cima e para baixo'
		}
		case StatisticCriteria.EIGHT_CONSECURTIVE_POINTS_OUT_OF_ZONE_A: {
			return '8 pontos consecutivos fora da zona A'
		}
		case StatisticCriteria.TWO_OUT_OF_THREE_CONSECUTIVE_POINTS_IN_ZONE_A: {
			return '2 de 3 pontos consecutivos na zona A'
		}
		case StatisticCriteria.FOUR_OUT_OF_FIVE_CONSECUTIVE_POINTS_OUTSIDE_ZONE_C: {
			return '4 de 5 pontos consecutivos fora da zona C'
		}
		case StatisticCriteria.NINE_CONSECUTIVE_POINTS_ON_THE_SAME_SIDE_OF_THE_MIDDLE_LINE: {
			return '9 pontos consecutivos no mesmo lado da linha central'
		}
		case StatisticCriteria.OUT_OF_TOLERANCE: {
			return 'Fora da tolerância'
		}
		default: {
			return 'Não reconhecido'
		}
	}
}

export function getCriteriaLabelList(
	statisticCriteriaList: StatisticCriteria[]
): string {
	return statisticCriteriaList.length === 0
		? ''
		: `\n\u00A0Critérios: \n\u00A0\u00A0\u2022 ${statisticCriteriaList
				.map(criteria => getStatisticCriteriaLabel(criteria))
				.join('\n\u00A0\u00A0\u2022 ')}`
}

export function getGraphSmallestValue(
	graphicValues: IGraphicDetail[],
	lowerTolerance: number
): number {
	let smallestValue = graphicValues[0].value

	for (let index = 1; index < graphicValues.length; index += 1) {
		const { value } = graphicValues[index]
		if (value < smallestValue) {
			smallestValue = value
		}
	}
	return smallestValue > lowerTolerance ? lowerTolerance : smallestValue
}

export const smallestValue = 0.000_000_000_000_000_000_000_000_000_000_000_000_1
export function removeZeros(numberList: (number | null | undefined)[]) {
	const newNumberList: number[] = []
	for (const number of numberList) {
		newNumberList.push(number || smallestValue)
	}
	return newNumberList
}
