import { useQueryClient } from '@tanstack/react-query'
import Button from 'components/Buttons/Button'
import { ConfirmDialog } from 'components/Dialog/ConfirmDialog'
import { Query } from 'components/Query'
import { createSnackbar } from 'components/Snackbar/utils'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { RiUploadCloud2Line } from 'react-icons/ri'
import { getErrorMessage } from 'utils/error'
import { useToggle } from 'utils/miscellaneous'
import { SampleCards } from './SampleCards'
import { UploadDialog } from './UploadDialog'
import { SAMPLES_URL, useDeleteSampleMutation, useSamplesQuery } from './api'
import { getColumns } from './columns'

export function Samples(): ReactElement {
	const [isUploadDialogOpen, toggleIsUploadDialogOpen] = useToggle()
	const [isConfirmDialogOpen, toggleIsConfirmDialogOpen] = useToggle()
	const [selectedSampleId, setSelectedSampleId] = useState<number | null>(null)

	const queryClient = useQueryClient()

	async function onUploadSuccess() {
		await queryClient.invalidateQueries([SAMPLES_URL])
	}

	const { mutate } = useDeleteSampleMutation()

	function onRowClick(id: number) {
		setSelectedSampleId(id)
		toggleIsConfirmDialogOpen()
	}

	function onCloseDialog() {
		toggleIsConfirmDialogOpen()
		setSelectedSampleId(null)
	}

	function onDelete() {
		if (selectedSampleId) {
			mutate(selectedSampleId, {
				onSuccess: async () => {
					await queryClient.invalidateQueries([SAMPLES_URL])
					toggleIsConfirmDialogOpen()
					createSnackbar('success', 'Amostra deletada com sucesso!')
				},
				onError(error) {
					createSnackbar(
						'error',
						getErrorMessage((error as Error).message) ||
							'Falha ao deletar amostra!'
					)
				}
			})
		} else {
			createSnackbar('error', 'Falha ao encontrar id da amostra!')
		}
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
							columns={getColumns(onRowClick)}
						/>
					</>
				)}
			/>
			<UploadDialog
				isOpen={isUploadDialogOpen}
				onClose={toggleIsUploadDialogOpen}
				onUploadSuccess={onUploadSuccess}
			/>
			<ConfirmDialog
				title='Confirmar'
				onConfirm={onDelete}
				isOpen={isConfirmDialogOpen}
				onClose={onCloseDialog}
			>
				Deseja excluir essa amostra?
			</ConfirmDialog>
		</>
	)
}
