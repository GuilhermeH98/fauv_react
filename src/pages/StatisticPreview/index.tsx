import Division from 'components/Division'
import { Query } from 'components/Query'
import { createSnackbar } from 'components/Snackbar/utils'
import { useNavigate } from 'react-router-dom'
import type { IStatisticPreview } from './api'
import { useStatisticPreviewsQuery } from './api'

export function StatisticPreview() {
	const navigate = useNavigate()

	function onCardClick(statisticPreview: IStatisticPreview) {
		if (statisticPreview.numberOfSamples > 1) {
			if (statisticPreview.defaultFmNames.length > 0) {
				navigate(
					`/statistic/fm/${statisticPreview.modelId}/${statisticPreview.defaultFmNames[0].name}`,
					{
						state: statisticPreview
					}
				)
			} else {
				createSnackbar('error', 'Nenhuma FM encontrada para essa estatística.')
			}
		} else {
			createSnackbar(
				'warning',
				'Mínimo de duas amostras para visualizar estatística.'
			)
		}
	}

	return (
		<div className='flex h-full  flex-col gap-4 rounded-lg bg-white p-4'>
			<h2 className='font-lexend text-xl font-bold text-blue-fauv '>
				Estatística
			</h2>
			<Division />
			<Query
				query={useStatisticPreviewsQuery()}
				render={data => (
					<div className='flex  max-h-full flex-col gap-4 overflow-auto'>
						{data.map((statisticPreview, index) => (
							<button
								key={`statistic-preview-${index}`}
								className='flex h-[6.5rem] w-full  shrink-0 rounded-lg bg-gray-fauv hover:bg-bluishgray-fauv'
								type='button'
								onClick={() => onCardClick(statisticPreview)}
							>
								<div className='flex h-full w-60 rounded-l-lg bg-blue-fauv '>
									<div className='my-auto ml-4 text-left'>
										<p className='text-lexend text-lg font-semibold text-white'>
											{`${statisticPreview.carName} (${statisticPreview.partNumber})`}
										</p>
										<p className='text-sm text-white opacity-80'>
											{statisticPreview.unitName}
										</p>
									</div>
								</div>
								<div className='flex h-full w-full'>
									<div className='my-auto mr-auto ml-6 text-left lg:ml-8'>
										<p className='text-lexend     text-blue-fauv'>
											Data da Primeira Amostra
										</p>
										<p className='text-lg font-semibold text-blue-fauv'>
											{statisticPreview.initDate}
										</p>
									</div>
									<div className='my-auto mr-auto text-left  '>
										<p className='text-lexend     text-blue-fauv'>
											Data da Última Amostra
										</p>
										<p className='text-lg font-semibold text-blue-fauv'>
											{statisticPreview.endDate}
										</p>
									</div>
									<div className='my-auto mr-auto text-left  '>
										<p className='text-lexend     text-blue-fauv'>
											Número de Amostras
										</p>
										<p className='text-lg font-semibold text-blue-fauv'>
											{statisticPreview.numberOfSamples}
										</p>
									</div>
									<div className='my-auto mr-auto text-left  '>
										<p className='text-lexend     text-blue-fauv'>
											Amostras com Defeito
										</p>
										<p className='text-lg font-semibold text-blue-fauv'>
											{statisticPreview.numberOfDefectiveSamples}
										</p>
									</div>
								</div>
							</button>
						))}
					</div>
				)}
			/>
		</div>
	)
}
