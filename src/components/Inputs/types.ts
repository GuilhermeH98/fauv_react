import type {
	Control,
	FieldValues,
	Path,
	PathValue,
	RegisterOptions,
	UseFormRegister
} from 'react-hook-form'
import type { ISelectOption } from 'utils/miscellaneous'

export interface IInputProperties<TFieldValues extends FieldValues>
	extends React.HTMLAttributes<HTMLInputElement> {
	id: Path<TFieldValues>
	type?: string
	required?: boolean
	label?: string
	widthClassName?: string
	register: UseFormRegister<TFieldValues>
	rules?: Exclude<
		RegisterOptions,
		'setValueAs' | 'valueAsDate' | 'valueAsNumber'
	>
	searchIcon?: boolean
	roundedClassName?: string
	disabled?: boolean
}

export interface ISelectProperties<TFieldValues extends FieldValues, TContext> {
	options: ISelectOption[]
	control: Control<TFieldValues, TContext>
	name: Path<TFieldValues>
	label?: string
	className?: string
	placeholder?: string
	staticMenu?: boolean
	required?: boolean
	widthClassName?: string
	isSearchable?: boolean
	rules?: Exclude<
		RegisterOptions,
		'setValueAs' | 'valueAsDate' | 'valueAsNumber'
	>
	defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>
	disabled?: boolean
}
