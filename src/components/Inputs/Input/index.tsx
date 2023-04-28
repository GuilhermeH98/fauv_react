import type { ReactElement } from 'react'
import type { FieldValues } from 'react-hook-form'
import { RiSearchLine } from 'react-icons/ri'
import type { IInputProperties } from '../types'

export default function Input<TFieldValues extends FieldValues>({
	type,
	id,
	widthClassName = 'w-full',
	placeholder,
	required = false,
	label,
	register,
	rules,
	searchIcon = false,
	roundedClassName = 'rounded',
	disabled = false
}: IInputProperties<TFieldValues>): ReactElement {
	return (
		<div className={`grid ${widthClassName} relative gap-4`}>
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
				disabled={disabled}
				step='any'
				{...register(id, {
					required,
					...rules
				})}
				className={`h-10  border border-bluishgray-fauv  focus:border-blue-fauv dark:text-black 
				${roundedClassName} ${widthClassName} ${searchIcon ? 'pr-10' : ''} ${
					disabled ? 'bg-[#F2F2F2]' : ''
				}`}
			/>
			{searchIcon && (
				<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
					<RiSearchLine size={20} className='text-blue-fauv' />
				</div>
			)}
		</div>
	)
}
