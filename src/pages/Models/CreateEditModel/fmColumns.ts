import type { IColumnDefinitionType } from 'components/Table/types'
import type { IFm } from '../api'

export const columns: IColumnDefinitionType<IFm, keyof IFm>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'higherTolerance',
		header: 'Tolerância Superior'
	},
	{
		key: 'lowerTolerance',
		header: 'Tolerância Inferior'
	},
	{
		key: 'defaultValue',
		header: 'Valor Padrão'
	},
	{
		key: 'axis',
		header: 'Eixo'
	},

	{
		key: 'catalogType',
		header: 'Catálogo'
	},
	{
		key: 'level',
		header: 'Nível'
	}
]
