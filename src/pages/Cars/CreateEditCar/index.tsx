import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import { createSnackbar } from 'components/Snackbar/utils'
import Switch from 'components/Switch'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getErrorMessage } from 'utils/error'
import { useCarMutation } from '../api'
import type { ICreateEditCarProperties, IFieldValues } from './types'

export function CreateEditCar({
	onClose,
	selectedCar
}: ICreateEditCarProperties) {
	const { mutate } = useCarMutation(!!selectedCar)

	// const { data: units } = useUnitsQuery()

	const {
		reset,
		register,
		handleSubmit,
		formState: { isValid, isSubmitted }
	} = useForm<IFieldValues>()

	function onCreateEditCar(values: IFieldValues) {
		const payload = selectedCar
			? { id: selectedCar.id, ...values }
			: { ...values, active: true }

		const unitId = import.meta.env.VITE_UNIT_ID ?? 1
		mutate(
			{ ...payload, unitId: Number(unitId) },
			{
				onSettled() {
					reset(undefined, {
						keepDefaultValues: true,
						keepDirty: true,
						keepErrors: true,
						keepIsSubmitted: false,
						keepIsValid: true,
						keepSubmitCount: false,
						keepTouched: true,
						keepValues: true
					})
				},
				onSuccess() {
					onClose()
					createSnackbar('success', 'Carro salvo com sucesso!')
				},
				onError(error) {
					createSnackbar(
						'error',
						getErrorMessage(error.message) || 'Erro ao salvar carro!'
					)
				}
			}
		)
	}
	useEffect(() => {
		if (selectedCar)
			reset({
				...selectedCar
				// unit: selectedCar.unit.id
			})
	}, [selectedCar, reset])

	return (
		<form onSubmit={handleSubmit(onCreateEditCar)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={selectedCar ? 'Detalhes do Carro' : 'Novo Carro'}
					isFormDialog
					disabled={!isValid}
					isSubmitting={isSubmitted}
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
