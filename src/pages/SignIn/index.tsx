import SecondaryButton from 'components/Buttons/SecondaryButton'
import SecondaryInput from 'components/Inputs/SecondaryInput'
import { createSnackbar } from 'components/Snackbar/utils'
import { AuthenticationLayout } from 'layouts/Authentication'
import type { ReactElement } from 'react'
import { useEffect } from 'react'
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
		formState: { isValid, isSubmitted, errors }
	} = useForm<ISignInPayload>({ mode: 'onTouched' })
	const { mutate } = useSignInMutation()

	function onSubmit(data: ISignInPayload): void {
		mutate(data, {
			onSettled() {
				reset(undefined, resetIsSubmittedOptions)
			},
			onSuccess(response: ICredentials) {
				setCredentialsLocalStorage(response)
				navigate('/cars')
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
			{errors.vwId && (
				<p className='font-lexend text-base font-medium leading-5 text-red-fauv'>
					Este campo é obrigatório.
				</p>
			)}
			<SecondaryInput
				type='password'
				id='password'
				placeholder='Senha'
				required
				register={register}
			/>
			{errors.password && (
				<p className='font-lexend text-base font-medium leading-5 text-red-fauv'>
					Este campo é obrigatório.
				</p>
			)}
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
