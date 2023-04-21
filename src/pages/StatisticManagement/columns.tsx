import type { IColumnDefinitionType } from 'components/Table/types'
import type { IStatisticConfiguration } from './api'

export const columns: IColumnDefinitionType<
	IStatisticConfiguration,
	keyof IStatisticConfiguration
>[] = [
	{
		key: 'model',
		header: 'Nome',
		valueGetter: row => row.model.car.name
	},
	{
		key: 'model',
		header: 'Part Number',
		valueGetter: row => row.model.partNumber
	},
	{
		key: 'useCep',
		header: 'CEP',
		valueFormatter: useCep => (useCep ? 'Sim' : 'Não')
	},
	{
		key: 'useSpecification',
		header: 'Especificação',
		valueFormatter: useSpecification => (useSpecification ? 'Sim' : 'Não')
	},
	{
		key: 'useCepCpk',
		header: 'CEP/CPK',
		valueFormatter: useCepCpk => (useCepCpk ? 'Sim' : 'Não')
	},
	{
		key: 'usePpPpk',
		header: 'PP/PPk',
		valueFormatter: usePpPpk => (usePpPpk ? 'Sim' : 'Não')
	},
	{
		key: 'useNormalDistribution',
		header: 'Distribuição Normal',
		valueFormatter: useNormalDistribution =>
			useNormalDistribution ? 'Sim' : 'Não'
	},
	{
		key: 'useSigma',
		header: 'Sigma',
		valueFormatter: useSigma => (useSigma ? 'Sim' : 'Não')
	}
]
