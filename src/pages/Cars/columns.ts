import type { IColumnDefinitionType } from 'components/Table/types'
import type { ICar } from './api'

export const columns: IColumnDefinitionType<ICar, keyof ICar>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'unit',
		header: 'Planta',
		valueGetter: row => row.unit.name
	},
	{
		key: 'active',
		header: 'Ativo',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]
