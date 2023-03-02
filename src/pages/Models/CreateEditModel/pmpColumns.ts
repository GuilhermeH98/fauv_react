import type { IColumnDefinitionType } from 'components/Table/types'
import type { IPmp } from '../api'

export const columns: IColumnDefinitionType<IPmp, keyof IPmp>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'workingOn',
		header: 'Nominal'
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
		key: 'active',
		header: 'Ativo'
	}
]
