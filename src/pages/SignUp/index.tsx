import Input from 'components/Input'
import SecondaryButton from 'components/SecondaryButton'
import { AuthenticationLayout } from 'layouts/Authentication'
import type { ReactElement } from 'react'

export default function SignUp(): ReactElement {
	// TODO: Rendering RequestSuccess component on success
	return (
		<AuthenticationLayout subtitle='Informe seus dados'>
			<Input type='text' id='userId' placeholder='ID' required />
			<Input type='password' id='password' placeholder='Senha' required />
			<Input
				type='password'
				id='confirmPassword'
				placeholder='Repetir senha'
				required
			/>
			<select
				id='role'
				className='h-11 w-72 rounded-lg border border-transparent bg-softblue-fauv p-2.5 text-sm text-blue-fauv focus:border-blue-500 focus:ring-blue-500 '
				required
			>
				<option value='' disabled selected>
					Selecione o papel
				</option>
				<option value='administrator'>Admin</option>
				<option value='inspector'>Inspetor</option>
				<option value='consultant'>Consultante</option>
			</select>
			<SecondaryButton>Solicitar Cadastro</SecondaryButton>
			{/* {isSuccess && <RequestSuccess />} */}
		</AuthenticationLayout>
	)
}
