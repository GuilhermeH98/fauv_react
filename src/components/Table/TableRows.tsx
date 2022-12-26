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
		<tr key={`row-${index}`} className='h-12'>
			{columns.map((column, columnIndex) => (
				<td
					key={`cell-${columnIndex}`}
					className={`py-4 px-6 font-inter text-sm font-normal leading-snug text-black-fauv-2 ${
						index % 2 === 0 ? 'bg-softblue-fauv' : ''
					}`}
				>
					<>{row[column.key]}</>
				</td>
			))}
		</tr>
	))

	return <tbody>{rows}</tbody>
}

export default TableRows
