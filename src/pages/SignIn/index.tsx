import SecondaryButton from 'components/Buttons/SecondaryButton'
import Checkbox from 'components/Checkbox'
import SecondaryInput from 'components/Inputs/SecondaryInput'
import { AuthenticationLayout } from 'layouts/Authentication'
import type { ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn(): ReactElement {
	const navigate = useNavigate()

	function onSubmit(): void {
		localStorage.setItem('token', 'guilherme.harich')
		navigate('/home')
	}

	return (
		<AuthenticationLayout
			subtitle='Entre para gerenciar a qualidade da produção'
			onSubmit={onSubmit}
		>
			<SecondaryInput type='text' id='userId' placeholder='ID' required />
			<SecondaryInput
				type='password'
				id='password'
				placeholder='Senha'
				required
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
