import Button from 'components/Buttons/Button'
import OutlinedButton from 'components/Buttons/OutlinedButton'
import Input from 'components/Inputs/Input'
import { Select } from 'components/Inputs/Select'
import { createSnackbar } from 'components/Snackbar/utils'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import type { IModel } from '../api'
import { useModelMutation } from '../api'

function assertLocationState(state: unknown): state is IModel {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	return !!state && (state as IModel).id !== undefined
}

export function CreateEditModel() {
	const { state } = useLocation()

	const { mutate } = useModelMutation(!!state)

	const { control, reset, register, handleSubmit } = useForm<IModel>()

	function onCreateEditModel(values: IModel) {
		const payload = state
			? {
					...values,
					id: (state as IModel).id
			  }
			: {
					...values,
					active: true
			  }
		mutate(
			{ ...payload },
			{
				onSuccess() {
					createSnackbar('success', 'Modelo salvo com sucesso!')
				},
				onError() {
					createSnackbar('error', 'Erro ao salvar Modelo!')
				}
			}
		)
	}
	useEffect(() => {
		if (assertLocationState(state)) {
			reset(state)
		}
	}, [state, reset])

	return (
		<div className='flex h-auto min-h-screen  overflow-auto '>
			<div className='flex-1 p-5'>
				<form onSubmit={handleSubmit(onCreateEditModel)}>
					<div className='flex flex-col gap-4'>
						<div className='flex '>
							<h2 className='pt-1 pl-6 align-middle text-xl font-bold text-black-fauv'>
								Novo Modelo
							</h2>
							<OutlinedButton className='ml-auto'>Upload DMO</OutlinedButton>
							<Button className='ml-4'>Salvar</Button>
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
								options={[]}
								required
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
