import type { ReactElement } from 'react'
import type { ISampleCardsProperties } from './types'

export function SampleCards({
	samples
}: ISampleCardsProperties): ReactElement | null {
	return (
		<>
			{samples.map((sample, index) => (
				<div
					className='h-20 w-[11.625rem] rounded-[0.625rem] bg-bluishgray-fauv'
					key={`sample-${index}`}
				>
					<div>ola</div>
				</div>
			))}
		</>
	)
	// <div className='h-20 w-[11.625rem] rounded-[0.625rem] bg-bluishgray-fauv'>
	// 	<div className='mt-2 flex h-6 justify-between align-middle'>
	// 		<RiCarFill size={26} className='ml-4  text-blue-fauv' />
	// 		<span className='mr-3 py-1 font-inter text-sm font-bold text-blue-fauv'>
	// 			{/* GET MODEL.NAME + PARTNUMBER */}
	// 			POLO - 9338729
	// 		</span>
	// 	</div>
	// 	<div className='mb-3 flex '>
	// 		<div className='ml-4 mt-1 flex flex-col'>
	// 			<span className='text-sm font-semibold text-gray-fauv-3'>
	// 				{/* GET MODEL.STEP? */}
	// 				ETAPA - B1
	// 			</span>
	// 			<span className='text-xs font-semibold text-gray-fauv-3 '>
	// 				{/* GET SAMPLE UPLOAD */}
	// 				10/11/2022 - 08:40
	// 			</span>
	// 		</div>
	// 		<RiCheckboxCircleFill
	// 			size={32}
	// 			className='ml-auto mr-2 mt-2 text-green-fauv'
	// 		/>
	// 	</div>
	// </div>
}
