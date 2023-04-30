import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import { createSnackbar } from 'components/Snackbar/utils'
import Switch from 'components/Switch'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getErrorMessage } from 'utils/error'
import { useEmployeeMutation } from '../api'
import type { ICreateEditEmployeeProperties, IFieldValues } from './types'

export function CreateEditEmployee({
	onClose,
	selectedEmployee
}: ICreateEditEmployeeProperties) {
	const { mutate } = useEmployeeMutation(!!selectedEmployee)

	const {
		reset,
		register,
		handleSubmit,
		formState: { isSubmitting, isValid }
	} = useForm<IFieldValues>()

	function onCreateEditEmployee(values: IFieldValues) {
		const payload = selectedEmployee
			? {
					...values,
					id: selectedEmployee.id
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
					createSnackbar('success', 'Dados do funcionário salvo com sucesso!')
				},
				onError(error) {
					createSnackbar(
						'error',
						getErrorMessage(error.message) ||
							'Erro ao salvar dados do funcionário!'
					)
				}
			}
		)
	}
	useEffect(() => {
		if (selectedEmployee) reset(selectedEmployee)
	}, [selectedEmployee, reset])

	return (
		<form onSubmit={handleSubmit(onCreateEditEmployee)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={
						selectedEmployee ? 'Detalhes do Funcionário' : 'Novo Funcionário'
					}
					isFormDialog
					disabledSubmit={!isValid || isSubmitting}
				/>
				{selectedEmployee && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg   font-bold '>
							{selectedEmployee.name}
						</span>
						<div className='my-auto ml-auto'>
							<Switch
								id='active'
								label='Funcionário Ativo'
								register={register}
							/>
						</div>
					</div>
				)}
				<hr className='border-bluishgray-fauv' />

				<Input label='Nome' id='name' register={register} required />
				<Input label='Email' id='email' register={register} required />
			</div>
		</form>
	)
}
