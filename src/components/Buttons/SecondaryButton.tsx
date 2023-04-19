import type { ReactElement } from 'react'
import type { IButtonProperties } from './types'

export default function SecondaryButton({
	disabled,
	children
}: IButtonProperties): ReactElement {
	return (
		<button
			disabled={disabled}
			type='submit'
			className='mb-4 h-11 w-72 rounded-btn-2 bg-blue-fauv font-lexend text-white shadow-btn hover:bg-[#2A6791]'
		>
			{children}
		</button>
	)
}
