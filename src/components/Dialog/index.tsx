import type { ReactElement } from 'react'
import type { IDialogProperties } from './types'
import { onContentClick } from './utils'

export function Dialog({
	children,
	isOpen,
	onClose,
	widthClass = 'w-[40.75rem]',
	heightClass = ''
}: IDialogProperties): ReactElement | null {
	if (!isOpen) {
		return null
	}

	return (
		<div
			className='fixed	inset-0 z-50 bg-gray-transparent	'
			onMouseDown={onClose}
			aria-hidden='true'
		>
			<div className='flex h-screen items-center justify-center'>
				<div
					className={`flex ${widthClass} ${heightClass} max-h-[90%] flex-col overflow-y-auto overflow-x-hidden rounded-lg bg-white p-6`}
					onMouseDown={onContentClick}
					aria-hidden='true'
				>
					{children}
				</div>
			</div>
		</div>
	)
}
