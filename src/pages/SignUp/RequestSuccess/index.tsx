import SecondaryButton from 'components/Buttons/SecondaryButton'
import { AuthenticationLayout } from 'layouts/Authentication'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function RequestSuccess(): ReactElement {
	const { handleSubmit } = useForm()
	const navigate = useNavigate()
	return (
		<AuthenticationLayout
			subtitle=''
			onSubmit={handleSubmit(() => {
				navigate('/')
			})}
		>
			<>
				<p className='font-lexend text-base font-medium leading-5 text-blue-fauv'>
					Solicitação enviada com sucesso!
				</p>
				<p className='font-lexend text-base font-medium leading-5 text-blue-fauv'>
					Em breve você receberá a confirmação de seu cadastro.
				</p>
				<SecondaryButton
					onClick={() => {
						navigate('/signin')
					}}
				>
					Retornar Para Login
				</SecondaryButton>
			</>
		</AuthenticationLayout>
	)
}
