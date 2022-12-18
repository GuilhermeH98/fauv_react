/* eslint-disable react/jsx-no-useless-fragment */
import type { IColumnDefinitionType } from '.'

interface TableRowsProperties<TData, TKey extends keyof TData> {
	data: TData[]
	columns: IColumnDefinitionType<TData, TKey>[]
}

function TableRows<TData, TKey extends keyof TData>({
	data,
	columns
}: TableRowsProperties<TData, TKey>): JSX.Element {
	const rows = data.map((row, index) => (
		<tr key={`row-${index}`}>
			{columns.map((column, index2) => (
				<td key={`cell-${index2}`}>
					<>{row[column.key]}</>
				</td>
			))}
		</tr>
	))

	return <tbody>{rows}</tbody>
}

export default TableRows
