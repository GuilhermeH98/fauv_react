import { DialogHeader } from 'components/Dialog/Header'
import Division from 'components/Division'
import Input from 'components/Inputs/Input'
import { Multiselect } from 'components/Inputs/Multiselect'
import { Select } from 'components/Inputs/Select'
import Switch from 'components/Switch'
import type { IFm } from 'pages/Models/api'
import { CatalogType, Level, PointAxis } from 'pages/Models/api'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { mapEnumOptions } from 'utils/miscellaneous'
import type { ICreateEditFmProperties } from './types'

export function CreateEditFm({
	onClose,
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
	} = useForm<IFm>()

	function onSubmit(values: IFm) {
		if (selectedFm) {
			updateFm(selectedFm.id, { ...values })
		} else {
			addFm({ ...values, active: true })
		}
		onClose()
	}

	useEffect(() => {
		if (selectedFm) {
			reset(selectedFm)
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
						<span className='font-inter text-lg font-bold '>
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
							...fieldsPmpList.map(pmp => ({ label: pmp.name, value: pmp.id }))
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
					/>
					<Input
						label='Tolerância Inferior'
						type='number'
						id='lowerTolerance'
						register={register}
					/>
					{/* FM IMPACT LIST 
					PHOTO
					  */}
				</div>
			</div>
		</form>
	)
}
