import { useQueryClient } from '@tanstack/react-query'
import Button from 'components/Buttons/Button'
import { ConfirmDialog } from 'components/Dialog/ConfirmDialog'
import PageTop from 'components/PageTop'
import { Query } from 'components/Query'
import { createSnackbar } from 'components/Snackbar/utils'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getErrorMessage } from 'utils/error'
import { useToggle } from 'utils/miscellaneous'
import type { IModel } from './api'
import { MODELS_URL, useDeleteModelMutation, useModelsQuery } from './api'
import { getColumns } from './columns'

export function Models(): ReactElement {
	const [isConfirmDialogOpen, toggleIsConfirmDialogOpen] = useToggle()
	const [isSubmitting, toggleIsSubmitting] = useToggle()

	const [selectedModel, setSelectedModel] = useState<IModel | null>(null)

	const queryClient = useQueryClient()

	const navigate = useNavigate()

	const { mutate } = useDeleteModelMutation()

	function onEdit(row: IModel) {
		navigate('edit', { state: row })
	}

	function onRowClick(model: IModel) {
		setSelectedModel(model)
		toggleIsConfirmDialogOpen()
	}

	function onCloseDialog() {
		toggleIsConfirmDialogOpen()
		setSelectedModel(null)
	}

	function onDelete() {
		if (selectedModel) {
			toggleIsSubmitting()
			mutate(selectedModel.id, {
				onSettled() {
					toggleIsSubmitting()
				},
				onSuccess: async () => {
					toggleIsConfirmDialogOpen()
					await queryClient.invalidateQueries([MODELS_URL])
					createSnackbar('success', 'Modelo deletado com sucesso!')
				},
				onError(error) {
					createSnackbar(
						'error',
						getErrorMessage((error as Error).message) ||
							'Falha ao deletar modelo!'
					)
				}
			})
		} else {
			createSnackbar('error', 'Falha ao encontrar id do modelo!')
		}
	}

	return (
		<>
			<PageTop>
				<Button onClick={() => navigate('create')}> Criar novo</Button>
			</PageTop>
			<Query
				query={useModelsQuery()}
				render={data => (
					<Table
						title='Modelos'
						data={data}
						columns={getColumns(onRowClick)}
						onRowClick={onEdit}
					/>
				)}
			/>
			<ConfirmDialog
				title='Confirmar'
				onConfirm={onDelete}
				isOpen={isConfirmDialogOpen}
				onClose={onCloseDialog}
				isSubmitting={isSubmitting}
			>
				Deseja excluir o modelo {selectedModel?.partNumber}{' '}
				{selectedModel?.car.name}?
			</ConfirmDialog>
		</>
	)
}
