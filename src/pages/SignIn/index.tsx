import SecondaryButton from 'components/Buttons/SecondaryButton'
import SecondaryInput from 'components/Inputs/SecondaryInput'
import { createSnackbar } from 'components/Snackbar/utils'
import { AuthenticationLayout } from 'layouts/Authentication'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { getErrorMessage } from 'utils/error'
import { resetIsSubmittedOptions } from 'utils/miscellaneous'
import type { ICredentials, ISignInPayload } from './api'
import { useSignInMutation } from './api'
import { setCredentialsLocalStorage } from './utils'

export default function SignIn(): ReactElement {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitted }
	} = useForm<ISignInPayload>()
	const { mutate } = useSignInMutation()

	function onSubmit(data: ISignInPayload): void {
		mutate(data, {
			onSettled() {
				reset(undefined, resetIsSubmittedOptions)
			},
			onSuccess(response: ICredentials) {
				setCredentialsLocalStorage(response)
				navigate('/home')
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
			subtitle='Entre para gerenciar a qualidade da produção'
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
			<div className='flex w-72 justify-between'>
				<Link
					to='/signup'
					className=' ml-auto font-montserrat text-base font-semibold leading-4 text-blue-fauv hover:text-[#2A6791]'
				>
					Novo usuário?
				</Link>
			</div>
			<SecondaryButton isSubmitting={isSubmitted}>Login</SecondaryButton>
		</AuthenticationLayout>
	)
}
