import type { ReactElement } from 'react'
import type { IInputProperties } from '../types'

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
			className='h-10 w-auto rounded border focus:border-blue-500 focus:ring-blue-500'
		/>
	)
}
