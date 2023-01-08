import type { FieldValues, Path, UseFormRegister } from 'react-hook-form'

export interface ISwitchProperties<TFieldValues extends FieldValues> {
	id: Path<TFieldValues>
	label?: string
	register: UseFormRegister<TFieldValues>
	required?: boolean
}
