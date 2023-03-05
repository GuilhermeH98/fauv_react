import Button from 'components/Buttons/Button'
import OutlinedButton from 'components/Buttons/OutlinedButton'
import type { ReactElement } from 'react'
import type { IConfirmDialogProperties } from './types'
import { onContentClick } from './utils'

export function ConfirmDialog({
	children,
	isOpen,
	onClose,
	widthClass = 'w-[35rem]',
	heightClass = '',
	title,
	onConfirm
}: IConfirmDialogProperties): ReactElement | null {
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
					className={`flex ${widthClass} ${heightClass} max-h-[90%] flex-col gap-10 overflow-y-auto overflow-x-hidden rounded-lg bg-white p-6`}
					onMouseDown={onContentClick}
					aria-hidden='true'
				>
					<div className='relative mx-auto  font-inter text-lg   font-bold '>
						{title}
					</div>
					<hr className='my-[-16px] border-bluishgray-fauv' />

					<div> {children}</div>
					<div className='flex justify-end'>
						<OutlinedButton
							className='mr-4'
							onClick={onClose}
							aria-label='Close'
						>
							Não
						</OutlinedButton>
						<Button onClick={onConfirm}>Sim</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
