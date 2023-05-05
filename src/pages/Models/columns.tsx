import type { IColumnDefinitionType } from 'components/Table/types'
import { RiDeleteBin6Line } from 'react-icons/ri'
import type { IModel } from './api'

export function getColumns(
	onRowClick: (model: IModel) => void
): IColumnDefinitionType<IModel, keyof IModel>[] {
	return [
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
			key: 'actions',
			header: '',
			render: row => (
				<RiDeleteBin6Line
					className='cursor-pointer text-icon text-gray-fauv-2'
					onClick={event_ => {
						console.log(event_)
						event_.stopPropagation()
						onRowClick(row)
					}}
				/>
			)
		}
	]
}
