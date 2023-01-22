import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import { Select } from 'components/Inputs/Select'
import Switch from 'components/Switch'
import { useUnitsQuery } from 'pages/Units/api'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { mapSelectOptions } from 'utils/miscellaneous'
import { useEquipmentMutation } from '../api'
import type { ICreateEditEquipmentProperties, IFieldValues } from './types'

export function CreateEditEquipment({
	onClose,
	selectedEquipment
}: ICreateEditEquipmentProperties) {
	const { mutate } = useEquipmentMutation(!!selectedEquipment)

	const { data: units } = useUnitsQuery()

	const {
		reset,
		register,
		control,
		handleSubmit,
		formState: { isSubmitting, isValid }
	} = useForm<IFieldValues>()

	function onCreateEditEquipment(values: IFieldValues) {
		const payload = selectedEquipment
			? {
					...values,
					id: selectedEquipment.id
			  }
			: {
					...values,
					active: true
			  }
		mutate(
			{ ...payload },
			{
				onSuccess() {
					onClose()
				}
			}
		)
	}
	useEffect(() => {
		if (selectedEquipment)
			reset({ ...selectedEquipment, unit: selectedEquipment.unit.id })
	}, [selectedEquipment, reset])

	return (
		<form onSubmit={handleSubmit(onCreateEditEquipment)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={
						selectedEquipment ? 'Detalhes do Equipamento' : 'Novo Equipamento'
					}
					isFormDialog
					disabledSubmit={!isValid || isSubmitting}
				/>
				{selectedEquipment && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg   font-bold '>
							{selectedEquipment.name}
						</span>
						<div className='my-auto ml-auto'>
							<Switch
								id='active'
								label='Equipamento Ativo'
								register={register}
							/>
						</div>
					</div>
				)}
				<hr className='border-bluishgray-fauv' />

				<Input label='Nome' id='name' register={register} required />
				<Select
					label='Planta'
					name='unit'
					options={mapSelectOptions(units?.filter(unit => unit.active))}
					control={control}
					staticMenu
				/>
			</div>
		</form>
	)
}
