import { DialogHeader } from 'components/Dialog/Header'
import Division from 'components/Division'
import Input from 'components/Inputs/Input'
import { Select } from 'components/Inputs/Select'
import { createSnackbar } from 'components/Snackbar/utils'
import Switch from 'components/Switch'
import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useStatisticConfigurationMutation } from '../api'
import type { IConfigurationDialogProperties, IFieldValues } from './types'

const samplesQuantityOptions = [
	{ label: '5', value: 5 },
	{ label: '10', value: 10 },
	{ label: '15', value: 15 },
	{ label: '20', value: 20 },
	{ label: '25', value: 25 }
]

export function ConfigurationDialog({
	onClose,
	selectedConfiguration
}: IConfigurationDialogProperties) {
	const { mutate } = useStatisticConfigurationMutation(true)

	const {
		handleSubmit,
		register,
		reset,
		setValue,
		control,
		formState: { isValid, isSubmitting }
	} = useForm<IFieldValues>()

	const [useCepValue, useSpecificationValue, useCpCpkValue, usePpPpkValue] =
		useWatch({
			control,
			name: ['useCep', 'useSpecification', 'useCpCpk', 'usePpPpk']
		})

	function onEditConfiguration(values: IFieldValues) {
		console.log(values)
		mutate(
			{
				...values,
				cepSamples: values.cepSamples || null,
				specificationSamples: values.specificationSamples || null,
				cp: values.cp || null,
				cpk: values.cpk || null,
				pp: values.pp || null,
				ppk: values.ppk || null
			},
			{
				onSuccess() {
					onClose()
					createSnackbar('success', 'Configurações salvas com sucesso!')
				},
				onError() {
					createSnackbar('error', 'Erro ao salvar configurações!')
				}
			}
		)
	}

	useEffect(() => {
		if (useCepValue) {
			setValue('cepSamples', selectedConfiguration?.cepSamples || 25)
		} else {
			setValue('cepSamples', 0)
		}
	}, [useCepValue, selectedConfiguration, setValue])

	useEffect(() => {
		if (useSpecificationValue) {
			setValue('specificationSamples', 25)
		} else {
			setValue('specificationSamples', 0)
		}
	}, [useSpecificationValue, setValue])

	useEffect(() => {
		if (!useCpCpkValue) {
			setValue('cp', null)
			setValue('cpk', null)
		}
	}, [useCpCpkValue, setValue])

	useEffect(() => {
		if (!usePpPpkValue) {
			setValue('pp', null)
			setValue('ppk', null)
		}
	}, [usePpPpkValue, setValue])

	useEffect(() => {
		if (selectedConfiguration) {
			reset({
				...selectedConfiguration,
				cepSamples: selectedConfiguration.cepSamples || null,
				specificationSamples:
					selectedConfiguration.specificationSamples || null,
				cp: selectedConfiguration.cp || null,
				cpk: selectedConfiguration.cpk || null,
				pp: selectedConfiguration.pp || null,
				ppk: selectedConfiguration.ppk || null
			})
		}
	}, [selectedConfiguration, reset])

	return (
		<form onSubmit={handleSubmit(onEditConfiguration)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title='Configuração de Estatística'
					isFormDialog
					disabledSubmit={!isValid || isSubmitting}
				/>
				{selectedConfiguration && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg   font-bold '>
							{selectedConfiguration.model.car.name}&nbsp;-&nbsp;
							{selectedConfiguration.model.partNumber}
						</span>
					</div>
				)}

				<hr className='border-bluishgray-fauv' />

				<div className='flex flex-col gap-8'>
					<Switch id='useCep' label='CEP' register={register} />
					<Select
						label='CEP Amostras'
						name='cepSamples'
						widthClassName='w-[283px]'
						control={control}
						options={
							useCepValue ? samplesQuantityOptions : [{ label: '', value: 0 }]
						}
						disabled
						required={useCepValue}
					/>
					<Division />
					<Switch
						id='useSpecification'
						label='Especificação'
						register={register}
					/>
					<Select
						label='Especificação Amostras'
						name='specificationSamples'
						widthClassName='w-[283px]'
						control={control}
						options={
							useSpecificationValue
								? samplesQuantityOptions
								: [{ label: '', value: 0 }]
						}
						disabled={!useSpecificationValue}
						required={useSpecificationValue}
					/>
					<Division />
					<Switch id='useCpCpk' label='CP/CPK' register={register} />
					<div className='flex w-full gap-4'>
						<Input
							label='CP'
							id='cp'
							register={register}
							disabled={!useCpCpkValue}
							required={useCpCpkValue}
						/>
						<Input
							label='CPK'
							id='cpk'
							register={register}
							disabled={!useCpCpkValue}
							required={useCpCpkValue}
						/>
					</div>
					<Division />
					<Switch id='usePpPpk' label='PP/PPK' register={register} />
					<div className='flex w-full gap-4'>
						<Input
							label='PP'
							id='pp'
							register={register}
							disabled={!usePpPpkValue}
							required={usePpPpkValue}
						/>
						<Input
							label='PPK'
							id='ppk'
							register={register}
							disabled={!usePpPpkValue}
							required={usePpPpkValue}
						/>
					</div>
					<Division />
					<Switch id='useNormalDistribution' label='Z' register={register} />

					<Switch id='useSigma' label='Sigma' register={register} />
				</div>
			</div>
		</form>
	)
}
