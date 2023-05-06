import type { IColumnDefinitionType } from 'components/Table/types'
import {
	RiAlertLine,
	RiCheckLine,
	RiCloseLine,
	RiDeleteBinLine
} from 'react-icons/ri'
import { formatDateWithHours } from 'utils/format'
import type { ISample } from './api'
import { Status } from './api'

export function getColumns(
	onRowClick: (id: number) => void
): IColumnDefinitionType<ISample, keyof ISample>[] {
	return [
		{
			key: 'status',
			header: 'Status',
			render: row => {
				if (row.status === Status.SUCCESS) {
					return <RiCheckLine className='text-icon text-green-fauv ' />
				}
				if (row.status === Status.ERROR) {
					return <RiCloseLine className='text-icon text-red-fauv ' />
				}
				return <RiAlertLine className='text-icon text-yellow-fauv ' />
			}
		},
		{
			key: 'pin',
			header: 'PIN'
		},
		{
			key: 'model',
			header: 'PART-NUMBER',
			render: row => (
				<span className='mr-auto font-inter font-semibold text-blue-fauv'>
					{row.model.partNumber}
				</span>
			)
		},
		{
			key: 'model',
			header: 'Modelo',
			valueGetter: row => row.model.car.name
		},
		{
			key: 'ak',
			header: 'AK',
			headerColor: 'text-red-fauv'
		},
		{
			key: 'bk',
			header: 'BK',
			headerColor: 'text-yellow-fauv'
		},
		{
			key: 'io',
			header: 'IO',
			headerColor: 'text-green-fauv'
		},
		{
			key: 'uploadDate',
			header: 'Data',
			valueGetter: row => formatDateWithHours(row.uploadDate)
		},
		{
			key: 'actions',
			header: '',
			render: row => (
				<RiDeleteBinLine
					className='cursor-pointer text-icon text-gray-fauv-2'
					onClick={() => onRowClick(row.id)}
				/>
			)
		}
	]
}
