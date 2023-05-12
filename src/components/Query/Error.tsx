import Button from 'components/Buttons/Button'
import FlatButton from 'components/Buttons/FlatButton'
import { RiArrowLeftLine, RiEmotionUnhappyFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import type { IQueryErrorProperties } from './types'

export function QueryError({ onRetry, returnOnError }: IQueryErrorProperties) {
	const navigate = useNavigate()
	return (
		<div className=' m-auto flex h-full w-full flex-col rounded-lg'>
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
				<Button
					className='mx-auto w-44 justify-center bg-red-fauv hover:bg-[#7A2222]'
					onClick={onRetry}
				>
					Tentar novamente
				</Button>
				{/* TODO: receive route as parameter */}
				{returnOnError && (
					<FlatButton
						className='mx-auto mt-5 w-44 justify-center '
						onClick={() => {
							navigate('/samples')
						}}
					>
						<div className='flex justify-center '>
							<RiArrowLeftLine className='mr-2 text-icon' />
							Voltar
						</div>
					</FlatButton>
				)}
			</div>
		</div>
	)
}
