import type { ReactElement } from 'react'
import type { IInputProperties } from './types'

export default function Input({
	type,
	id,
	placeholder,
	required
}: IInputProperties): ReactElement {
	return (
		<input
			type={type}
			id={id}
			placeholder={placeholder}
			required={required}
			className='h-11 w-72 rounded-lg border border-transparent bg-softblue-fauv p-2.5 text-sm text-blue-fauv placeholder-blue-fauv focus:border-blue-500 focus:ring-blue-500'
		/>
	)
}
