import OutlinedButton from 'components/Buttons/OutlinedButton'
import { DialogHeader } from 'components/Dialog/Header'
import Division from 'components/Division'
import Input from 'components/Inputs/Input'
import { Multiselect } from 'components/Inputs/Multiselect'
import { Select } from 'components/Inputs/Select'
import Switch from 'components/Switch'
import TableContent from 'components/Table/components/TableContent'
import type { IFmCreateEdit, IPmp } from 'pages/Models/api'
import { CatalogType, Level, PointAxis } from 'pages/Models/api'

import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { mapEnumOptions } from 'utils/miscellaneous'
import { getColumns } from './impatctColumns'
import type { ICreateEditFmProperties, IImpactRow } from './types'

export function CreateEditFm({
	selectedFm,
	addFm,
	updateFm,
	fieldsPmpList
}: ICreateEditFmProperties) {
	const {
		control,
		reset,
		register,
		handleSubmit,
		formState: { isValid, isSubmitting }
	} = useForm<IFmCreateEdit>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'fmImpactList'
	})

	function onRemoveImpact(impact: IImpactRow) {
		remove(impact.id)
	}

	function onSubmit(values: IFmCreateEdit) {
		if (selectedFm) {
			updateFm({
				...values,
				id: selectedFm.id,
				pmpList: [
					...values.pmpList.map(pmp => fieldsPmpList.find(p => p.name === pmp))
				] as IPmp[]
			})
		} else {
			addFm({
				...values,
				active: true,
				pmpList: [
					...values.pmpList.map(pmp => fieldsPmpList.find(p => p.name === pmp))
				] as IPmp[]
			})
		}
	}

	useEffect(() => {
		if (selectedFm) {
			reset({ ...selectedFm, pmpList: selectedFm.pmpList.map(p => p.name) })
		}
	}, [selectedFm, reset])

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={selectedFm ? 'Detalhes da FM' : 'Nova FM'}
					isFormDialog
					disabledSubmit={!isValid || isSubmitting}
				/>
				{selectedFm && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg font-bold dark:text-black'>
							{selectedFm.name}
						</span>
						<div className='my-auto ml-auto'>
							<Switch id='active' label='FM Ativo' register={register} />
						</div>
					</div>
				)}
				<Division />
				<div className='grid grid-cols-2 gap-6'>
					<Input label='Nome' id='name' register={register} required />
					<Multiselect
						label='Lista PMP'
						name='pmpList'
						control={control}
						options={[
							...fieldsPmpList.map(pmp => ({
								label: pmp.name,
								value: pmp.name
							}))
						]}
						required
					/>
					<Input
						label='Valor Padrão'
						type='number'
						id='defaultValue'
						register={register}
					/>
					<Select
						label='Nominal'
						name='axis'
						options={mapEnumOptions(PointAxis)}
						control={control}
						required
					/>
					<Select
						label='Catálogo'
						name='catalogType'
						options={mapEnumOptions(CatalogType)}
						control={control}
						required
					/>
					<Select
						label='Level'
						name='level'
						options={mapEnumOptions(Level)}
						control={control}
						required
					/>
					<Input
						label='Tolerância Superior'
						type='number'
						id='higherTolerance'
						register={register}
						required
					/>
					<Input
						label='Tolerância Inferior'
						type='number'
						id='lowerTolerance'
						register={register}
						required
					/>
				</div>
				<Division />
				<div className='flex'>
					<p className='pt-2 font-inter text-base font-semibold  leading-[160%] text-black-fauv-3'>
						Impactos
					</p>
					<OutlinedButton
						className='ml-auto'
						onClick={() =>
							append({
								id: -1,
								info: ''
							})
						}
					>
						Adicionar
					</OutlinedButton>
				</div>
				<TableContent
					data={[...fields.map((field, index) => ({ ...field, id: index }))]}
					columns={getColumns(register, onRemoveImpact)}
					className='h-[380px] border-2'
				/>
				{/* FM IMPACT LIST 
					PHOTO
					  */}
			</div>
		</form>
	)
}
