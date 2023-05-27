import type { IColumnDefinitionType } from 'components/Table/types'
import { getCatalogLabel } from 'utils/miscellaneous'
import type { IFmOverview } from './api'
import { ToleranceType } from './api'
import { getToleranceStatusColor } from './utils'

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
		header: 'Valor',
		valueFormatter: value => value.toString().replace('.', ',')
	},
	{
		key: 'catalog',
		header: 'Catálogo',
		valueGetter: row => getCatalogLabel(row.catalog)
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
		header: 'AK | BK | IO',
		render: row => (
			<span className={`${getToleranceStatusColor(row.toleranceStatus)}`}>
				{row.toleranceStatus}
			</span>
		)
	},
	{
		key: 'wasFound',
		header: 'Encontrado',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]
