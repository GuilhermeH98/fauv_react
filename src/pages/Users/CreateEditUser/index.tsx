import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import { Multiselect } from 'components/Inputs/Multiselect'
import { createSnackbar } from 'components/Snackbar/utils'
import Switch from 'components/Switch'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
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
		formState: { isSubmitting, isValid }
	} = useForm<IFieldValues>()

	function onCreateEditUser(values: IFieldValues) {
		const payload = selectedUser
			? {
					...values,
					id: selectedUser.id
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
					createSnackbar('success', 'Usuário salvo com sucesso!')
				},
				onError() {
					createSnackbar('error', 'Erro ao salvar usuário!')
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
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={selectedUser ? 'Detalhes do Usuário' : 'Novo Usuário'}
					isFormDialog
					disabledSubmit={!isValid || isSubmitting}
				/>
				{selectedUser && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg   font-bold '>
							{selectedUser.name}
						</span>
						<div className='my-auto ml-auto'>
							<Switch id='active' label='Usuário Ativo' register={register} />
						</div>
					</div>
				)}
				<hr className='border-bluishgray-fauv' />

				<Input label='Nome' id='name' register={register} required />
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
				<Input label='VW ID' id='vwId' register={register} required />
			</div>
		</form>
	)
}
