import type { IColumnDefinitionType } from 'components/Table/types'
import { RiDeleteBinLine } from 'react-icons/ri'
import type { IPmp } from '../api'

export function getPmpColumns(
	onRemove: (row: IPmp) => void
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
						onRemove(row)
						event.stopPropagation()
					}}
				/>
			)
		}
	]
}
