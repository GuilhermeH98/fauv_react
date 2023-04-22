import type { ReactElement } from 'react'
import type { FieldValues } from 'react-hook-form'
import type { ISwitchProperties } from './types'

export default function Switch<TFieldValues extends FieldValues>({
	label,
	id,
	register,
	required
}: ISwitchProperties<TFieldValues>): ReactElement {
	return (
		<div className='h-5'>
			<label
				htmlFor={id}
				className='relative mb-4 flex cursor-pointer items-center'
			>
				<input
					type='checkbox'
					id={id}
					className='sr-only'
					{...register(id)}
					required={required}
				/>
				<div className='toggle-bg peer h-5 w-11 rounded-full border-2 border-gray-200 bg-gray-200' />
				<span className='ml-3 text-sm font-medium text-gray-900'>{label}</span>
			</label>{' '}
		</div>
	)
}
