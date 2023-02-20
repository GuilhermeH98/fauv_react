import type { IColumnDefinitionType } from 'components/Table/types'
import type { IEmployee } from './api'

export const columns: IColumnDefinitionType<IEmployee, keyof IEmployee>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'email',
		header: 'E-mail'
	},
	{
		key: 'active',
		header: 'Ativo',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]
