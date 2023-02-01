import SecondaryButton from 'components/Buttons/SecondaryButton'
import SecondaryInput from 'components/Inputs/SecondaryInput'
import { AuthenticationLayout } from 'layouts/Authentication'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'

export default function SignUp(): ReactElement {
	const { register } = useForm()
	// TODO: Rendering RequestSuccess component on success
	return (
		<AuthenticationLayout subtitle='Informe seus dados'>
			<SecondaryInput
				type='text'
				id='userId'
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
				id='confirmPassword'
				placeholder='Repetir senha'
				required
				register={register}
			/>
			<select
				id='role'
				className='h-11 w-72 rounded-lg border border-transparent bg-softblue-fauv p-2.5 text-sm text-blue-fauv focus:border-blue-500 focus:ring-blue-500 '
				required
			>
				<option value='' disabled selected>
					Selecione o papel
				</option>
				<option value='administrator'>Administrador</option>
				<option value='inspector'>Inspetor</option>
				<option value='consultant'>Consultante</option>
			</select>
			<SecondaryButton>Solicitar Cadastro</SecondaryButton>
			{/* {isSuccess && <RequestSuccess />} */}
		</AuthenticationLayout>
	)
}
