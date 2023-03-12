import Button from 'components/Buttons/Button'
import OutlinedButton from 'components/Buttons/OutlinedButton'
import { Dialog } from 'components/Dialog'
import { ConfirmDialog } from 'components/Dialog/ConfirmDialog'
import Input from 'components/Inputs/Input'
import { Select } from 'components/Inputs/Select'
import { createSnackbar } from 'components/Snackbar/utils'
import TableContent from 'components/Table/components/TableContent'
import { useCarsQuery } from 'pages/Cars/api'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { RiArrowGoBackLine, RiUploadCloud2Line } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'
import { mapSelectOptions, useToggle } from 'utils/miscellaneous'
import type { IFieldValues, IFm, IModel, IPmp } from '../api'
import { useModelMutation } from '../api'
import { CreateEditFm } from './CreateEditFm'
import { CreateEditPmp } from './CreateEditPmp'
import { getFmColumns } from './fmColumns'
import { getPmpColumns } from './pmpColumns'
import { UploadDialog } from './UploadDialog'
import {
	formatFm,
	formatModelPayload,
	formatModelState,
	formatPmp,
	getFmRows,
	getPmpRows
} from './utils'

function assertLocationState(state: unknown): state is IModel {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	return !!state && (state as IModel).id !== undefined
}

