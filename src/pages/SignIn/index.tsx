import Checkbox from 'components/Checkbox'
import Input from 'components/Input'
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
					className=' font-montserrat text-base font-semibold  leading-4 text-blue-fauv'
				>
					Novo usuário?
				</Link>
			</div>
			<button
				type='submit'
				className='mb-4 h-11 w-72 rounded-btn bg-blue-fauv font-lexend text-white shadow-btn'
			>
				Login
			</button>
		</AuthenticationLayout>
	)
}
