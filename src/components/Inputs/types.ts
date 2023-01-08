import type { FieldValues, Path, UseFormRegister } from 'react-hook-form'

export interface IInputProperties<TFieldValues extends FieldValues>
	extends React.HTMLAttributes<HTMLInputElement> {
	id: Path<TFieldValues>
	type?: string
	required?: boolean
	label?: string
	register: UseFormRegister<TFieldValues>
}
