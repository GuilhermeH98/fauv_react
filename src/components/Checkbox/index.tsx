import type { ReactElement } from 'react'
import type { ICheckboxProperties } from './types'

export default function FauvTitle({
	id,
	label
}: ICheckboxProperties): ReactElement {
	return (
		<div className='flex items-center'>
			<input
				id={id}
				type='checkbox'
				value=''
				className='rounded border-transparent bg-softblue-fauv text-blue-600 focus:ring-2 focus:ring-blue-500 '
			/>
			<label
				htmlFor={id}
				className='ml-2 font-lexend text-base font-medium leading-4 text-blue-fauv'
			>
				{label}
			</label>
		</div>
	)
}
