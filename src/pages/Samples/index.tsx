import Button from 'components/Buttons/Button'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import {
	RiCarFill,
	RiCheckboxCircleFill,
	RiUploadCloud2Line
} from 'react-icons/ri'
import { useToggle } from 'utils/miscellaneous'
import { useSamplesQuery } from './api'
import { getColumns } from './columns'
import { UploadDialog } from './UploadDialog'

export function Samples(): ReactElement {
	const [isUploadDialogOpen, toggleIsUploadDialogOpen] = useToggle()

	const query = useSamplesQuery()

	// const navigate = useNavigate()

	// function onIconClick(row: ISample) {
	// 	navigate('statistics', { state: row })
	// }

	// TODO: LOGIC
	// function onUploadSuccess() {
	// 	console.log('onUploadSuccess', isUploadDialogOpen)
	// }

	return (
		<>
			<div className='flex h-18 w-full items-center'>
				<Button className='ml-auto' onClick={toggleIsUploadDialogOpen}>
					<div className='flex'>
						<RiUploadCloud2Line className='mr-2 text-icon' />
						<span>Upload </span>
					</div>
				</Button>
			</div>
			<div className='mb-5 flex gap-6'>
				{/* Display hiddden on index 4 and 5 element  */}
				<div className='h-20 w-[11.625rem] rounded-[0.625rem] bg-bluishgray-fauv'>
					<div className='mt-2 flex h-6 justify-between align-middle'>
						<RiCarFill size={26} className='ml-4  text-blue-fauv' />
						<span className='mr-3 py-1 font-inter text-sm font-bold text-blue-fauv'>
							{/* GET MODEL.NAME + PARTNUMBER */}
							POLO - 9338729
						</span>
					</div>
					<div className='mb-3 flex '>
						<div className='ml-4 mt-1 flex flex-col'>
							<span className='text-sm font-semibold text-gray-fauv-3'>
								{/* GET MODEL.STEP? */}
								ETAPA - B1
							</span>
							<span className='text-xs font-semibold text-gray-fauv-3 '>
								{/* GET SAMPLE UPLOAD */}
								10/11/2022 - 08:40
							</span>
						</div>
						<RiCheckboxCircleFill
							size={32}
							className='ml-auto mr-2 mt-2 text-green-fauv'
						/>
					</div>
				</div>
			</div>
			{query.data && (
				<Table
					title='Amostras'
					data={query.data}
					columns={getColumns()} // TODO SEND FUNCTION
				/>
			)}
			<UploadDialog
				isOpen={isUploadDialogOpen}
				onClose={toggleIsUploadDialogOpen}
				// TODO: USE FUNCTION
				onUploadSuccess={() => {}}
			/>
		</>
	)
}
