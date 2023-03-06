import type { IModel } from '../api'

export type IFieldValues = Omit<IModel, 'car'> & {
	car: number
}
