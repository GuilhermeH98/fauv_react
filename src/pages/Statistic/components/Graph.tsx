import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import type { IGraphicMeasurementFmDTO } from '../api'
import { ToleranceType } from '../api'

export interface GraphProperties {
	data: IGraphicMeasurementFmDTO[]
}

const mockData: IGraphicMeasurementFmDTO[] = [
	{ value: 1.2, scanDate: '10/10', toleranceType: ToleranceType.INTOL },
	{ value: 2, scanDate: '11/10', toleranceType: ToleranceType.INTOL },
	{ value: 1.3, scanDate: '12/10', toleranceType: ToleranceType.OUTOL },
	{ value: 1.5, scanDate: '13/10', toleranceType: ToleranceType.INTOL },
	{ value: 1, scanDate: '14/10', toleranceType: ToleranceType.INTOL },
	{ value: 0.9, scanDate: '15/10', toleranceType: ToleranceType.INTOL },
	{ value: 2.1, scanDate: '16/10', toleranceType: ToleranceType.OUTOL },
	{ value: 2.2, scanDate: '17/10', toleranceType: ToleranceType.INTOL },
	{ value: 2.5, scanDate: '18/10', toleranceType: ToleranceType.INTOL },
	{ value: 2.5, scanDate: '19/10', toleranceType: ToleranceType.INTOL },
	{ value: 1.7, scanDate: '20/10', toleranceType: ToleranceType.INTOL },
	{ value: 1.8, scanDate: '21/10', toleranceType: ToleranceType.INTOL },
	{ value: 1, scanDate: '22/10', toleranceType: ToleranceType.OUTOL },
	{ value: 2, scanDate: '23/10', toleranceType: ToleranceType.INTOL },
	{ value: 1.4, scanDate: '24/10', toleranceType: ToleranceType.INTOL },
	{ value: 1.6, scanDate: '25/10', toleranceType: ToleranceType.INTOL },
	{ value: 1.2, scanDate: '26/10', toleranceType: ToleranceType.INTOL },
	{ value: 1.3, scanDate: '27/10', toleranceType: ToleranceType.INTOL },
	{ value: 1.4, scanDate: '28/10', toleranceType: ToleranceType.INTOL },
	{ value: 2.5, scanDate: '01/11', toleranceType: ToleranceType.INTOL },
	{ value: 2.3, scanDate: '02/11', toleranceType: ToleranceType.INTOL },
	{ value: 1.4, scanDate: '03/11', toleranceType: ToleranceType.INTOL },
	{ value: 1.7, scanDate: '04/11', toleranceType: ToleranceType.OUTOL },
	{ value: 1.8, scanDate: '05/11', toleranceType: ToleranceType.INTOL },
	{ value: 1.9, scanDate: '06/11', toleranceType: ToleranceType.INTOL }
]

export function Graph() {
	// { data }: GraphProperties
	return (
		<VictoryChart
			height={240}
			width={1100}
			// width={900}
			// height={240}
		>
			<VictoryAxis
				style={{
					tickLabels: { fill: '#615E83', fontSize: 12 },
					axis: { stroke: 'transparent' }
				}}
			/>
			<VictoryAxis
				dependentAxis
				style={{
					tickLabels: {
						fill: '#615E83',
						fontSize: 12
					},
					axis: { stroke: 'transparent' },
					grid: {
						stroke: '#E5EBF0',
						strokeWidth: 1.2
					}
				}}
			/>

			<VictoryLine
				interpolation='linear'
				data={mockData}
				x='scanDate'
				y='value'
				style={{
					data: { stroke: '#2274AC', strokeWidth: 1.6 }
				}}
			/>
			<VictoryScatter
				data={mockData}
				x='scanDate'
				y='value'
				size={5}
				style={{
					data: {
						fill: 'white',
						stroke: ({ datum }) =>
							(datum as IGraphicMeasurementFmDTO).toleranceType ===
							ToleranceType.OUTOL
								? '#AE3030'
								: '#2274AC',
						strokeWidth: ({ datum }) =>
							(datum as IGraphicMeasurementFmDTO).toleranceType ===
							ToleranceType.OUTOL
								? 3
								: 1.6
					}
				}}
			/>
		</VictoryChart>
	)
}
