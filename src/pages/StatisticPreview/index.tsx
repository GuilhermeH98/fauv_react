import Division from 'components/Division'
import { useNavigate } from 'react-router-dom'

export function StatisticPreview() {
	const navigate = useNavigate()

	return (
		<div className='flex h-full  flex-col gap-4 rounded-lg bg-white p-4'>
			<h2 className='font-lexend text-xl font-bold text-blue-fauv '>
				Estatística
			</h2>
			<Division />
			<div className='flex  max-h-full flex-col gap-4 overflow-auto'>
				<button
					className='flex h-[6.5rem] w-full  shrink-0 rounded-lg bg-gray-fauv hover:bg-bluishgray-fauv'
					type='button'
					onClick={() => {
						navigate('/statistic')
					}}
				>
					<div className='flex h-full w-60 rounded-l-lg bg-blue-fauv '>
						<div className='my-auto ml-4 text-left'>
							<p className='text-lexend text-lg font-semibold text-white'>
								POLO (11111111)
							</p>
							<p className='text-sm text-white opacity-80'>Unidade: ABC</p>
						</div>
					</div>
					<div className='flex h-full w-full'>
						<div className='my-auto mr-auto ml-6 text-left lg:ml-8  '>
							<p className='text-lexend     text-blue-fauv'>
								Data da Primeira Amostra
							</p>
							<p className='text-lg font-semibold text-blue-fauv '>
								10/05/2023{' '}
							</p>
						</div>
						<div className='my-auto mr-auto text-left  '>
							<p className='text-lexend     text-blue-fauv'>
								Data da Última Amostra{' '}
							</p>
							<p className='text-lg font-semibold text-blue-fauv '>
								15/05/2023{' '}
							</p>
						</div>
						<div className='my-auto mr-auto text-left  '>
							<p className='text-lexend     text-blue-fauv'>
								Número de Amostras{' '}
							</p>
							<p className='text-lg font-semibold text-blue-fauv '>30 </p>
						</div>
						<div className='my-auto mr-auto text-left  '>
							<p className='text-lexend     text-blue-fauv'>
								Amostras com Defeito{' '}
							</p>
							<p className='text-lg font-semibold text-blue-fauv '>3 </p>
						</div>
					</div>
				</button>{' '}
				<button
					className='flex h-[6.5rem] w-full  shrink-0 rounded-lg bg-gray-fauv hover:bg-bluishgray-fauv'
					type='button'
					onClick={() => {
						navigate('/statistic')
					}}
				>
					<div className='flex h-full w-60 rounded-l-lg bg-blue-fauv '>
						<div className='my-auto ml-4 text-left'>
							<p className='text-lexend text-lg font-semibold text-white'>
								POLO (11111111)
							</p>
							<p className='text-sm text-white opacity-80'>Unidade: ABC</p>
						</div>
					</div>
					<div className='flex h-full w-full'>
						<div className='my-auto mr-auto ml-6 text-left lg:ml-8  '>
							<p className='text-lexend     text-blue-fauv'>
								Data da Primeira Amostra
							</p>
							<p className='text-lg font-semibold text-blue-fauv '>
								10/05/2023{' '}
							</p>
						</div>
						<div className='my-auto mr-auto text-left  '>
							<p className='text-lexend     text-blue-fauv'>
								Data da Última Amostra{' '}
							</p>
							<p className='text-lg font-semibold text-blue-fauv '>
								15/05/2023{' '}
							</p>
						</div>
						<div className='my-auto mr-auto text-left  '>
							<p className='text-lexend     text-blue-fauv'>
								Número de Amostras{' '}
							</p>
							<p className='text-lg font-semibold text-blue-fauv '>30 </p>
						</div>
						<div className='my-auto mr-auto text-left  '>
							<p className='text-lexend     text-blue-fauv'>
								Amostras com Defeito{' '}
							</p>
							<p className='text-lg font-semibold text-blue-fauv '>3 </p>
						</div>
					</div>
				</button>
			</div>
		</div>
	)
}
