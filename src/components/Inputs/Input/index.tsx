import type { ReactElement } from 'react'
import type { FieldValues } from 'react-hook-form'
import type { IInputProperties } from '../types'

export default function Input<TFieldValues extends FieldValues>({
	type,
	id,
	widthClassName,
	placeholder,
	required = false,
	label,
	register,
	rules
}: IInputProperties<TFieldValues>): ReactElement {
	return (
		<div className={`grid ${widthClassName ?? ' w-full'} gap-4`}>
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
				{...register(id, {
					required,
					...rules
				})}
				className={`h-10 rounded border border-bluishgray-fauv focus:border-blue-fauv  ${
					widthClassName ?? ' w-full'
				}`}
			/>
		</div>
	)
}
