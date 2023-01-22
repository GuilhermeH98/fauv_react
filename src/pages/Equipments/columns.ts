import type { IColumnDefinitionType } from 'components/Table/types'
import type { IEquipment } from './api'

export const columns: IColumnDefinitionType<IEquipment, keyof IEquipment>[] = [
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
