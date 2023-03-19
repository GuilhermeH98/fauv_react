import OutlinedButton from 'components/Buttons/OutlinedButton'
import { DialogHeader } from 'components/Dialog/Header'
import Division from 'components/Division'
import Input from 'components/Inputs/Input'
import { Select } from 'components/Inputs/Select'
import Switch from 'components/Switch'
import TableContent from 'components/Table/components/TableContent'
import type { IPmp } from 'pages/Models/api'
import { PointAxis } from 'pages/Models/api'
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { mapEnumOptions } from 'utils/miscellaneous'
import { getColumns } from './axisColumns'
import type { IAxisRow, ICreateEditPmpProperties } from './types'

export function CreateEditPmp({
	selectedPmp,
	addPmp,
	updatePmp
}: ICreateEditPmpProperties) {
	const {
		control,
		reset,
		register,
		handleSubmit,
		formState: { isValid, isSubmitting }
	} = useForm<IPmp>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'axisCoordinateList'
	})

	function onRemoveAxis(axis: IAxisRow) {
		remove(axis.id)
	}

	function onSubmit(values: IPmp) {
		if (selectedPmp) {
			updatePmp({ ...values, id: selectedPmp.id })
		} else {
			addPmp({ ...values, active: true })
		}
	}

	useEffect(() => {
		if (selectedPmp) {
			const { axisCoordinateList, ...pmp } = selectedPmp
			reset(pmp)
			append(axisCoordinateList)
		}
	}, [selectedPmp, reset, append])

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={selectedPmp ? 'Detalhes do PMP' : 'Novo PMP'}
					isFormDialog
					disabledSubmit={!isValid || isSubmitting}
				/>
				{selectedPmp && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg font-bold '>
							{selectedPmp.name}
						</span>
						<div className='my-auto ml-auto'>
							<Switch id='active' label='PMP Ativo' register={register} />
						</div>
					</div>
				)}
				<Division />
				<div className='flex gap-6'>
					<Input label='Nome' id='name' register={register} required />
					<Select
						label='Nominal'
						name='workingOn'
						options={mapEnumOptions(PointAxis)}
						control={control}
						required
					/>
				</div>
				<div className='flex gap-6'>
					<Input type='number' label='X' id='x' register={register} required />
					<Input type='number' label='Y' id='y' register={register} required />
					<Input type='number' label='Z' id='z' register={register} required />
				</div>
				<Division />
				<div className='flex'>
					<p className='pt-2 font-inter text-base font-semibold  leading-[160%] text-black-fauv-3'>
						Coordenadas Eixo Nominal
					</p>
					<OutlinedButton
						className='ml-auto'
						onClick={() =>
							append({
								id: -1,
								name: '',
								axis: PointAxis.X,
								lowerTolerance: 0,
								higherTolerance: 0,
								pmpId: -1
							})
						}
					>
						Adicionar
					</OutlinedButton>
				</div>
				<TableContent
					data={[...fields.map((field, index) => ({ ...field, id: index }))]}
					columns={getColumns(register, control, onRemoveAxis)}
					className='h-[380px] border-2'
				/>
			</div>
		</form>
	)
}
