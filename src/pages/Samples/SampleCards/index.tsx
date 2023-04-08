import type { ReactElement } from 'react'
import {
	RiCarFill,
	RiCheckboxCircleFill,
	RiCloseCircleFill,
	RiErrorWarningFill
} from 'react-icons/ri'
import { Status } from '../api'
import type { ISampleCardsProperties } from './types'

export function SampleCards({
	samples
}: ISampleCardsProperties): ReactElement | null {
	return (
		<>
			{samples.map((sample, index) => (
				<div
					key={`card-${index}`}
					className={`h-20 rounded-[0.625rem] bg-bluishgray-fauv ${
						index > 2 ? 'hidden 2xl:block' : ''
					}`}
				>
					<div className='mt-2 flex h-6 justify-between align-middle'>
						<RiCarFill size={26} className='ml-4  text-blue-fauv' />
						<span className='mx-3  whitespace-nowrap py-1 font-inter text-sm font-bold text-blue-fauv'>
							{sample.model.car.name} - {sample.model.partNumber}
						</span>
					</div>
					<div className='mb-3 flex '>
						<div className='ml-4 mt-1 flex flex-col'>
							<span className=' text-sm font-semibold text-gray-fauv-3	'>
								{sample.model.stepDescription}
							</span>
							<span className='text-xs font-semibold text-gray-fauv-3 '>
								{sample.uploadDate}
							</span>
						</div>
						{sample.status === Status.SUCCESS && (
							<RiCheckboxCircleFill
								size={32}
								className='ml-auto mr-2 mt-2 text-green-fauv'
							/>
						)}
						{sample.status === Status.WARNING && (
							<RiErrorWarningFill
								size={32}
								className='ml-auto mr-2 mt-2 text-gray-fauv-3'
							/>
						)}
						{sample.status === Status.ERROR && (
							<RiCloseCircleFill
								size={32}
								className='ml-auto mr-2 mt-2 text-red-fauv'
							/>
						)}
					</div>
				</div>
			))}
		</>
	)
}
