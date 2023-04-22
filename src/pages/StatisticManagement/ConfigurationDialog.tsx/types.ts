import type { IStatisticConfiguration } from '../api'

export interface IConfigurationDialogProperties {
	onClose: () => void
	selectedConfiguration: IStatisticConfiguration | null
}

export type IFieldValues = Omit<IStatisticConfiguration, 'model'>
