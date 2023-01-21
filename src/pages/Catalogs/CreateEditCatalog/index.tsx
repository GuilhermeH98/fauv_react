import { DialogHeader } from 'components/Dialog/Header'
import Input from 'components/Inputs/Input'
import Switch from 'components/Switch'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCatalogMutation } from '../api'
import type { ICreateEditCatalogProperties, IFieldValues } from './types'

export function CreateEditCatalog({
	onClose,
	selectedCatalog
}: ICreateEditCatalogProperties) {
	const { mutate } = useCatalogMutation(!!selectedCatalog)

	const {
		reset,
		register,
		handleSubmit,
		formState: { isSubmitting, isValid }
	} = useForm<IFieldValues>()

	function onCreateEditCatalog(values: IFieldValues) {
		const payload = selectedCatalog
			? { id: selectedCatalog.id, ...values }
			: { ...values, active: true }
		mutate(
			{ ...payload },
			{
				onSuccess() {
					onClose()
				}
			}
		)
	}
	useEffect(() => {
		if (selectedCatalog) reset(selectedCatalog)
	}, [selectedCatalog, reset])

	return (
		<form onSubmit={handleSubmit(onCreateEditCatalog)}>
			<div className='flex flex-col gap-4'>
				<DialogHeader
					title={selectedCatalog ? 'Detalhes do Catálogo' : 'Novo Catálogo'}
					isFormDialog
					disabledSubmit={!isValid || isSubmitting}
				/>
				{selectedCatalog && (
					<div className='flex pt-2 pb-1'>
						<span className='font-inter text-lg   font-bold '>
							{selectedCatalog.name}
						</span>
						<div className='my-auto ml-auto'>
							<Switch id='active' label='Catálogo Ativo' register={register} />
						</div>
					</div>
				)}
				<hr className='border-bluishgray-fauv' />

				<Input label='Nome' id='name' register={register} required />
			</div>
		</form>
	)
}
