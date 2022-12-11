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
			<button
				type='button'
				className='mb-4 h-11 w-72 rounded-btn bg-blue-fauv font-lexend text-white shadow-btn'
			>
				Retornar Para Login
			</button>
		</>
	)
}
