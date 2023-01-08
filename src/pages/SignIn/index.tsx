import SecondaryButton from 'components/Buttons/SecondaryButton'
import Checkbox from 'components/Checkbox'
import SecondaryInput from 'components/Inputs/SecondaryInput'
import { AuthenticationLayout } from 'layouts/Authentication'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import type { ICredentials, ISignInPayload } from './api'
import { useSignInMutation } from './api'

export default function SignIn(): ReactElement {
	const navigate = useNavigate()

	const { register, handleSubmit } = useForm<ISignInPayload>()
	const { mutate } = useSignInMutation()

	function onSubmit(data: ISignInPayload): void {
		mutate(
			{ ...data },
			{
				onSuccess(response: ICredentials) {
					localStorage.setItem('token', response.token)
					navigate('/home')
				}
			}
		)
	}

	return (
		<AuthenticationLayout
			subtitle='Entre para gerenciar a qualidade da produção'
			onSubmit={handleSubmit(onSubmit)}
		>
			<SecondaryInput
				type='text'
				id='username'
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
				<Checkbox id='remember' label='Lembrar-me' />
				<Link
					to='/signup'
					className=' font-montserrat text-base font-semibold leading-4 text-blue-fauv'
				>
					Novo usuário?
				</Link>
			</div>
			<SecondaryButton>Login</SecondaryButton>
		</AuthenticationLayout>
	)
}
