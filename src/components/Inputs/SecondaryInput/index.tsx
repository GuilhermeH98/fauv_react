import type { ReactElement } from 'react'
import type { FieldValues } from 'react-hook-form'
import type { IInputProperties } from '../types'

export default function SecondaryInput<TFieldValues extends FieldValues>({
	type,
	id,
	placeholder,
	required,
	register
}: IInputProperties<TFieldValues>): ReactElement {
	return (
		<input
			type={type}
			id={id}
			placeholder={placeholder}
			required={required}
			{...register(id)}
			className='h-11 w-72 rounded-lg border border-transparent bg-softblue-fauv p-2.5 text-sm text-blue-fauv placeholder-blue-fauv  placeholder-opacity-50 focus:border-blue-500 focus:ring-blue-500'
		/>
	)
}
