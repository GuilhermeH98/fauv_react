import type { IColumnDefinitionType } from 'components/Table/types'
import type { IModel } from './api'

export const columns: IColumnDefinitionType<IModel, keyof IModel>[] = [
	{
		key: 'partNumber',
		header: 'Part Number'
	},
	{
		key: 'car',
		header: 'Modelo',
		valueGetter: row => row.car.name
	},
	{
		key: 'stepDescription',
		header: 'Descritivo'
	},

	{
		key: 'active',
		header: 'Ativo',
		valueFormatter: value => (value ? 'Sim' : 'Não')
	}
]
