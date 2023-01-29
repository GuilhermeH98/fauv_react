import type { IColumnDefinitionType } from 'components/Table/types'
import type { IUser } from './api'
import { getRolesText } from './utils'

export const columns: IColumnDefinitionType<IUser, keyof IUser>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'vwId',
		header: 'VW ID'
	},
	{
		key: 'roles',
		header: 'Papeis',
		valueGetter: (row: IUser) => getRolesText(row)
	},
	{
		key: 'active',
		header: 'Ativo',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]