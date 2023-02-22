import type { ReactElement } from 'react'
import TableContent from './components/TableContent'
import TableTitle from './components/TableTitle'
import type { ITableProperties } from './types'

export default function Table<TData, TKey extends keyof TData>({
	data,
	columns,
	title,
	onRowClick
}: ITableProperties<TData, TKey>): ReactElement {
	return (
		<div className='flex h-96 flex-1 flex-col overflow-auto'>
			<TableTitle dataLength={data.length} title={title} />
			<div className='flex-1   overflow-auto bg-white  '>
				<TableContent data={data} columns={columns} onRowClick={onRowClick} />
			</div>
			<div className='h-16 rounded-b-lg border-t  border-bluishgray-fauv  bg-white ' />
		</div>
	)
}
