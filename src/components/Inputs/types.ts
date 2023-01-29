import type {
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister
} from 'react-hook-form'

export interface IInputProperties<TFieldValues extends FieldValues>
	extends React.HTMLAttributes<HTMLInputElement> {
	id: Path<TFieldValues>
	type?: string
	required?: boolean
	label?: string
	register: UseFormRegister<TFieldValues>
	rules?: Exclude<
		RegisterOptions,
		'setValueAs' | 'valueAsDate' | 'valueAsNumber'
	>
}
