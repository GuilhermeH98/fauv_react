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
import { getErrorMessage } from 'utils/error'
import { mapSelectOptions, useToggle } from 'utils/miscellaneous'
import type { IFieldValues, IFm, IModel, IModelPreview, IPmp } from '../api'
import { useModelMutation } from '../api'
import { CreateEditFm } from './components/CreateEditFm'
import { CreateEditPmp } from './components/CreateEditPmp'
import { FmFilter } from './components/FmFilter'
import { PmpFilter } from './components/PmpFilter'
import { UploadDialog } from './components/UploadDialog'
import { getFmColumns } from './fmColumns'
import { getPmpColumns } from './pmpColumns'
import {
	formatFm,
	formatModelPayload,
	formatModelPreview,
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
	const [isReturnDialogOpen, toggleIsReturnDialogOpen] = useToggle()
	const [isPmpDialogOpen, toggleIsPmpDialogOpen] = useToggle()
	const [isRemoveDialogOpen, toggleIsRemoveDialogOpen] = useToggle()
	const [isFmDialogOpen, toggleIsFmDialogOpen] = useToggle()
	const [isUploadDialogOpen, toggleIsUploadDialogOpen] = useToggle()
	const [filteredPmpList, setFilteredPmpList] = useState<IPmp[]>([])
	const [filteredFmList, setFilteredFmList] = useState<IFm[]>([])
	const [pmpList, setPmpList] = useState<IPmp[]>([])
	const [fmList, setFmList] = useState<IFm[]>([])

	const [selectedPmp, setSelectedPmp] = useState<IPmp | null>(null)
	const [selectedFm, setSelectedFm] = useState<IFm | null>(null)
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

	useEffect(() => {
		setPmpList(getPmpRows(pmpFields))
	}, [pmpFields, setPmpList])

	useEffect(() => {
		setFmList(getFmRows(fmFields))
	}, [fmFields, setFmList])

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

	function checkFmName(name: string) {
		if (fmFields.findIndex(f => f.name === name) > -1) {
			createSnackbar('error', 'Já existe FM com esse nome')
			return false
		}
		return true
	}

	function checkPmpName(name: string) {
		if (pmpFields.findIndex(p => p.name === name) > -1) {
			createSnackbar('error', 'Já existe PMP com esse nome')
			return false
		}
		return true
	}

	function onUpdatePmp(pmp: IPmp) {
		const pmpIndex = pmpFields.findIndex(p =>
			pmp.numberId ? p.numberId === pmp.numberId : p.id === pmp.id
		)
		if (pmpIndex > -1) {
			const outdatedPmp = pmpFields[pmpIndex]
			if (outdatedPmp.name === pmp.name || checkPmpName(pmp.name)) {
				const formattedPmp = formatPmp(pmp)

				// Update fm pmp list
				for (const fmField of fmFields) {
					const fmIndex = fmFields.findIndex(f => f.name === fmField.name)
					const fm = fmFields[fmIndex]
					if (fm.pmpList.findIndex(p => p.name === outdatedPmp.name) > -1) {
						const fmPmpList = fm.pmpList.filter(
							p => p.name !== outdatedPmp.name
						)
						fmPmpList.push(formatPmp(pmp))
						updateFm(fmIndex, { ...fm, pmpList: fmPmpList })
					}
				}
				updatePmp(pmpIndex, formattedPmp)
				onClosePmpDialog()
			}
		}
	}

	function onAddPmp(pmp: IPmp) {
		if (checkPmpName(pmp.name)) {
			appendPmp(formatPmp(pmp))
			onClosePmpDialog()
		}
	}

	function onAddFm(fm: IFm) {
		if (checkFmName(fm.name)) {
			appendFm(formatFm(fm))
			onCloseFmDialog()
		}
	}

	function onUpdateFm(fm: IFm) {
		const fmIndex = fmFields.findIndex(f =>
			fm.numberId ? f.numberId === fm.numberId : f.id === fm.id
		)
		if (fmFields[fmIndex].name === fm.name || checkFmName(fm.name)) {
			updateFm(fmIndex, formatFm(fm))
			onCloseFmDialog()
		}
	}

	function onConfirmRemove() {
		if (selectedPmp) {
			const pmpIndex = pmpFields.findIndex(f =>
				selectedPmp.numberId
					? f.numberId === selectedPmp.numberId
					: f.id === selectedPmp.id
			)
			// Remove pmp from fm list
			const outdatedPmp = pmpFields[pmpIndex]
			for (const fmField of fmFields) {
				const fmIndex = fmFields.findIndex(f => f.name === fmField.name)
				const fm = fmFields[fmIndex]
				if (fm.pmpList.findIndex(p => p.name === outdatedPmp.name) > -1) {
					const fmPmpList = fm.pmpList.filter(p => p.name !== outdatedPmp.name)
					updateFm(fmIndex, { ...fm, pmpList: fmPmpList })
				}
			}

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
		const formattedValues = formatModelPayload({
			...values
		})
		const payload = state
			? {
					...formattedValues,
					id: (state as IModel).id
			  }
			: {
					...formattedValues,
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
					onError(error) {
						createSnackbar(
							'error',
							getErrorMessage(error.message) || 'Erro ao salvar Modelo!'
						)
					}
				}
			)
		}
	}

	// TODO: Create new function to handle reset and use inside useEffect
	function onUploadSuccess(modelPreview: IModelPreview) {
		reset(formatModelPreview(modelPreview))
	}

	useEffect(() => {
		if (assertLocationState(state)) {
			reset(formatModelState(state))
		}
	}, [state, reset])

	return (
		<>
			<div className='flex h-auto min-h-screen   bg-gray-fauv p-4 '>
				<div className='flex h-auto flex-1 rounded-lg bg-white'>
					<div className='flex-1 p-5'>
						<form onSubmit={handleSubmit(onCreateEditModel)}>
							<div className='flex flex-col gap-5'>
								<div className='flex '>
									<div className='relative'>
										<RiArrowGoBackLine
											onClick={toggleIsReturnDialogOpen}
											className='absolute top-[0.425rem] cursor-pointer text-icon 
								text-black '
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
								<div className='flex'>
									<OutlinedButton
										className='mr-auto'
										onClick={toggleIsPmpDialogOpen}
									>
										Adicionar PMP
									</OutlinedButton>
									<PmpFilter
										pmpList={pmpList}
										setFilteredList={setFilteredPmpList}
									/>
								</div>
								<TableContent
									columns={getPmpColumns(onRemoveRow)}
									data={filteredPmpList}
									className='max-h-96 border-2'
									onRowClick={onPmpClick}
								/>
								<div className='w- flex h-9 items-center justify-center rounded-md bg-blue-fauv text-lg font-semibold leading-6 text-gray-fauv'>
									FUNTIONSMASSE (FM)
								</div>
								<div className='flex'>
									<OutlinedButton
										className='mr-auto'
										onClick={toggleIsFmDialogOpen}
									>
										Adicionar FM
									</OutlinedButton>
									<FmFilter
										fmList={fmList}
										setFilteredList={setFilteredFmList}
									/>
								</div>
								<TableContent
									columns={getFmColumns(onRemoveRow)}
									data={filteredFmList}
									className='max-h-96 border-2'
									onRowClick={onFmClick}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Dialog
				isOpen={isPmpDialogOpen}
				onClose={onClosePmpDialog}
				heightClass='h-[90%]'
				widthClass='w-[55rem]'
			>
				<CreateEditPmp
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
					selectedFm={selectedFm}
					addFm={onAddFm}
					updateFm={onUpdateFm}
					fieldsPmpList={pmpList}
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
				onUploadSuccess={onUploadSuccess}
			/>
		</>
	)
}
