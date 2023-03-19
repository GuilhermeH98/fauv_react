import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { IPmpFilter } from './types'

export function PmpFilter({
	pmpList,
	setFilteredList
}: IPmpFilter): ReactElement {
	const [filterValue, setFilterValue] = useState<string>('')

	useEffect(() => {
		if (filterValue) {
			const filteredList = pmpList.filter(pmp =>
				pmp.name.toLowerCase().includes(filterValue.toLowerCase())
			)
			setFilteredList(filteredList)
		} else if (pmpList.length > 0) {
			setFilteredList(pmpList)
		}
	}, [filterValue, setFilteredList, pmpList])

	return (
		<input
			id='pmpFilter'
			placeholder='Filtar Nome'
			type='text'
			value={filterValue}
			onChange={event => setFilterValue(event.target.value)}
			className='h-10 w-60 rounded border border-bluishgray-fauv  focus:border-blue-fauv
		  '
		/>
	)
}
