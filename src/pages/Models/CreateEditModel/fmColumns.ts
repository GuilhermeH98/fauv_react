import type { IColumnDefinitionType } from 'components/Table/types'
import type { IFm } from '../api'

export const columns: IColumnDefinitionType<IFm, keyof IFm>[] = [
	{
		key: 'name',
		header: 'Nome'
	}
]
