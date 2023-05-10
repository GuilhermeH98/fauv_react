import type { IColumnDefinitionType } from 'components/Table/types'
import type { IFmOverview } from './api'
import { ToleranceType } from './api'

export const fmColumns: IColumnDefinitionType<
	IFmOverview,
	keyof IFmOverview
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
		key: 'catalog',
		header: 'Catálogo'
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
		key: 'pmpList',
		header: 'PMPs',
		valueGetter: row => row.pmpList.join(', ')
	},
	{
		key: 'toleranceStatus',
		header: 'AK | BK | IO'
	},
	{
		key: 'wasFound',
		header: 'Encontrado',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]
