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
		<>
			<TableTitle dataLength={data.length} title={title} />
			<div className=' h-[60%]  overflow-auto bg-white  xl:h-[38rem]'>
				<table className='  w-full  text-left text-sm text-gray-500'>
					<TableHeader columns={columns} />
					<TableRows data={data} columns={columns} onRowClick={onRowClick} />
				</table>
			</div>
			<div className='h-16 rounded-b-lg border-t  border-bluishgray-fauv  bg-white ' />
		</>
	)
}
