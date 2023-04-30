import SecondaryButton from 'components/Buttons/SecondaryButton'
import SecondaryInput from 'components/Inputs/SecondaryInput'
import { SecondaryMultiselect } from 'components/Inputs/SecondaryMultiselect'
import { createSnackbar } from 'components/Snackbar/utils'
import { AuthenticationLayout } from 'layouts/Authentication'
import { ROLES_OPTIONS } from 'pages/Users/api'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getErrorMessage } from 'utils/error'
import type { IRegisterPayload } from './api'
import { useRegisterMutation } from './api'

export default function SignUp(): ReactElement {
	const { mutate } = useRegisterMutation()

	const navigate = useNavigate()

	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<IRegisterPayload>()

	function onSubmit(data: IRegisterPayload): void {
		if (data.password !== data.passwordConfirmation) {
			createSnackbar('error', 'As senhas não coincidem!')
			return
		}

		mutate(data, {
			onSuccess() {
				navigate('/signup/success')
			},
			onError(error) {
				createSnackbar(
					'error',
					getErrorMessage(error.message) ||
						'Erro ao fazer login! Verifique suas informações.'
				)
			}
		})
	}

	return (
		<AuthenticationLayout
			subtitle='Informe seus dados'
			onSubmit={handleSubmit(onSubmit)}
		>
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
				placeholder='Selecione os papéis'
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
			<SecondaryButton>Solicitar Cadastro</SecondaryButton>
		</AuthenticationLayout>
	)
}
