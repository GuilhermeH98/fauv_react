import type { ReactElement } from 'react'
import TableHeader from './components/TableHeader'
import TableRows from './components/TableRows'
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
				<table className='  w-full  text-left text-sm text-gray-500'>
					<TableHeader columns={columns} />
					<TableRows data={data} columns={columns} onRowClick={onRowClick} />
				</table>
			</div>
			<div className='h-16 rounded-b-lg border-t  border-bluishgray-fauv  bg-white ' />
		</div>
	)
}
