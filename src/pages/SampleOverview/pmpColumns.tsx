import type { IColumnDefinitionType } from 'components/Table/types'
import type { IPmpOverview } from './api'

export const pmpColumns: IColumnDefinitionType<
	IPmpOverview,
	keyof IPmpOverview
>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'x',
		header: 'X'
	},
	{
		key: 'y',
		header: 'Y'
	},
	{
		key: 'z',
		header: 'Z'
	},
	{
		key: 'ak',
		header: 'Ak'
	},
	{
		key: 'bk',
		header: 'BK'
	},
	{
		key: 'io',
		header: 'IO'
	},
	{
		key: 'wasFound',
		header: 'Encontrado',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]
