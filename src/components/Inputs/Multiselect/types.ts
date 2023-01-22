import type { Control, FieldValues, Path } from 'react-hook-form'
import type { ISelectOption } from 'utils/miscellaneous'

export interface ISelectProperties<TFieldValues extends FieldValues, TContext> {
	options: ISelectOption[]
	control: Control<TFieldValues, TContext>
	name: Path<TFieldValues>
	label?: string
	className?: string
	placeholder?: string
	staticMenu?: boolean
}
