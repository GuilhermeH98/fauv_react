import { useQueryClient } from '@tanstack/react-query'
import FlatButton from 'components/Buttons/FlatButton'
import OutlinedButton from 'components/Buttons/OutlinedButton'
import Input from 'components/Inputs/Input'
import { Query } from 'components/Query'
import { createSnackbar } from 'components/Snackbar/utils'
import TableContent from 'components/Table/components/TableContent'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { BsFilePdf } from 'react-icons/bs'
import {
	RiArrowDownSLine,
	RiArrowGoBackLine,
	RiArrowUpSLine,
	RiCarLine
} from 'react-icons/ri'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { formatNumber } from 'utils/format'
import { useToggle } from 'utils/miscellaneous'
import { GraphicType, useStatisticQuery } from './api'
import { FmPmpList } from './components/FmPmpList'
import { Graph } from './components/Graph'
import { PercentageCard } from './components/PercentageBar'
import {
	assertLocationState,
	exportPdf,
	getGraphicDataByType,
	getGraphicTypeLabel
} from './utils'

export function Statistic() {
	const [isShowingFmList, setIsShowingFmList] = useState(true)
	const [isMenuOpen, toggleIsMenuOpen] = useToggle()
	const [selectedGraphicType, setSelectedGraphicType] = useState<GraphicType>(
		GraphicType.CEP_INDIVIDUAL_VALUES
	)

	const { fmOrPmp, modelId, name } = useParams() as Record<string, string>
	const isFm = fmOrPmp === 'fm'

	const navigate = useNavigate()

	const { state } = useLocation()
	const isValidState = assertLocationState(state)

	if (!isValidState) {
		navigate('/statisticPreview')
	}

	const { register, control } = useForm<{ filter: string }>({
		defaultValues: { filter: '' }
	})

	const query = useStatisticQuery(isFm, modelId, name)()
	const queryClient = useQueryClient()

	const filterValue = useWatch({ control, name: 'filter' })

	function onGraphicTypeChange(type: GraphicType) {
		setSelectedGraphicType(type)
		toggleIsMenuOpen()
	}

	function onStatisticNavigation(pmpOrFm: 'fm' | 'pmp', nameUrl: string) {
		if (isValidState) {
			navigate(`/statistic/${pmpOrFm}/${state.modelId}/${nameUrl}`, {
				state
			})
			void queryClient.invalidateQueries()
		} else {
			createSnackbar('error', 'Falha ao acessar estatística')
		}
	}

	useEffect(() => {
		setIsShowingFmList(isFm)
	}, [isFm])

	return (
		<Query
			query={query}
			render={data => (
				<div className='flex'>
					{/* left side container */}
					<div className='w-[calc(100%-15.5rem)] bg-gray-fauv' id='statistic'>
						{/* Graph card */}
						<div className='h-fit  rounded-lg bg-white'>
							<div className='flex px-8 pt-5 align-middle'>
								<div className='my-auto flex flex-col'>
									<div className='flex'>
										<RiArrowGoBackLine
											onClick={() => {
												navigate('/statisticPreview')
											}}
											className='mr-2 cursor-pointer text-icon 	text-blue-fauv '
										/>
										<h2 className='my-auto font-lexend text-xl font-bold text-blue-fauv'>
											{data.name}
										</h2>
									</div>

									{isFm && (
										<span className='mt-1 font-lexend text-sm font-semibold text-blue-fauv '>
											Catálogo: {data.catalogType}
										</span>
									)}
								</div>
								{/* TODO: hidden dropdown on screen click */}
								<div className='relative my-auto ml-auto'>
									<div className='flex gap-4'>
										<OutlinedButton onClick={exportPdf}>
											<BsFilePdf className=' text-icon' />
										</OutlinedButton>
										<OutlinedButton
											onClick={toggleIsMenuOpen}
											className='flex '
										>
											<div className='m-auto flex'>
												{getGraphicTypeLabel(selectedGraphicType)}
												{isMenuOpen ? (
													<RiArrowUpSLine className='ml-2 text-icon' />
												) : (
													<RiArrowDownSLine className='ml-2 text-icon' />
												)}
											</div>
										</OutlinedButton>
									</div>

									{isMenuOpen && (
										<div className='absolute z-10 rounded-b border border-gray-200 bg-white py-1  shadow-md'>
											<FlatButton
												className='w-full text-start text-sm hover:bg-gray-100'
												onClick={() =>
													onGraphicTypeChange(GraphicType.CEP_INDIVIDUAL_VALUES)
												}
											>
												CEP - Valores Individuais
											</FlatButton>

											<FlatButton
												className='w-full  text-start text-sm hover:bg-gray-100'
												onClick={() =>
													onGraphicTypeChange(GraphicType.CEP_MOVEL_AMPLITUDE)
												}
											>
												CEP - Amplitude Móvel
											</FlatButton>
											<FlatButton
												className='w-full  text-start text-sm hover:bg-gray-100'
												onClick={() =>
													onGraphicTypeChange(GraphicType.INDIVIDUAL_VALUES)
												}
											>
												Especificação - Valores Individuais
											</FlatButton>
											<FlatButton
												className='w-full  text-start text-sm hover:bg-gray-100'
												onClick={() =>
													onGraphicTypeChange(GraphicType.MOVEL_AMPLITUDE)
												}
											>
												Especificação - Amplitude Móvel
											</FlatButton>
										</div>
									)}
								</div>
							</div>

							<Graph data={getGraphicDataByType(data, selectedGraphicType)} />
						</div>

						<div className='mt-4 h-fit '>
							{/* Card Indicators */}
							<div className='w-full  overflow-auto rounded-lg bg-white p-4 '>
								<div className='mb-2 flex'>
									<h3 className=' font-lexend text-xl font-bold text-blue-fauv'>
										Índices
									</h3>
									<span className='ml-auto font-lexend  font-bold text-green-fauv'>
										Processo Capaz
									</span>
								</div>

								<hr className='mt-2 mb-4 border-bluishgray-fauv' />
								<div className='flex  gap-2'>
									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											CP: {formatNumber(data.cp)}
										</p>
										<p className='my-3 font-lexend text-sm font-semibold'>
											CPK: {formatNumber(data.cpk)}
										</p>
									</div>
									<hr className='my-auto h-18 border border-bluishgray-fauv' />

									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											PP: {formatNumber(data.pp)}
										</p>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											PPK: {formatNumber(data.ppk)}
										</p>
									</div>
									<hr className='my-auto h-18 border border-bluishgray-fauv' />

									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Nível sigma: {formatNumber(data.sigmaLevel)}
										</p>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Desvio padrão: {formatNumber(data.standardDeviation)}
										</p>
									</div>
									<hr className='my-auto h-18 border border-bluishgray-fauv' />

									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Média: {formatNumber(data.average)}
										</p>
										<p className='mt-3 font-lexend text-sm  font-semibold'>
											Distribuição normal (Z):
											{formatNumber(data.nominalDistribution)}%
										</p>
									</div>
									<hr className='my-auto h-18 border border-bluishgray-fauv' />
									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Z1: {data.z1 || ''}
										</p>
										<p className='mt-3 font-lexend text-sm  font-semibold'>
											Z2: {data.z2 || ''}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='mt-4 flex h-fit max-h-[22rem] min-h-[17.5rem] gap-4'>
							<PercentageCard
								io={data.percentageIo}
								ak={data.percentageAk}
								bk={data.percentageBk}
								totalAk={data.totalAk}
								totalBk={data.totalBk}
								totalIo={data.totalIo}
								isFm={isFm}
							/>
							{/* TODO: use grid to remove unnecessary conditional */}
							{isFm ? (
								<div className='flex w-1/2 flex-col overflow-auto rounded-lg bg-white p-4 '>
									<h3 className=' font-lexend text-xl font-bold text-blue-fauv'>
										Foto
									</h3>

									<hr className='mt-2 mb-4 border-bluishgray-fauv' />
									{/* TODO: use api photo */}
									<div className='m-auto'>
										<RiCarLine
											className='mx-auto text-gray-fauv-3 opacity-50'
											size={68}
										/>
										<p className='mx-auto mt-2 flex-1 text-lg  font-semibold text-gray-fauv-3 opacity-75 '>
											Não possui foto
										</p>
									</div>
								</div>
							) : (
								<div className='w-1/2 overflow-auto rounded-lg bg-white p-4 '>
									<h3 className=' font-lexend text-xl font-bold text-blue-fauv'>
										Lista FM
									</h3>
									<hr className='mt-2 mb-4 border-bluishgray-fauv' />
									<TableContent
										blueHeader
										className='h-fit max-h-[16.25rem]'
										onRowClick={row => {
											onStatisticNavigation('fm', row.name)
										}}
										data={data.mappedFmList ?? []}
										columns={[
											{ key: 'name', header: 'Nome' },
											{ key: 'axis', header: 'Eixo' },
											{ key: 'catalogType', header: 'Catálogo' }
										]}
									/>
								</div>
							)}
						</div>
						{isFm && (
							<div className='mt-4 flex h-fit gap-4'>
								<div className='w-1/2 overflow-auto rounded-lg bg-white p-4 '>
									<h3 className=' font-lexend text-xl font-bold text-blue-fauv'>
										Lista PMP
									</h3>

									<hr className='mt-2 mb-4 border-bluishgray-fauv' />
									<TableContent
										blueHeader
										className='h-fit max-h-[16.25rem]'
										onRowClick={row => {
											onStatisticNavigation('pmp', row.name)
										}}
										data={
											data.mappedPmpList
												? data.mappedPmpList.map(pmp => ({
														name: pmp
												  }))
												: []
										}
										columns={[{ key: 'name', header: 'Nome' }]}
									/>
								</div>
								<div className='w-1/2 overflow-auto rounded-lg bg-white p-4'>
									<h3 className=' font-lexend text-xl font-bold text-blue-fauv'>
										Impactos
									</h3>

									<hr className='mt-2 mb-4 border-bluishgray-fauv' />
									<TableContent
										blueHeader
										data={[
											...data.impactList.map(impact => ({ info: impact }))
										]}
										columns={[
											{
												key: 'info',
												header: 'Informação'
											}
										]}
										className='max-h-[16.25rem] min-h-fit '
									/>
								</div>
							</div>
						)}
					</div>

					{/* Right Side Bar */}
					<div className=' w-60 '>
						<div className='fixed  top-16 bottom-0 p-4'>
							<div className='flex h-full flex-col gap-4 '>
								<div className='flex h-10'>
									<button
										onClick={() => setIsShowingFmList(false)}
										className={`h-10 flex-1 rounded-tl-lg rounded-bl-lg font-bold  ${
											isShowingFmList
												? 'bg-white text-blue-fauv'
												: 'bg-blue-fauv text-white'
										}`}
										type='button'
									>
										PMP
									</button>
									<button
										onClick={() => setIsShowingFmList(true)}
										className={`h-10 flex-1 rounded-tr-lg rounded-br-lg font-bold  ${
											isShowingFmList
												? 'bg-blue-fauv text-white'
												: 'bg-white text-blue-fauv'
										}`}
										type='button'
									>
										FM
									</button>
								</div>
								<Input
									id='filter'
									register={register}
									placeholder='Buscar...'
									searchIcon
									roundedClassName='rounded-lg'
								/>
								<FmPmpList
									isShowingFmList={isShowingFmList}
									isFm={isFm}
									filterValue={filterValue}
									currentName={name}
									state={isValidState ? state : null}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		/>
	)
}
