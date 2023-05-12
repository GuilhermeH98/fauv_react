import type { IColumnDefinitionType } from 'components/Table/types'
import type { IAxisCoordinateOverview } from 'pages/SampleOverview/api'
import { ToleranceType } from 'pages/SampleOverview/api'

export const axisCoordinateColumns: IColumnDefinitionType<
	IAxisCoordinateOverview,
	keyof IAxisCoordinateOverview
>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'axis',
		header: 'Eixo'
	},
	{
		key: 'value',
		header: 'Valor'
	},
	{
		key: 'higherTolerance',
		header: 'Tolerância Superior'
	},
	{
		key: 'lowerTolerance',
		header: 'Tolerância Inferior'
	},
	{
		key: 'tolerance',
		header: 'Tolerância',
		valueFormatter: value =>
			value === ToleranceType.INTOL
				? 'Dentro da tolerância'
				: 'Fora da tolerância'
	},
	{
		key: 'wasFound',
		header: 'Encontrado',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]
