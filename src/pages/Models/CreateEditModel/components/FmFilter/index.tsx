import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import type { IFmFilter } from './types'

export function FmFilter({ fmList, setFilteredList }: IFmFilter): ReactElement {
	const [filterValue, setFilterValue] = useState<string>('')

	useEffect(() => {
		if (filterValue) {
			const filteredList = fmList.filter(fm =>
				fm.name.toLowerCase().includes(filterValue.toLowerCase())
			)
			setFilteredList(filteredList)
		} else if (fmList.length > 0) {
			setFilteredList(fmList)
		}
	}, [filterValue, setFilteredList, fmList])

	return (
		<>
			<RiSearchLine size={24} className='my-auto mr-2 text-blue-fauv' />
			<input
				id='fmFilter'
				placeholder='Filtar Nome'
				type='text'
				value={filterValue}
				onChange={event => setFilterValue(event.target.value)}
				className='h-10 w-52 rounded border border-bluishgray-fauv  focus:border-blue-fauv
		  '
			/>
		</>
	)
}
