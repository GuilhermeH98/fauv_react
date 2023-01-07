import type { ReactElement } from 'react'
import TableHeader from './components/TableHeader'
import TableRows from './components/TableRows'
import TableTitle from './components/TableTitle'

export interface IColumnDefinitionType<TData, TKey extends keyof TData> {
	key: TKey
	header: string
	width?: number
}

export interface ITableProperties<TData, TKey extends keyof TData> {
	data: TData[]
	columns: IColumnDefinitionType<TData, TKey>[]
	title: string
}

export default function Table<TData, TKey extends keyof TData>({
	data,
	columns,
	title
}: ITableProperties<TData, TKey>): ReactElement {
	return (
		<>
			<TableTitle dataLength={data.length} title={title} />
			<div className=' max-h-96  overflow-auto bg-white  xl:max-h-[38rem]'>
				<table className='  w-full  text-left text-sm text-gray-500'>
					<TableHeader columns={columns} />
					<TableRows data={data} columns={columns} />
				</table>
			</div>
			<div className='h-16 rounded-b-lg border-t  border-bluishgray-fauv  bg-white ' />
		</>
	)
}
