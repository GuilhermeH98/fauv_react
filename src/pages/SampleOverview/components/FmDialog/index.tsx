import Division from 'components/Division'
import { getFmLevelLabel } from 'pages/Statistic/components/FmPmpList/utils'
import type { IFmDialogProperties } from './types'

export function FmDialog({ selectedFm }: IFmDialogProperties) {
	if (!selectedFm) return null

	return (
		<div className='flex flex-col justify-between gap-4'>
			<div className='flex '>
				<p className='lexend my-auto  font-bold text-black-fauv'>
					{' '}
					{selectedFm.name}
				</p>

				<div className='ml-auto'>
					<p className='lexend text-black-fauv'>
						<span className='font-semibold'>Tolerância Superior:</span>&nbsp;
						{selectedFm.higherTolerance}
					</p>
					<p className='lexend mt-2  text-black-fauv'>
						<span className='font-semibold'>Tolerância Inferior:</span>&nbsp;
						{selectedFm.lowerTolerance}
					</p>
				</div>
			</div>

			<Division />
			<div className='grid grid-cols-4 gap-y-8'>
				<div className='col-span-2'>
					<p className='lexend  font-bold  text-black-fauv'>Lista PMP</p>
					<p className='lexend mt-2   text-black-fauv'>
						{selectedFm.pmpList.join(', ')}
					</p>
				</div>
				<div>
					<p className='lexend  font-bold  text-black-fauv'>Eixo</p>
					<p className='lexend mt-2   text-black-fauv'>{selectedFm.axis}</p>
				</div>
				<div>
					<p className='lexend  font-bold  text-black-fauv'>Valor</p>
					<p className='lexend mt-2   text-black-fauv'>{selectedFm.value}</p>
				</div>
				<div className='col-span-2'>
					<p className='lexend  font-bold  text-black-fauv'>Impactos</p>
					<p className='lexend mt-2   text-black-fauv'>
						{selectedFm.impactList.join(', ')}
					</p>
				</div>

				<div>
					<p className='lexend  font-bold  text-black-fauv'>Level</p>
					<p className='lexend mt-2   text-black-fauv'>
						{getFmLevelLabel(selectedFm.fmLevel)}
					</p>
				</div>
			</div>
		</div>
	)
}
