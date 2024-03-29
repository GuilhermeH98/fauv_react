import type { IColumnDefinitionType } from 'components/Table/types'
import type { IUnit } from './api'

export const columns: IColumnDefinitionType<IUnit, keyof IUnit>[] = [
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
