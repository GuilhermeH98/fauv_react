import Button from 'components/Buttons/Button'
import { RiEmotionUnhappyFill } from 'react-icons/ri'
import type { IQueryErrorProperties } from './types'

export function QueryError({ onRetry }: IQueryErrorProperties) {
	return (
		<div className=' flex h-full w-full flex-col '>
			<div className='m-auto flex flex-col '>
				<RiEmotionUnhappyFill
					className='mx-auto mb-4 text-red-fauv'
					size={48}
				/>
				<p
					className='mx-auto mb-6 text-xl font-bold text-red-fauv
			'
				>
					Falha ao carregar os dados.
				</p>
				<Button className='mx-auto w-44 bg-red-fauv' onClick={onRetry}>
					Tentar novamente
				</Button>
			</div>
		</div>
	)
}
