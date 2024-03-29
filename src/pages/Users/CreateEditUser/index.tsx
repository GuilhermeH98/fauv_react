import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import { Multiselect } from 'components/Inputs/Multiselect'
import { createSnackbar } from 'components/Snackbar/utils'
import Switch from 'components/Switch'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getErrorMessage } from 'utils/error'
import { resetIsSubmittedOptions } from 'utils/miscellaneous'
import { ROLES_OPTIONS, useUserMutation } from '../api'
import type { ICreateEditUserProperties, IFieldValues } from './types'

export function CreateEditUser({
	onClose,
	selectedUser
}: ICreateEditUserProperties) {
	const { mutate } = useUserMutation(!!selectedUser)

	const {
		reset,
		register,
		control,
		handleSubmit,
		formState: { isSubmitted, isValid, errors }
	} = useForm<IFieldValues>({ mode: 'all' })

	function onCreateEditUser(values: IFieldValues) {
		const payload = selectedUser
			? values
			: {
					...values,
					active: true
			  }
		mutate(
			{
				...payload,
				roles: payload.roles.map(role => ({ name: role })),
				password: '123',
				passwordConfirmation: '123'
			},
			{
				onSettled() {
					reset(undefined, resetIsSubmittedOptions)
				},
				onSuccess() {
					onClose()
					createSnackbar('success', 'Usuário salvo com sucesso!')
				},
				onError(error) {
					createSnackbar(
						'error',
						getErrorMessage(error.message) || 'Erro ao salvar usuário!'
					)
				}
			}
		)
	}

	useEffect(() => {
		if (selectedUser) {
			reset({
				...selectedUser,
				roles: selectedUser.roles.map(role => role.name)
			})
		}
	}, [selectedUser, reset])

	return (
		<form onSubmit={handleSubmit(onCreateEditUser)}>
			<div className='flex h-fit flex-col gap-4'>
				<DialogHeader
					title={selectedUser ? 'Detalhes do Usuário' : 'Novo Usuário'}
					isFormDialog
					disabled={!isValid}
					isSubmitting={isSubmitted}
				/>
				{selectedUser && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg font-bold '>
							{selectedUser.vwId}
						</span>
						<div className='my-auto ml-auto'>
							<Switch id='active' label='Usuário Ativo' register={register} />
						</div>
					</div>
				)}
				<hr className='border-bluishgray-fauv' />
				{!selectedUser && (
					<Input label='ID' id='vwId' register={register} required />
				)}
				<Multiselect
					control={control}
					label='Papeis'
					name='roles'
					options={ROLES_OPTIONS}
					staticMenu
					required
					rules={{
						validate: (value: string[]) =>
							value.includes('administrator') && value.includes('consultant')
								? "Não pode ser 'Administrador' e 'Consultor' ao mesmo tempo"
								: true
					}}
				/>
				{errors.roles && (
					<p className='font-lexend text-base font-medium leading-5 text-red-fauv'>
						{errors.roles.message}
					</p>
				)}
			</div>
		</form>
	)
}
