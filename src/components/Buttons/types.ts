export interface IButtonProperties
	extends React.HTMLAttributes<HTMLButtonElement> {
	isSubmit?: boolean
	isSubmitting?: boolean
	disabled?: boolean
	className?: string
	onClick?: () => void
}
