import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import type { IGraphicMeasurementFmDTO } from '../api'
import { ToleranceType } from '../api'

export interface GraphProperties {
	data: IGraphicMeasurementFmDTO[]
}

const mockData: IGraphicMeasurementFmDTO[] = [
	{ value: 1, scanDate: '10/10', toleranceType: ToleranceType.INTOL },
	{ value: 2, scanDate: '11/10', toleranceType: ToleranceType.INTOL },
	{ value: 3, scanDate: '12/10', toleranceType: ToleranceType.OUTOL },
	{ value: 4, scanDate: '13/10', toleranceType: ToleranceType.INTOL },
	{ value: 5, scanDate: '14/10', toleranceType: ToleranceType.INTOL },
	{ value: 6, scanDate: '15/10', toleranceType: ToleranceType.INTOL },
	{ value: 70, scanDate: '16/10', toleranceType: ToleranceType.OUTOL },
	{ value: 60, scanDate: '17/10', toleranceType: ToleranceType.INTOL },
	{ value: 10, scanDate: '18/10', toleranceType: ToleranceType.INTOL },
	{ value: 6, scanDate: '19/10', toleranceType: ToleranceType.INTOL },
	{ value: 7, scanDate: '20/10', toleranceType: ToleranceType.INTOL },
	{ value: 9, scanDate: '21/10', toleranceType: ToleranceType.INTOL },
	{ value: 15, scanDate: '22/10', toleranceType: ToleranceType.OUTOL },
	{ value: 21, scanDate: '23/10', toleranceType: ToleranceType.INTOL },
	{ value: 35, scanDate: '24/10', toleranceType: ToleranceType.INTOL },
	{ value: 85, scanDate: '25/10', toleranceType: ToleranceType.INTOL },
	{ value: 45, scanDate: '26/10', toleranceType: ToleranceType.INTOL },
	{ value: 20, scanDate: '27/10', toleranceType: ToleranceType.INTOL },
	{ value: 65, scanDate: '28/10', toleranceType: ToleranceType.INTOL },
	{ value: 54, scanDate: '01/11', toleranceType: ToleranceType.INTOL },
	{ value: 12, scanDate: '02/11', toleranceType: ToleranceType.INTOL },
	{ value: 23, scanDate: '03/11', toleranceType: ToleranceType.INTOL },
	{ value: 3, scanDate: '04/11', toleranceType: ToleranceType.OUTOL },
	{ value: 4, scanDate: '05/11', toleranceType: ToleranceType.INTOL },
	{ value: 5, scanDate: '06/11', toleranceType: ToleranceType.INTOL }
]

export function Graph() {
	// { data }: GraphProperties
	return (
		<VictoryChart
			width={1100}
			// width={1000}
			// height={400}
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
