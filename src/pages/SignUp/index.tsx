import SecondaryButton from 'components/Buttons/SecondaryButton'
import SecondaryInput from 'components/Inputs/SecondaryInput'
import { SecondaryMultiselect } from 'components/Inputs/SecondaryMultiselect'
import { createSnackbar } from 'components/Snackbar/utils'
import { AuthenticationLayout } from 'layouts/Authentication'
import { ROLES_OPTIONS } from 'pages/Users/api'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import type { IRegisterPayload } from './api'
import { useRegisterMutation } from './api'
import RequestSuccess from './RequestSuccess'

export default function SignUp(): ReactElement {
	const { mutate, isSuccess } = useRegisterMutation()
	const navigate = useNavigate()

	const { register, control, handleSubmit } = useForm<IRegisterPayload>()

	function onSubmit(data: IRegisterPayload): void {
		if (isSuccess) {
			navigate('/')
		} else {
			mutate(
				{ ...data },
				{
					onError() {
						createSnackbar(
							'error',
							'Erro ao fazer login! Verifique suas informações.'
						)
					}
				}
			)
		}
	}

	return (
		<AuthenticationLayout
			subtitle={!isSuccess ? 'Informe seus dados' : ''}
			onSubmit={handleSubmit(onSubmit)}
		>
			{!isSuccess ? (
				<>
					<SecondaryInput
						type='text'
						id='vwId'
						placeholder='ID'
						required
						register={register}
					/>
					<SecondaryInput
						type='password'
						id='password'
						placeholder='Senha'
						required
						register={register}
					/>
					<SecondaryInput
						type='password'
						id='passwordConfirmation'
						placeholder='Repetir senha'
						required
						register={register}
					/>
					<SecondaryMultiselect
						className=' w-72 '
						control={control}
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
					<SecondaryButton>Solicitar Cadastro</SecondaryButton>
				</>
			) : (
				<RequestSuccess />
			)}
		</AuthenticationLayout>
	)
}
