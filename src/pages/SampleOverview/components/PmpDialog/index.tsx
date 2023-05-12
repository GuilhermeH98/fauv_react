import Division from 'components/Division'
import TableContent from 'components/Table/components/TableContent'
import { axisCoordinateColumns } from './axisCoordinateColumns'
import type { IPmpDialogProperties } from './types'

export function PmpDialog({ selectedPmp }: IPmpDialogProperties) {
	if (!selectedPmp) return null

	return (
		<div className='flex flex-col justify-between gap-4'>
			<div className='flex '>
				<p className='lexend my-auto  font-bold text-black-fauv'>
					{selectedPmp.name}
				</p>
			</div>

			<Division />
			<TableContent
				columns={axisCoordinateColumns}
				data={selectedPmp.axisCoordinateOverviewList}
				className='max-h-96 border-2'
			/>
		</div>
	)
}
