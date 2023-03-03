import Button from 'components/Buttons/Button'
import FlatButton from 'components/Buttons/FlatButton'
import OutlinedButton from 'components/Buttons/OutlinedButton'
import Input from 'components/Inputs/Input'
import { Select } from 'components/Inputs/Select'
import { createSnackbar } from 'components/Snackbar/utils'
import TableContent from 'components/Table/components/TableContent'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
	RiArrowGoBackLine,
	RiArrowLeftLine,
	RiUploadCloud2Line
} from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'
import type { IModel } from '../api'
import { PointAxis, useModelMutation } from '../api'
import { columns as fmColumns } from './fmColumns'
import { columns as pmpColumns } from './pmpColumns'

function assertLocationState(state: unknown): state is IModel {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	return !!state && (state as IModel).id !== undefined
}

export function CreateEditModel() {
	const { state } = useLocation()

	const navigate = useNavigate()

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
							<div className='relative'>
								<RiArrowGoBackLine
									onClick={() => navigate(-1)}
									className='absolute top-[0.425rem] cursor-pointer 
								text-icon '
								/>
								<h2 className='pt-1 pl-9 align-middle text-xl font-bold text-black-fauv'>
									Novo Modelo
								</h2>
							</div>

							<FlatButton className='ml-auto'>
								<div className='flex'>
									<RiArrowLeftLine className='mr-2 text-icon' />
									<span>Voltar</span>
								</div>
							</FlatButton>

							<OutlinedButton className='ml-4'>
								<div className='flex'>
									<RiUploadCloud2Line className='mr-2 text-icon' />
									<span>Upload DMO</span>
								</div>
							</OutlinedButton>
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
						<div className='flex h-9 items-center justify-center rounded-md bg-gray-fauv-3 text-lg font-semibold leading-6 text-gray-fauv'>
							PONTOS PMP
						</div>
						<TableContent
							columns={pmpColumns}
							data={[
								{
									id: 0,
									name: 'PONTO A',
									workingOn: PointAxis.X,
									x: -125.321,
									y: -125.321,
									z: -125.321,
									active: true,
									axisCoordinateList: [
										{
											id: 0,
											name: 'string',
											lowerTolerance: -125.321,
											higherTolerance: 125.321,
											axis: PointAxis.X,
											pmpId: 0
										}
									]
								},
								{
									id: 0,
									name: 'PONTO A',
									workingOn: PointAxis.X,
									x: -125.321,
									y: -125.321,
									z: -125.321,
									active: true,
									axisCoordinateList: [
										{
											id: 0,
											name: 'string',
											lowerTolerance: -125.321,
											higherTolerance: 125.321,
											axis: PointAxis.X,
											pmpId: 0
										}
									]
								}
							]}
						/>
						<OutlinedButton className='mr-auto'>Adicionar PMP</OutlinedButton>
						<div className='flex h-9 items-center justify-center rounded-md bg-gray-fauv-3 text-lg font-semibold leading-6 text-gray-fauv'>
							FUNTIONSMASSE (FM)
						</div>
						<TableContent columns={fmColumns} data={[]} />
						<OutlinedButton className='mr-auto'>Adicionar FM</OutlinedButton>
					</div>
				</form>
			</div>
		</div>
	)
}
