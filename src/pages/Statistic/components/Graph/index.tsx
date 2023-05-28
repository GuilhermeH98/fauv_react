import type { IGraphicDetail } from 'pages/Statistic/api'
import {
	VictoryAxis,
	VictoryChart,
	VictoryLabel,
	VictoryLine,
	VictoryScatter,
	VictoryTooltip,
	VictoryVoronoiContainer
} from 'victory'
import type { IGraphProperties } from './types'
import {
	getCriteriaLabelList,
	getGraphSmallestValue,
	getStatus,
	removeZeros,
	smallestValue
} from './utils'

export function Graph({ data }: IGraphProperties) {
	const {
		positiveZoneA,
		positiveZoneB,
		positiveZoneC,
		negativeZoneA,
		negativeZoneB,
		negativeZoneC,
		higherTolerance,
		lowerTolerance,
		detailedFmGraphicsList,
		midline: mediumLine
	} = data

	// when value is exact 0 victory chart throws error on VictoryLine component
	const [
		positiveZoneAValue,
		positiveZoneBValue,
		positiveZoneCValue,
		negativeZoneAValue,
		negativeZoneBValue,
		negativeZoneCValue,
		higherToleranceValue,
		lowerToleranceValue,
		mediumLineValue
	] = removeZeros([
		positiveZoneA,
		positiveZoneB,
		positiveZoneC,
		negativeZoneA,
		negativeZoneB,
		negativeZoneC,
		higherTolerance,
		lowerTolerance,
		mediumLine
	])

	return (
		<VictoryChart
			height={240}
			width={1100}
			containerComponent={<VictoryVoronoiContainer />}
		>
			{/* X AXIS - DATE */}
			<VictoryAxis
				crossAxis={false}
				fixLabelOverlap
				style={{
					tickLabels: { fill: '#615E83', fontSize: 12 },
					axis: { stroke: 'transparent' }
				}}
				axisValue={getGraphSmallestValue(
					detailedFmGraphicsList,
					lowerToleranceValue
				)}
				orientation='bottom'
			/>
			{/* Y AXIS - VALUE */}
			<VictoryAxis
				dependentAxis
				crossAxis={false}
				fixLabelOverlap
				style={{
					tickLabels: {
						fill: '#615E83',
						fontSize: 12
					},
					axis: { stroke: 'transparent' },
					grid: {
						stroke: '#E5EBF0',
						strokeWidth: 1
					}
				}}
			/>

			{/* Medium Line */}
			<VictoryLine
				style={{
					data: {
						stroke: 'black',
						strokeWidth: 1
					}
				}}
				y={() => mediumLineValue}
			/>
			{/* ZONES */}
			{positiveZoneAValue && positiveZoneAValue !== smallestValue && (
				<VictoryLine
					style={{
						data: {
							stroke: '#FFD100',
							strokeWidth: 1.2
						}
					}}
					y={() => positiveZoneAValue}
				/>
			)}

			{positiveZoneBValue && positiveZoneBValue !== smallestValue && (
				<VictoryLine
					style={{
						data: {
							stroke: '#FFD100',
							strokeWidth: 1.2
						}
					}}
					y={() => positiveZoneBValue}
				/>
			)}

			{positiveZoneCValue && positiveZoneCValue !== smallestValue && (
				<VictoryLine
					style={{
						data: {
							stroke: '#FFD100',
							strokeWidth: 1.2
						}
					}}
					y={() => positiveZoneCValue}
				/>
			)}

			{negativeZoneAValue && negativeZoneAValue !== smallestValue && (
				<VictoryLine
					style={{
						data: {
							stroke: '#FFD100',
							strokeWidth: 1.2
						}
					}}
					y={() => negativeZoneAValue}
				/>
			)}

			{negativeZoneBValue && negativeZoneBValue !== smallestValue && (
				<VictoryLine
					style={{
						data: {
							stroke: '#FFD100',
							strokeWidth: 1.2
						}
					}}
					y={() => negativeZoneBValue}
				/>
			)}

			{negativeZoneCValue && negativeZoneCValue !== smallestValue && (
				<VictoryLine
					style={{
						data: {
							stroke: '#FFD100',
							strokeWidth: 1.2
						}
					}}
					y={() => negativeZoneCValue}
				/>
			)}

			{/* Limit Lines */}
			<VictoryLine
				style={{
					data: {
						stroke: 'red',
						strokeWidth: 1.2
					}
				}}
				y={() => higherToleranceValue}
			/>
			<VictoryLine
				style={{
					data: {
						stroke: 'red',
						strokeWidth: 1.2
					}
				}}
				y={() => lowerToleranceValue}
			/>

			{/* GRAPH DATA */}
			<VictoryLine
				interpolation='linear'
				data={detailedFmGraphicsList}
				x='pin'
				y='value'
				style={{
					data: { stroke: '#2274AC', strokeWidth: 1.6 }
				}}
			/>
			<VictoryScatter
				data={detailedFmGraphicsList}
				labels={({ datum }) =>
					`\u00A0Valor do Scan: ${
						(datum as IGraphicDetail).value
					} \n\u00A0Data: ${
						(datum as IGraphicDetail).updatedDate
					} \n\u00A0Status: ${getStatus(
						(datum as IGraphicDetail).statisticCriteriaList
					)}${getCriteriaLabelList(
						(datum as IGraphicDetail).statisticCriteriaList
					)}`
				}
				x='pin'
				y='value'
				size={5}
				style={{
					data: {
						fill: 'white',
						stroke: ({ datum }) =>
							(datum as IGraphicDetail).statisticCriteriaList.length === 0
								? '#2274AC'
								: '#AE3030',
						strokeWidth: ({ datum }) =>
							(datum as IGraphicDetail).statisticCriteriaList.length === 0
								? 1.6
								: 3
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
							textAnchor: 'start',
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
								(datum as IGraphicDetail).statisticCriteriaList.length === 0
									? '#2274AC'
									: '#AE3030'
						}}
					/>
				}
			/>
		</VictoryChart>
	)
}
