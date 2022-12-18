import type { ReactElement } from 'react'
import TableHeader from './TableHeader'
import TableRows from './TableRows'

export interface IColumnDefinitionType<TData, TKey extends keyof TData> {
	key: TKey
	header: string
	width?: number
}

export interface ITableProperties<TData, TKey extends keyof TData> {
	data: TData[]
	columns: IColumnDefinitionType<TData, TKey>[]
}

export default function Table<TData, TKey extends keyof TData>({
	data,
	columns
}: ITableProperties<TData, TKey>): ReactElement {
	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
			<table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
				<TableHeader columns={columns} />
				<TableRows data={data} columns={columns} />
			</table>
		</div>
	)
}
