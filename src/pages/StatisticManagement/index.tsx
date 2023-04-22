import { Dialog } from 'components/Dialog'
import { Select } from 'components/Inputs/Select'
import { Query } from 'components/Query'
import Table from 'components/Table'
import { useCarsQuery } from 'pages/Cars/api'
import { useModelsQuery } from 'pages/Models/api'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { mapSelectOptions, useToggle } from 'utils/miscellaneous'
import { ConfigurationDialog } from './ConfigurationDialog.tsx'
import type { IFilterProperties, IStatisticConfiguration } from './api'
import { useStatisticConfigurationsQuery } from './api'
import { columns } from './columns'

export function StatisticManagement() {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedConfiguration, setSelectedConfiguration] =
		useState<IStatisticConfiguration | null>(null)
	const query = useStatisticConfigurationsQuery()
	const configurations = query.data || []
	const { data: cars } = useCarsQuery()
	const { data: models } = useModelsQuery()

	const { control, setValue } = useForm<IFilterProperties>()
	const [carIdValue, modelIdValue] = useWatch({
		control,
		name: ['carId', 'modelId']
	})

	const filteredModels =
		carIdValue && models
			? models.filter(model => model.car.id === carIdValue)
			: []

	const filteredConfigurations = configurations.filter(configuration => {
		if (!carIdValue) {
			return true
		}

		let isFilteredCard
		isFilteredCard = configuration.model.car.id === carIdValue
		isFilteredCard = modelIdValue
			? isFilteredCard && configuration.model.id === modelIdValue
			: isFilteredCard

		return isFilteredCard
	})

	function onCloseDialog() {
		setSelectedConfiguration(null)
		toggleIsDialogOpen()
	}

	function onRowClick(configuration: IStatisticConfiguration) {
		setSelectedConfiguration(configuration)
		toggleIsDialogOpen()
	}

	useEffect(() => {
		setValue('modelId', '')
	}, [carIdValue, setValue])

	return (
		<>
			<div className='mb-2 flex h-18 w-full items-center rounded-lg bg-white'>
				<form className='flex w-full gap-6'>
					<div className='ml-6 flex items-center'>
						<span className='mr-2 font-inter text-base font-semibold  leading-[160%] text-black-fauv-3'>
							Modelo:
						</span>
						<Select
							widthClassName='w-[11rem]'
							name='carId'
							defaultValue=''
							options={[
								{ label: 'Todos', value: '' },
								...mapSelectOptions(cars)
							]}
							control={control}
						/>
					</div>
					<div className='flex items-center'>
						<span className='mr-2 font-inter text-base font-semibold  leading-[160%] text-black-fauv-3'>
							Part Number:
						</span>
						<Select
							name='modelId'
							defaultValue=''
							options={[
								{ label: 'Todos', value: '' },
								...mapSelectOptions(filteredModels, 'partNumber')
							]}
							control={control}
							widthClassName='w-[11rem]'
						/>
					</div>
				</form>
			</div>
			<Query
				query={query}
				render={() => (
					<Table
						title='Configurações'
						data={filteredConfigurations}
						columns={columns}
						onRowClick={onRowClick}
					/>
				)}
			/>
			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<ConfigurationDialog
					selectedConfiguration={selectedConfiguration}
					onClose={onCloseDialog}
				/>
			</Dialog>
		</>
	)
}
