import { useQueryClient } from '@tanstack/react-query'
import Button from 'components/Buttons/Button'
import { Query } from 'components/Query'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { RiUploadCloud2Line } from 'react-icons/ri'
import { useToggle } from 'utils/miscellaneous'
import { SampleCards } from './SampleCards'
import { UploadDialog } from './UploadDialog'
import { SAMPLES_URL, useSamplesQuery } from './api'
import { getColumns } from './columns'

export function Samples(): ReactElement {
	const [isUploadDialogOpen, toggleIsUploadDialogOpen] = useToggle()

	const queryClient = useQueryClient()

	// const navigate = useNavigate()

	// function onIconClick(row: ISample) {
	// 	navigate('statistics', { state: row })
	// }

	async function onUploadSuccess() {
		await queryClient.invalidateQueries([SAMPLES_URL])
	}

	return (
		<>
			<Query
				query={useSamplesQuery()}
				render={data => (
					<>
						<div className='mb-4 flex gap-6'>
							<SampleCards samples={data.slice(0, 5)} />
							<Button className='ml-auto' onClick={toggleIsUploadDialogOpen}>
								<div className='flex'>
									<RiUploadCloud2Line className='mr-2 text-icon' />
									<span>Upload </span>
								</div>
							</Button>
						</div>

						<Table
							title='Amostras'
							data={data}
							columns={getColumns()} // TODO SEND FUNCTION
						/>
					</>
				)}
			/>

			<UploadDialog
				isOpen={isUploadDialogOpen}
				onClose={toggleIsUploadDialogOpen}
				onUploadSuccess={onUploadSuccess}
			/>
		</>
	)
}
