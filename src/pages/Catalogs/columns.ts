import type { IColumnDefinitionType } from 'components/Table/types'
import type { ICatalog } from './api'

export const columns: IColumnDefinitionType<ICatalog, keyof ICatalog>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'active',
		header: 'Ativo',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]
