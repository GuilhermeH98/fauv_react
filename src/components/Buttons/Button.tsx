import type { ReactElement } from 'react'
import type { IButtonProperties } from './types'

export default function Button({
	disabled,
	isSubmit,
	children,
	className,
	onClick
}: IButtonProperties): ReactElement {
	return (
		<button
			type={!isSubmit ? 'button' : 'submit'}
			disabled={disabled}
			onClick={onClick}
			className={`h-10 rounded-btn bg-blue-fauv px-4 text-base font-semibold text-white hover:bg-[#2A6791] disabled:bg-gray-400 ${
				className ?? ''
			}`}
		>
			{children}
		</button>
	)
}
