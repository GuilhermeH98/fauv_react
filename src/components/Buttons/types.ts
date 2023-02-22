export interface IButtonProperties
	extends React.HTMLAttributes<HTMLButtonElement> {
	isSubmit?: boolean
	disabled?: boolean
	className?: string
	onClick?: () => void
}
