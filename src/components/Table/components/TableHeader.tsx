import type { ITableHeaderProperties } from '../types'

function TableHeader<TData, TKey extends keyof TData>({
	columns,
	blueHeader
}: ITableHeaderProperties<TData, TKey>): JSX.Element {
	const headers = columns.map((column, index) => (
		<th
			key={`headCell-${index}`}
			className={`h-12   border-b  border-blue-fauv py-3 px-6 text-xs font-semibold ${
				blueHeader && index === 0 ? 'rounded-tl' : ''
			} ${blueHeader && index === columns.length - 1 ? 'rounded-tr' : ''}`}
		>
			{column.header}
		</th>
	))

	return (
		<thead className={`${blueHeader ? ' bg-blue-fauv text-white' : ''}`}>
			<tr>{headers}</tr>
		</thead>
	)
}

export default TableHeader
