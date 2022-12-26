import SecondaryButton from 'components/SecondaryButton'
import type { ReactElement } from 'react'

export default function RequestSuccess(): ReactElement {
	return (
		<>
			<p className='font-lexend text-base font-medium leading-5 text-blue-fauv'>
				Solicitação enviada com sucesso!
			</p>
			<p className='font-lexend text-base font-medium leading-5 text-blue-fauv'>
				Em breve você receberá a confirmação de seu cadastro.
			</p>
			<SecondaryButton>Retornar Para Login</SecondaryButton>
		</>
	)
}
