import type { IColumnDefinitionType } from '.'

interface TableHeaderProperties<TData, TKey extends keyof TData> {
	columns: IColumnDefinitionType<TData, TKey>[]
}

function TableHeader<TData, TKey extends keyof TData>({
	columns
}: TableHeaderProperties<TData, TKey>): JSX.Element {
	const headers = columns.map((column, index) => (
		<th
			key={`headCell-${index}`}
			className='h-12 border-b border-blue-fauv py-3 px-6 text-xs font-semibold  text-gray-fauv-2'
		>
			{column.header}
		</th>
	))

	return (
		<thead>
			<tr>{headers}</tr>
		</thead>
	)
}

export default TableHeader
