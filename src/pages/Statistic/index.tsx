import FlatButton from 'components/Buttons/FlatButton'
import OutlinedButton from 'components/Buttons/OutlinedButton'
import Input from 'components/Inputs/Input'
import { Query } from 'components/Query'
import TableContent from 'components/Table/components/TableContent'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	RiArrowDownSLine,
	RiArrowGoBackLine,
	RiArrowUpSLine,
	RiCarLine
} from 'react-icons/ri'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { truncate } from 'utils/format'
import { useToggle } from 'utils/miscellaneous'
import { GraphicType, useStatisticQuery } from './api'
import { FmPmpList } from './components/FmPmpList'
import { Graph } from './components/Graph'
import {
	assertLocationState,
	getGraphicDataByType,
	getGraphicTypeLabel
} from './utils'

export function Statistic() {
	const [isShowingFmList, toggleIsShowingFmList] = useToggle(true)
	const [isMenuOpen, toggleIsMenuOpen] = useToggle()
	const [selectedGraphicType, setSelectedGraphicType] = useState<GraphicType>(
		GraphicType.CEP_INDIVIDUAL_VALUES
	)

	const { isFmVersion, modelId, name } = useParams() as Record<string, string>
	const isFm = Boolean(isFmVersion)

	const { state } = useLocation()
	const isValidState = assertLocationState(state)

	const { register } = useForm()

	const navigate = useNavigate()

	const query = useStatisticQuery(isFm, modelId, name)()

	function onGraphicTypeChange(type: GraphicType) {
		setSelectedGraphicType(type)
		toggleIsMenuOpen()
	}

	// TODO USE AS EVERY PART OF THE PAGE THAT CHANGE WITH PMP OR FM

	return (
		<Query
			query={query}
			render={data => (
				<div className='relative'>
					{/* <Query query={query} /> */}
					{/* left side container */}
					<div className='w-[calc(100%-16rem)]'>
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
								{/* TODO: HIDDEN DROPDOWN on CLICK */}
								<div className='relative my-auto ml-auto'>
									<OutlinedButton onClick={toggleIsMenuOpen} className='flex '>
										<div className='m-auto flex'>
											<span> {getGraphicTypeLabel(selectedGraphicType)}</span>
											{isMenuOpen ? (
												<RiArrowUpSLine className='ml-2 text-icon' />
											) : (
												<RiArrowDownSLine className='ml-2 text-icon' />
											)}
										</div>
									</OutlinedButton>

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
								{/* TODO: USE API DATA ON Indicators */}
								<div className='flex  gap-2'>
									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											CP: {truncate(data.cp)}
										</p>
										<p className='my-3 font-lexend text-sm font-semibold'>
											CPK: {truncate(data.cpk)}
										</p>
									</div>
									<hr className='my-auto h-18 border border-bluishgray-fauv' />

									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											PP: {truncate(data.pp)}
										</p>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											PPK: {truncate(data.ppk)}
										</p>
									</div>
									<hr className='my-auto h-18 border border-bluishgray-fauv' />

									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Nível sigma: {truncate(data.sigmaLevel)}
										</p>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Desvio padrão: {truncate(data.standardDeviation)}
										</p>
									</div>
									<hr className='my-auto h-18 border border-bluishgray-fauv' />

									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Média: {truncate(data.average)}
										</p>
										<p className='mt-3 font-lexend text-sm  font-semibold'>
											Distribuição normal (Z):
											{truncate(data.nominalDistribution)}%
										</p>
									</div>
									<hr className='my-auto h-18 border border-bluishgray-fauv' />
									{/* TODO Z1 and Z2 */}
									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Z1: 5,09
										</p>
										<p className='mt-3 font-lexend text-sm  font-semibold'>
											Z2: 5,09
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='mt-4 flex h-fit max-h-[22rem] min-h-[17.5rem] gap-4'>
							{/* Card Status Percentage  */}
							<div className='flex w-1/2 flex-col overflow-auto rounded-lg bg-white p-4 '>
								<h3 className=' font-lexend text-xl font-bold text-blue-fauv'>
									{isFm ? 'FM' : 'PMP'} status porcentagem (%)
								</h3>
								<hr className='mt-2 mb-2 border-bluishgray-fauv' />
								{/* TODO: USE API DATA FOR PERCENTAGE. PASS CONTS TO Width */}
								<div className='mt-auto flex'>
									<div className='h-12 w-[75%] rounded-tl-lg rounded-bl-lg bg-green-fauv' />
									<div className='h-12 w-[20%] border-x-2  border-white bg-yellow-fauv' />
									<div className='h-12 w-[5%] rounded-tr-lg rounded-br-lg   bg-red-fauv' />
								</div>
								<div className='my-auto flex justify-between'>
									<div className='flex flex-col'>
										<p className='font-lg text-center font-lexend'>
											{/* TODO: Use API percentage for text */}
											<span className='text-xl   text-green-fauv '>IO </span>
											<span className='text-sm'>Menor ou igual 75% </span>
										</p>
										<p className='mx-auto font-lexend font-bold'>27 (93%)</p>
									</div>
									<div className='flex flex-col'>
										<p className='font-lg text-center font-lexend '>
											{/* TODO: Use API percentage for text */}
											<span className='text-xl   text-yellow-fauv '>BK </span>
											<span className='text-sm'>Maior 75 % e menor 100%</span>
										</p>
										<p className='mx-auto font-lexend  font-bold'>2 (5%) </p>
									</div>
									<div className='flex flex-col'>
										<p className='font-lg text-center font-lexend'>
											{/* TODO: Use API percentage for text */}
											<span className='text-xl   text-red-fauv '>AK </span>
											<span className='text-sm'>Maior 100%</span>
										</p>
										<p className='mx-auto font-lexend font-bold'>1 (2%) </p>
									</div>
								</div>
							</div>
							{/* TODO: USE GRID TO REMOVE UNNECESSARY CONDITIONAL */}
							{/* Card Photo */}
							{isFm ? (
								<div className='flex w-1/2 flex-col overflow-auto rounded-lg bg-white p-4 '>
									<h3 className=' font-lexend text-xl font-bold text-blue-fauv'>
										Foto
									</h3>

									<hr className='mt-2 mb-4 border-bluishgray-fauv' />
									{/* TODO: USE API PHOTO - REMOVE TEXT */}
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
									<TableContent
										blueHeader
										className='max-h-[18rem]'
										data={[
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'Y', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' },
											{ name: 'FM_001', axis: 'X', catalog: 'GEO' }
										]}
										columns={[
											{ key: 'name', header: 'Nome' },
											{ key: 'axis', header: 'Eixo' },
											{ key: 'catalog', header: 'Catálogo' }
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
										data={data.mappedPmpList.map(pmp => ({ name: pmp }))}
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
										data={data.impactList}
										columns={[{ key: 'info', header: 'Informação' }]}
										className='max-h-[16.25rem] min-h-fit '
									/>
								</div>
							</div>
						)}
					</div>

					{/* Right Side Bar */}
					<div className='absolute top-0 bottom-0 right-0 flex w-60 flex-col gap-4'>
						<div className='flex h-10'>
							<button
								// onClick={() => onChangePmpFm('PMP')}
								className={`h-10 flex-1 rounded-tl-lg rounded-bl-lg font-bold ${
									isShowingFmList ? 'bg-white' : 'bg-blue-fauv text-white'
								}`}
								type='button'
							>
								PMP
							</button>
							<button
								// onClick={() => onChangePmpFm('FM')}
								className={`h-10 flex-1 rounded-tr-lg rounded-br-lg font-bold  ${
									isShowingFmList ? 'bg-blue-fauv text-white' : 'bg-white'
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
							toggleIsShowingFmList={toggleIsShowingFmList}
							fmNamesList={isValidState ? state.defaultFmNames : []}
							pmpNamesList={isValidState ? state.defaultPmpNames : []}
						/>
					</div>
				</div>
			)}
		/>
	)
}
