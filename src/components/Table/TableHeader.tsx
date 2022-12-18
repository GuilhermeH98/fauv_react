import type { IColumnDefinitionType } from '.'

interface TableHeaderProperties<TData, TKey extends keyof TData> {
	columns: IColumnDefinitionType<TData, TKey>[]
}

function TableHeader<TData, TKey extends keyof TData>({
	columns
}: TableHeaderProperties<TData, TKey>): JSX.Element {
	const headers = columns.map((column, index) => (
		<th key={`headCell-${index}`} className=''>
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