export function CreateEditModel() {
	const { state } = useLocation()

	const { data: cars } = useCarsQuery()

	const navigate = useNavigate()

	const { mutate } = useModelMutation(!!state)

	const {
		control,
		reset,
		register,
		handleSubmit,
		formState: { isSubmitting, isValid }
	} = useForm<IFieldValues>()

	const [isReturnDialogOpen, toggleIsReturnDialogOpen] = useToggle()
	const [isPmpDialogOpen, toggleIsPmpDialogOpen] = useToggle()
	const [isRemoveDialogOpen, toggleIsRemoveDialogOpen] = useToggle()
	const [isFmDialogOpen, toggleIsFmDialogOpen] = useToggle()
	const [isUploadDialogOpen, toggleIsUploadDialogOpen] = useToggle()

	const [selectedPmp, setSelectedPmp] = useState<IPmp | null>(null)
	const [selectedFm, setSelectedFm] = useState<IFm | null>(null)

	const {
		fields: pmpFields,
		append: appendPmp,
		update: updatePmp,
		remove: removePmp
	} = useFieldArray({
		control,
		name: 'pmpList'
	})

	const {
		fields: fmFields,
		append: appendFm,
		update: updateFm,
		remove: removeFm
	} = useFieldArray({
		control,
		name: 'fmList'
	})

	function onClosePmpDialog() {
		setSelectedPmp(null)
		toggleIsPmpDialogOpen()
	}

	function onPmpClick(pmp: IPmp) {
		setSelectedPmp(pmp)
		toggleIsPmpDialogOpen()
	}

	function onCloseFmDialog() {
		setSelectedFm(null)
		toggleIsFmDialogOpen()
	}

	function onFmClick(fm: IFm) {
		setSelectedFm(fm)
		toggleIsFmDialogOpen()
	}

	function onCloseRemoveDialog() {
		setSelectedPmp(null)
		setSelectedFm(null)
		toggleIsRemoveDialogOpen()
	}

	function onUpdatePmp(pmp: IPmp) {
		const pmpIndex = pmpFields.findIndex(p =>
			pmp.numberId ? p.numberId === pmp.numberId : p.id === pmp.id
		)
		updatePmp(pmpIndex, formatPmp(pmp))
	}

	function onAddPmp(pmp: IPmp) {
		appendPmp(formatPmp(pmp))
	}

	function onAddFm(fm: IFm) {
		appendFm(formatFm(fm))
	}

	function onUpdateFm(fm: IFm) {
		const fmIndex = fmFields.findIndex(f =>
			fm.numberId ? f.numberId === fm.numberId : f.id === fm.id
		)
		updateFm(fmIndex, formatFm(fm))
	}

	function onConfirmRemove() {
		if (selectedPmp) {
			const pmpIndex = fmFields.findIndex(f =>
				selectedPmp.numberId
					? f.numberId === selectedPmp.numberId
					: f.id === selectedPmp.id
			)
			removePmp(pmpIndex)
		} else if (selectedFm) {
			const fmIndex = fmFields.findIndex(f =>
				selectedFm.numberId
					? f.numberId === selectedFm.numberId
					: f.id === selectedFm.id
			)
			removeFm(fmIndex)
		}
		onCloseRemoveDialog()
	}

	function onRemoveRow(row: IFm | IPmp, rowType: 'fm' | 'pmp') {
		if (rowType === 'pmp') {
			setSelectedPmp(row as IPmp)
		} else {
			setSelectedFm(row as IFm)
		}
		toggleIsRemoveDialogOpen()
	}

	function onCreateEditModel(values: IFieldValues) {
		const formatedValues = formatModelPayload(values)
		const payload = state
			? {
					...formatedValues,
					id: (state as IModel).id
			  }
			: {
					...formatedValues,
					active: true
			  }

		const car = cars?.find(c => c.id === payload.car)
		if (car) {
			mutate(
				{ ...payload, car },
				{
					onSuccess() {
						createSnackbar('success', 'Modelo salvo com sucesso!')
						navigate('/models', { replace: true })
					},
					onError() {
						createSnackbar('error', 'Erro ao salvar Modelo!')
					}
				}
			)
		}
	}
	useEffect(() => {
		if (assertLocationState(state)) {
			const formattedState = formatModelState(state)
			reset({ ...formattedState, car: state.car.id })
		}
	}, [state, reset])

	return (
		<>
			<div className='flex h-auto min-h-screen  overflow-auto '>
				<div className='flex-1 p-5'>
					<form onSubmit={handleSubmit(onCreateEditModel)}>
						<div className='flex flex-col gap-4'>
							<div className='flex '>
								<div className='relative'>
									<RiArrowGoBackLine
										onClick={toggleIsReturnDialogOpen}
										className='absolute top-[0.425rem] cursor-pointer 
								text-icon '
									/>
									<h2 className='pt-1 pl-9 text-xl font-bold text-black-fauv'>
										{state ? 'Editar Modelo' : 'Novo Modelo'}
									</h2>
								</div>

								<OutlinedButton
									className='ml-auto'
									onClick={toggleIsUploadDialogOpen}
								>
									<div className='flex'>
										<RiUploadCloud2Line className='mr-2 text-icon' />
										<span>Upload </span>
									</div>
								</OutlinedButton>
								<Button
									className='ml-4'
									disabled={!isValid || isSubmitting}
									isSubmit
								>
									Salvar
								</Button>
							</div>
							<hr className='border-2 border-blue-fauv' />
							<div className='flex gap-6'>
								<Input
									label='Part Number'
									id='partNumber'
									register={register}
									required
								/>
								<Input
									label='Step'
									id='stepDescription'
									register={register}
									required
								/>
								<Select
									label='Carro'
									name='car'
									control={control}
									options={mapSelectOptions(cars)}
									required
								/>
							</div>
							<div className='flex h-9 items-center justify-center rounded-md bg-blue-fauv text-lg font-semibold leading-6 text-gray-fauv'>
								PONTOS PMP
							</div>
							<TableContent
								columns={getPmpColumns(onRemoveRow)}
								data={getPmpRows(pmpFields)}
								className='max-h-96 border-2'
								onRowClick={onPmpClick}
							/>
							<OutlinedButton
								className='mr-auto'
								onClick={toggleIsPmpDialogOpen}
							>
								Adicionar PMP
							</OutlinedButton>
							<div className='w- flex h-9 items-center justify-center rounded-md bg-blue-fauv text-lg font-semibold leading-6 text-gray-fauv'>
								FUNTIONSMASSE (FM)
							</div>
							<TableContent
								columns={getFmColumns(onRemoveRow)}
								data={getFmRows(fmFields)}
								className='max-h-96 border-2'
								onRowClick={onFmClick}
							/>
							<OutlinedButton
								className='mr-auto'
								onClick={toggleIsFmDialogOpen}
							>
								Adicionar FM
							</OutlinedButton>
						</div>
					</form>
				</div>
			</div>
			<Dialog
				isOpen={isPmpDialogOpen}
				onClose={onClosePmpDialog}
				heightClass='h-[90%]'
				widthClass='w-[55rem]'
			>
				<CreateEditPmp
					onClose={onClosePmpDialog}
					selectedPmp={selectedPmp}
					addPmp={onAddPmp}
					updatePmp={onUpdatePmp}
				/>
			</Dialog>
			<Dialog
				isOpen={isFmDialogOpen}
				onClose={onCloseFmDialog}
				heightClass='h-[90%]'
				widthClass='w-[55rem]'
			>
				<CreateEditFm
					onClose={onCloseFmDialog}
					selectedFm={selectedFm}
					addFm={onAddFm}
					updateFm={onUpdateFm}
					fieldsPmpList={getPmpRows(pmpFields)}
				/>
			</Dialog>
			<ConfirmDialog
				title='Deseja retornar?'
				onConfirm={() => navigate(-1)}
				isOpen={isReturnDialogOpen}
				onClose={toggleIsReturnDialogOpen}
			>
				Todos os dados não salvos serão perdidos
			</ConfirmDialog>
			<ConfirmDialog
				title='Confirmar exclusão'
				onConfirm={onConfirmRemove}
				isOpen={isRemoveDialogOpen}
				onClose={onCloseRemoveDialog}
			>
				Deseja excluir {selectedPmp ? 'PMP' : 'FM'}? É necessário salvar o
				Modelo para persistir as alterações.
			</ConfirmDialog>
			<UploadDialog
				isOpen={isUploadDialogOpen}
				onClose={toggleIsUploadDialogOpen}
			/>
		</>
	)
}
