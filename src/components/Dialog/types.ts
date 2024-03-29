import type { ReactNode } from 'react'

export interface IDialogProperties {
	children: ReactNode
	isOpen: boolean
	onClose?: () => void
	widthClass?: string
	heightClass?: string
	isSubmitting?: boolean
}

export interface IConfirmDialogProperties extends IDialogProperties {
	title: string
	onConfirm: () => void
}
