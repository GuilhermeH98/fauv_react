import type { ReactElement } from 'react'
import type { IButtonProperties } from './types'

export default function OutlinedButton({
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
			className={`h-10 rounded-btn border border-blue-fauv  px-4 text-base font-semibold text-blue-fauv disabled:bg-gray-400 ${
				className ?? ''
			}`}
		>
			{children}
		</button>
	)
}
