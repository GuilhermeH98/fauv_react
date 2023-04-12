import {
	VictoryAxis,
	VictoryChart,
	VictoryLabel,
	VictoryLine,
	VictoryScatter,
	VictoryTooltip,
	VictoryVoronoiContainer
} from 'victory'
import type { IGraphicMeasurementFmDTO } from '../api'
import { StatisticCriteria, ToleranceType } from '../api'
import { getCriteriaLabelList } from './utils'

export interface GraphProperties {
	data: IGraphicMeasurementFmDTO[]
}

const mockData: IGraphicMeasurementFmDTO[] = [
	{
		value: 1.2,
		scanDate: '10/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 2,
		scanDate: '11/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.3,
		scanDate: '12/10',
		toleranceType: ToleranceType.OUTOL,
		statisticCriteriaList: [
			StatisticCriteria.POINT_ABOVE_LCS,
			StatisticCriteria.OUT_OF_TOLERANCE
		]
	},
	{
		value: 1.5,
		scanDate: '13/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1,
		scanDate: '14/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 0.9,
		scanDate: '15/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 2.1,
		scanDate: '16/10',
		toleranceType: ToleranceType.OUTOL,
		statisticCriteriaList: [
			StatisticCriteria.POINT_ABOVE_LCS,
			StatisticCriteria.EIGHT_CONSECURTIVE_POINTS_OUT_OF_ZONE_A,
			StatisticCriteria.TWO_OUT_OF_THREE_CONSECUTIVE_POINTS_IN_ZONE_A,
			StatisticCriteria.FOURTEEN_CONSECUTIVE_POINTS_ALTERNATING_UP_AND_DOWN,
			StatisticCriteria.OUT_OF_TOLERANCE
		]
	},
	{
		value: 2.2,
		scanDate: '17/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 2.5,
		scanDate: '18/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 2.5,
		scanDate: '19/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.7,
		scanDate: '20/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.8,
		scanDate: '21/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1,
		scanDate: '22/10',
		toleranceType: ToleranceType.OUTOL,
		statisticCriteriaList: [
			StatisticCriteria.POINT_ABOVE_LCS,
			StatisticCriteria.OUT_OF_TOLERANCE
		]
	},
	{
		value: 2,
		scanDate: '23/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.4,
		scanDate: '24/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.6,
		scanDate: '25/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.2,
		scanDate: '26/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.3,
		scanDate: '27/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.4,
		scanDate: '28/10',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 2.5,
		scanDate: '01/11',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 2.3,
		scanDate: '02/11',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.4,
		scanDate: '03/11',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 1.7,
		scanDate: '04/11',
		toleranceType: ToleranceType.OUTOL,
		statisticCriteriaList: [StatisticCriteria.POINT_ABOVE_LCS]
	},
	{
		value: 1.8,
		scanDate: '05/11',
		toleranceType: ToleranceType.INTOL,
		statisticCriteriaList: []
	},
	{
		value: 2.1,
		scanDate: '16/11',
		toleranceType: ToleranceType.OUTOL,
		statisticCriteriaList: [
			StatisticCriteria.POINT_ABOVE_LCS,
			StatisticCriteria.POINT_BELOW_LCS,
			StatisticCriteria.FIFTEEN_CONSECUTIVE_POINS_IN_ZONE_C,
			StatisticCriteria.FOUR_OUT_OF_FIVE_CONSECUTIVE_POINTS_OUTSIDE_ZONE_C,
			StatisticCriteria.NINE_CONSECUTIVE_POINTS_ON_THE_SAME_SIDE_OF_THE_MIDDLE_LINE,
			StatisticCriteria.EIGHT_CONSECURTIVE_POINTS_OUT_OF_ZONE_A,
			StatisticCriteria.TWO_OUT_OF_THREE_CONSECUTIVE_POINTS_IN_ZONE_A,
			StatisticCriteria.FOURTEEN_CONSECUTIVE_POINTS_ALTERNATING_UP_AND_DOWN,
			StatisticCriteria.OUT_OF_TOLERANCE
		]
	}
]

export function Graph() {
	// { data }: GraphProperties
	return (
		<VictoryChart
			height={240}
			width={1100}
			// width={900}
			// height={240}
			containerComponent={<VictoryVoronoiContainer />}
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
				labels={({ datum }) =>
					`\u00A0Valor do Scan: ${
						(datum as IGraphicMeasurementFmDTO).value
					} \n\u00A0Data: ${
						(datum as IGraphicMeasurementFmDTO).scanDate
					} \n\u00A0Status: ${
						(datum as IGraphicMeasurementFmDTO).toleranceType ===
						ToleranceType.INTOL
							? 'Dentro da tolerância'
							: 'Fora da tolerância'
					}${getCriteriaLabelList(
						(datum as IGraphicMeasurementFmDTO).statisticCriteriaList
					)}`
				}
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
				labelComponent={
					<VictoryTooltip
						labelComponent={<VictoryLabel lineHeight={1.3} />}
						orientation='bottom'
						style={{
							fontSize: '16px',
							fontWeight: 'normal',
							fontFamily: 'Lexend',
							textAnchor: 'center',
							textAlign: 'center',
							lineHeight: 1.1
						}}
						pointerWidth={10}
						flyoutPadding={{ left: 10, top: 5, bottom: 5 }}
						flyoutStyle={{
							fill: '#ffff',
							display: 'flex',
							justifyContent: 'start',
							strokeWidth: 1.5,

							stroke: ({ datum }) =>
								(datum as IGraphicMeasurementFmDTO).toleranceType ===
								ToleranceType.INTOL
									? '#2274AC'
									: '#AE3030'
						}}
					/>
				}
			/>
		</VictoryChart>
	)
}
