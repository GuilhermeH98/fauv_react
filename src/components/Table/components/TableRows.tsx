/* eslint-disable react/jsx-no-useless-fragment */
import type { ITableRowsProperties } from '../types'

function TableRows<TData, TKey extends keyof TData>({
	data,
	columns,
	onRowClick
}: ITableRowsProperties<TData, TKey>): JSX.Element {
	const rows = data.map((row, index) => (
		<tr
			key={`row-${index}`}
			className={`h-12 ${
				onRowClick ? 'cursor-pointer hover:bg-bluishgray-fauv' : ''
			}  ${
				index % 2 === 0 ? 'bg-softblue-fauv' : ''
			} border-y border-gray-fauv`}
			onClick={onRowClick ? () => onRowClick(row) : undefined}
		>
			{columns.map((column, columnIndex) => (
				<td
					key={`cell-${columnIndex}`}
					className='py-4 px-6 font-inter text-sm font-normal leading-snug text-black-fauv-2'
				>
					{column.render ? (
						column.render(row)
					) : (
						<>
							{column.valueGetter?.(row) ||
								column.valueFormatter?.(row[column.key as TKey]) ||
								row[column.key as TKey]}
						</>
					)}
				</td>
			))}
		</tr>
	))

	return <tbody>{rows}</tbody>
}

export default TableRows
