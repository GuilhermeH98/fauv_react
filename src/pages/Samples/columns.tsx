import type { IColumnDefinitionType } from 'components/Table/types'
import { RiAlertLine, RiCheckLine, RiCloseLine } from 'react-icons/ri'
import type { ISample } from './api'
import { STATUS } from './api'

// TODO USE CALLBACK
export function getColumns(): IColumnDefinitionType<ISample, keyof ISample>[] {
	// onIconClick: (row: ISample) => void
	return [
		{
			key: 'status',
			header: 'Status',
			render: row => {
				if (row.status === STATUS.SUCCESS) {
					return <RiCheckLine className='text-icon text-green-fauv ' />
				}
				if (row.status === STATUS.ERROR) {
					return <RiCloseLine className='text-icon text-red-fauv ' />
				}
				return <RiAlertLine className='text-icon text-yellow-fauv ' />
			}
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
			key: 'uploadDate',
			header: 'Data',
			valueGetter: row =>
				new Date(row.uploadDate)
					.toLocaleDateString('pt-BR', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
						hour: '2-digit',
						minute: '2-digit'
					})
					.replace(',', ' -')
		}
	]
}
