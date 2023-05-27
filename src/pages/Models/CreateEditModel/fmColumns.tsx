import type { IColumnDefinitionType } from 'components/Table/types'
import { RiDeleteBinLine } from 'react-icons/ri'
import { getCatalogLabel } from 'utils/miscellaneous'
import type { IFm, IPmp } from '../api'

export function getFmColumns(
	onRemove: (row: IFm | IPmp, rowType: 'fm' | 'pmp') => void
): IColumnDefinitionType<IFm, keyof IFm>[] {
	return [
		{
			key: 'name',
			header: 'Nome'
		},
		{
			key: 'higherTolerance',
			header: 'Tolerância Superior',
			valueFormatter: value => value?.toString().replace('.', ',') || ''
		},
		{
			key: 'lowerTolerance',
			header: 'Tolerância Inferior',
			valueFormatter: value => value?.toString().replace('.', ',') || ''
		},
		{
			key: 'defaultValue',
			header: 'Valor Padrão',
			valueFormatter: value => value?.toString().replace('.', ',') || ''
		},
		{
			key: 'axis',
			header: 'Eixo'
		},

		{
			key: 'catalogType',
			header: 'Catálogo',
			valueGetter: row => getCatalogLabel(row.catalogType)
		},
		{
			key: 'level',
			header: 'Nível'
		},
		{
			key: 'actions',
			header: 'Ações',
			render: row => (
				<RiDeleteBinLine
					className=' cursor-pointer text-icon text-gray-fauv-2 '
					onClick={event => {
						onRemove(row, 'fm')
						event.stopPropagation()
					}}
				/>
			)
		}
	]
}
