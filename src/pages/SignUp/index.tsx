import SecondaryButton from 'components/Buttons/SecondaryButton'
import SecondaryInput from 'components/Inputs/SecondaryInput'
import { SecondaryMultiselect } from 'components/Inputs/SecondaryMultiselect'
import { createSnackbar } from 'components/Snackbar/utils'
import { AuthenticationLayout } from 'layouts/Authentication'
import { ROLES_OPTIONS } from 'pages/Users/api'
import type { ReactElement } from 'react'
import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getErrorMessage } from 'utils/error'
import { resetIsSubmittedOptions } from 'utils/miscellaneous'
import type { IRegisterPayload } from './api'
import { useRegisterMutation } from './api'

export default function SignUp(): ReactElement {
	const { mutate } = useRegisterMutation()

	const navigate = useNavigate()

	const {
		register,
		control,
		reset,
		handleSubmit,
		formState: { errors, isValid, isSubmitted }
	} = useForm<IRegisterPayload>({ mode: 'onBlur' })

	const passwordValue = useWatch({ control, name: 'password' })

	function onSubmit(data: IRegisterPayload): void {
		mutate(data, {
			onSettled() {
				reset(undefined, resetIsSubmittedOptions)
			},
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

	useEffect(() => {
		if (isSubmitted && !isValid) {
			reset(undefined, resetIsSubmittedOptions)
		}
	}, [isSubmitted, isValid, reset])

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
				rules={{ maxLength: 10, minLength: 7 }}
			/>
			{errors.vwId && errors.vwId.type === 'minLength' && (
				<p className='font-lexend text-base font-medium leading-5 text-red-fauv'>
					O ID deve ter no mínimo 7 caracteres
				</p>
			)}
			{errors.vwId && errors.vwId.type === 'maxLength' && (
				<p className='font-lexend text-base font-medium leading-5 text-red-fauv'>
					O ID deve ter no máximo 10 caracteres
				</p>
			)}
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
				rules={{
					validate: (value: string) =>
						value === passwordValue || 'As senhas não coincidem'
				}}
			/>
			{errors.passwordConfirmation && (
				<p className='font-lexend text-base font-medium leading-5 text-red-fauv'>
					{errors.passwordConfirmation.message}
				</p>
			)}
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
			<SecondaryButton disabled={!isValid} isSubmitting={isSubmitted}>
				Solicitar Cadastro
			</SecondaryButton>
		</AuthenticationLayout>
	)
}
