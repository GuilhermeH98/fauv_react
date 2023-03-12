import type { IColumnDefinitionType } from 'components/Table/types'
import { RiDeleteBinLine } from 'react-icons/ri'
import type { IFm, IPmp } from '../api'

export function getPmpColumns(
	onRemove: (row: IFm | IPmp, rowType: 'fm' | 'pmp') => void
): IColumnDefinitionType<IPmp, keyof IPmp>[] {
	return [
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
			header: 'X',
			valueFormatter: value => value?.toString().replace('.', ',') || ''
		},
		{
			key: 'y',
			header: 'Y',
			valueFormatter: value => value?.toString().replace('.', ',') || ''
		},
		{
			key: 'z',
			header: 'Z',
			valueFormatter: value => value?.toString().replace('.', ',') || ''
		},
		{
			key: 'active',
			header: 'Ativo',
			valueFormatter: value => (value ? 'Sim' : 'Não')
		},
		{
			key: 'actions',
			header: 'Ações',
			render: row => (
				<RiDeleteBinLine
					className=' cursor-pointer text-icon text-gray-fauv-2 '
					onClick={event => {
						onRemove(row, 'pmp')
						event.stopPropagation()
					}}
				/>
			)
		}
	]
}
