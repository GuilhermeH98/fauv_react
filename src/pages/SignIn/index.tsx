import Checkbox from 'components/Checkbox'
import Input from 'components/Input'
import SecondaryButton from 'components/SecondaryButton'
import { AuthenticationLayout } from 'layouts/Authentication'
import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn(): ReactElement {
	return (
		<AuthenticationLayout subtitle='Entre para gerenciar a qualidade da produção'>
			<Input type='text' id='userId' placeholder='ID' required />
			<Input type='password' id='password' placeholder='Senha' required />
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
