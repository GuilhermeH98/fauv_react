import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import { createSnackbar } from 'components/Snackbar/utils'
import Switch from 'components/Switch'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getErrorMessage } from 'utils/error'
import { useUnitMutation } from '../api'
import type { ICreateEditUnitProperties, IFieldValues } from './types'

export function CreateEditUnit({
	onClose,
	selectedUnit
}: ICreateEditUnitProperties) {
	const { mutate } = useUnitMutation(!!selectedUnit)

	const {
		reset,
		register,
		handleSubmit,
		formState: { isSubmitting, isValid }
	} = useForm<IFieldValues>()

	function onCreateEditUnit(values: IFieldValues) {
		const payload = selectedUnit
			? { id: selectedUnit.id, ...values }
			: { ...values, active: true }
		mutate(
			{ ...payload },
			{
				onSuccess() {
					onClose()
					createSnackbar('success', 'Planta salva com sucesso!')
				},
				onError(error) {
					createSnackbar(
						'error',
						getErrorMessage(error.message) || 'Erro ao salvar planta!'
					)
				}
			}
		)
	}
	useEffect(() => {
		if (selectedUnit) reset(selectedUnit)
	}, [selectedUnit, reset])

	return (
		<form onSubmit={handleSubmit(onCreateEditUnit)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={selectedUnit ? 'Detalhes da Planta' : 'Nova Planta'}
					isFormDialog
					disabled={!isValid || isSubmitting}
				/>
				{selectedUnit && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg   font-bold '>
							{selectedUnit.name}
						</span>
						<div className='my-auto ml-auto'>
							<Switch id='active' label='Catálogo Ativo' register={register} />
						</div>
					</div>
				)}
				<hr className='border-bluishgray-fauv' />

				<Input label='Nome' id='name' register={register} required />
			</div>
		</form>
	)
}
