import type { ReactElement } from 'react'
import type { ITableContentProperties } from '../types'
import TableHeader from './TableHeader'
import TableRows from './TableRows'

export default function TableContent<TData, TKey extends keyof TData>({
	data,
	columns,
	onRowClick,
	className = ''
}: ITableContentProperties<TData, TKey>): ReactElement {
	return (
		<div className={`${className} overflow-auto`}>
			<table className='w-full text-left text-sm text-gray-500'>
				<TableHeader columns={columns} />
				<TableRows data={data} columns={columns} onRowClick={onRowClick} />
			</table>
		</div>
	)
}
