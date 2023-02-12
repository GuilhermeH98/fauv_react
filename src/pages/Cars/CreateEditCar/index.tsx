import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import { Select } from 'components/Inputs/Select'
import { createSnackbar } from 'components/Snackbar/utils'
import Switch from 'components/Switch'
import { useUnitsQuery } from 'pages/Units/api'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { mapSelectOptions } from 'utils/miscellaneous'
import { useCarMutation } from '../api'
import type { ICreateEditCarProperties, IFieldValues } from './types'

export function CreateEditCar({
	onClose,
	selectedCar
}: ICreateEditCarProperties) {
	const { mutate } = useCarMutation(!!selectedCar)

	const { data: units } = useUnitsQuery()

	const {
		control,
		reset,
		register,
		handleSubmit,
		formState: { isSubmitting, isValid }
	} = useForm<IFieldValues>()

	function onCreateEditCar(values: IFieldValues) {
		const payload = selectedCar
			? { id: selectedCar.id, ...values }
			: { ...values, active: true }
		mutate(
			{ ...payload },
			{
				onSuccess() {
					onClose()
					createSnackbar('success', 'Carro salvo com sucesso!')
				},
				onError() {
					createSnackbar('error', 'Erro ao salvar carro!')
				}
			}
		)
	}
	useEffect(() => {
		if (selectedCar) reset({ ...selectedCar, unit: selectedCar.unit.id })
	}, [selectedCar, reset])

	return (
		<form onSubmit={handleSubmit(onCreateEditCar)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={selectedCar ? 'Detalhes do Carro' : 'Novo Carro'}
					isFormDialog
					disabledSubmit={!isValid || isSubmitting}
				/>
				{selectedCar && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg   font-bold '>
							{selectedCar.name}
						</span>
						<div className='my-auto ml-auto'>
							<Switch id='active' label='Carro Ativo' register={register} />
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
					required
				/>
			</div>
		</form>
	)
}
