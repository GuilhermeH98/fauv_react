import type { ReactElement } from 'react'
import type { IDialogProperties } from './types'
import { onContentClick } from './utils'

export function Dialog({
	children,
	isOpen,
	onClose,
	widthClass
}: IDialogProperties): ReactElement | null {
	if (!isOpen) {
		return null
	}

	return (
		<div
			className='fixed	inset-0 z-50 bg-gray-transparent	'
			onClick={onClose}
			aria-hidden='true'
		>
			<div className='flex h-screen items-center justify-center'>
				<div
					className={`flex ${
						widthClass ?? 'w-[40.75rem]'
					} max-h-[90%] flex-col overflow-y-auto overflow-x-hidden rounded-lg bg-white p-6`}
					onClick={onContentClick}
					aria-hidden='true'
				>
					{children}
				</div>
			</div>
		</div>
	)
}
