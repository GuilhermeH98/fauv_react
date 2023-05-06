import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import { createSnackbar } from 'components/Snackbar/utils'
import Switch from 'components/Switch'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getErrorMessage } from 'utils/error'
import { resetIsSubmittedOptions } from 'utils/miscellaneous'
import { useEquipmentMutation } from '../api'
import type { ICreateEditEquipmentProperties, IFieldValues } from './types'

export function CreateEditEquipment({
	onClose,
	selectedEquipment
}: ICreateEditEquipmentProperties) {
	const { mutate } = useEquipmentMutation(!!selectedEquipment)

	// const { data: units } = useUnitsQuery()

	const {
		reset,
		register,
		handleSubmit,
		formState: { isSubmitted, isValid }
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
		const unitId = import.meta.env.VITE_UNIT_ID ?? 1

		mutate(
			{ ...payload, unitId: Number(unitId) },
			{
				onSettled() {
					reset(undefined, resetIsSubmittedOptions)
				},
				onSuccess() {
					onClose()
					createSnackbar('success', 'Equipamento salvo com sucesso!')
				},
				onError(error) {
					createSnackbar(
						'error',
						getErrorMessage(error.message) || 'Erro ao salvar equipamento!'
					)
				}
			}
		)
	}
	useEffect(() => {
		if (selectedEquipment)
			reset({
				...selectedEquipment
				// unit: selectedEquipment.unit.id
			})
	}, [selectedEquipment, reset])

	return (
		<form onSubmit={handleSubmit(onCreateEditEquipment)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={
						selectedEquipment ? 'Detalhes do Equipamento' : 'Novo Equipamento'
					}
					isFormDialog
					disabled={!isValid}
					isSubmitting={isSubmitted}
				/>
				{selectedEquipment && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg font-bold '>
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
				{/* <Select
					label='Planta'
					name='unit'
					options={mapSelectOptions(units?.filter(unit => unit.active))}
					control={control}
					staticMenu
					required
				/> */}
			</div>
		</form>
	)
}
