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
	title: string
}

export default function Table<TData, TKey extends keyof TData>({
	data,
	columns,
	title
}: ITableProperties<TData, TKey>): ReactElement {
	return (
		<>
			<div className='flex h-16 rounded-t-lg  border-b border-bluishgray-fauv bg-white'>
				<div className='mr-6 py-5 pl-6 font-bold text-black-fauv'>{title}</div>
				<hr className='h-full border-r border-bluishgray-fauv' />
				<div className='ml-6 py-5 font-inter text-sm font-light leading-6 text-black-fauv'>
					{`${data.length < 10 ? `0${data.length}` : data.length}  ${title}`}
				</div>
			</div>
			<div className=' overflow-auto'>
				<table className='w-full bg-white text-left text-sm text-gray-500 dark:text-gray-400'>
					<TableHeader columns={columns} />
					<TableRows data={data} columns={columns} />
				</table>
			</div>
			<div className='h-16 rounded-b-lg border-t  border-bluishgray-fauv  bg-white ' />
		</>
	)
}
