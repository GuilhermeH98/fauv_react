import html2canvas from 'html2canvas'
import { jsPDF as JSPDF } from 'jspdf'
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

export async function exportPdf() {
	// eslint-disable-next-line unicorn/prefer-query-selector
	const domElement = document.getElementById('statistic')
	if (domElement) {
		void html2canvas(domElement).then(canvas => {
			const { height, width } = canvas
			const imgData = canvas.toDataURL('image/png')
			const pdf = new JSPDF('l', 'mm', [width, height])
			pdf.addImage(imgData, 'JPEG', 0, 0, width, height)
			pdf.save(`statistic.pdf`)
		})
	}
}
