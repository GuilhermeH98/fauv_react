import type { ReactElement } from 'react'
import type { FieldValues } from 'react-hook-form'
import type { IInputProperties } from '../types'

export default function Input<TFieldValues extends FieldValues>({
	type,
	id,
	placeholder,
	required,
	label,
	register
}: IInputProperties<TFieldValues>): ReactElement {
	return (
		<div className='grid gap-4'>
			{label && (
				<label
					className='font-inter text-base font-semibold leading-[160%]  text-black-fauv-3'
					htmlFor={id}
				>
					{label}
				</label>
			)}
			<input
				type={type ?? 'text'}
				id={id}
				placeholder={placeholder}
				required={required ?? false}
				{...register(id)}
				className='h-10 rounded border border-bluishgray-fauv focus:border-blue-fauv '
			/>
		</div>
	)
}
