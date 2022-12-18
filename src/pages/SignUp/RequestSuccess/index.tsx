import RoundedButton from 'components/RoundedButton'
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
			<RoundedButton>Retornar Para Login</RoundedButton>
		</>
	)
}
