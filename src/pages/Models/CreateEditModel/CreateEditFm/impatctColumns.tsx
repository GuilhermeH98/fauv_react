import Input from 'components/Inputs/Input'
import type { IColumnDefinitionType } from 'components/Table/types'
import type { IFm } from 'pages/Models/api'
import type { UseFormRegister } from 'react-hook-form'
import { RiDeleteBinLine } from 'react-icons/ri'
import type { IImpactRow } from './types'

export function getColumns(
	register: UseFormRegister<IFm>,
	onRemove: (row: IImpactRow) => void
): IColumnDefinitionType<IImpactRow, keyof IImpactRow>[] {
	return [
		{
			key: 'info',
			header: 'Descrição',
			render: row => (
				<Input
					id={`fmImpactList.${row.id}.info`}
					key={`axisCoordinateList.${row.id}.info`}
					register={register}
				/>
			)
		},
		{
			key: 'actions',
			header: 'Remover',
			render: row => (
				<RiDeleteBinLine
					className=' cursor-pointer text-icon text-gray-fauv-2 '
					onClick={() => onRemove(row)}
				/>
			)
		}
	]
}
