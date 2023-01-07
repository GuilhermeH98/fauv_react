import type { ReactNode } from 'react'

export interface IDialogProperties {
	children: ReactNode
	isOpen: boolean
	onClose?: () => void
	widthClass?: string
}
