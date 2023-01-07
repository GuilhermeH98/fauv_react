import type { IColumnDefinitionType } from 'components/Table'
import type { ICatalog } from './api'

export const columns: IColumnDefinitionType<ICatalog, keyof ICatalog>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'isActive',
		header: 'Ativo'
	}
]
