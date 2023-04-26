/* eslint-disable @typescript-eslint/restrict-template-expressions */
import FlatButton from 'components/Buttons/FlatButton'
import OutlinedButton from 'components/Buttons/OutlinedButton'
import Input from 'components/Inputs/Input'
import { Query } from 'components/Query'
import TableContent from 'components/Table/components/TableContent'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
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
	const [isShowingFmList, setIsShowingFmList] = useState(true)
	const [isMenuOpen, toggleIsMenuOpen] = useToggle()
	const [selectedGraphicType, setSelectedGraphicType] = useState<GraphicType>(
		GraphicType.CEP_INDIVIDUAL_VALUES
	)
	const navigate = useNavigate()

	const { state } = useLocation()
	const isValidState = assertLocationState(state)

	if (!isValidState) {
		navigate('/statisticPreview')
	}

	const { fmOrPmp, modelId, name } = useParams() as Record<string, string>
	const isFm = fmOrPmp === 'fm'

	const { register, control } = useForm<{ filter: string }>({
		defaultValues: { filter: '' }
	})

	const query = useStatisticQuery(isFm, modelId, name)()

	const filterValue = useWatch({ control, name: 'filter' })

	function onGraphicTypeChange(type: GraphicType) {
		setSelectedGraphicType(type)
		toggleIsMenuOpen()
	}

	// const statisticData = query.data

	// const [ioWidth, bkWidth, akWidth] = statisticData
	// 	? [
	// 			(statisticData.io * 100).toString(),
	// 			(statisticData.bk * 100).toString(),
	// 			(statisticData.ak * 100).toString()
	// 	  ]
	// 	: ['0', '0', '0']

	// const widthVariants = {
	// 	'0': 'w-[0%]',
	// 	'1': 'w-[1%]',
	// 	'2': 'w-[2%]',
	// 	'3': 'w-[3%]',
	// 	'4': 'w-[4%]',
	// 	'5': 'w-[5%]',
	// 	'6': 'w-[6%]',
	// 	'7': 'w-[7%]',
	// 	'8': 'w-[8%]',
	// 	'9': 'w-[9%]',
	// 	'10': 'w-[10%]',
	// 	'11': 'w-[11%]',
	// 	'12': 'w-[12%]',
	// 	'13': 'w-[13%]',
	// 	'14': 'w-[14%]',
	// 	'15': 'w-[15%]',
	// 	'16': 'w-[16%]',
	// 	'17': 'w-[17%]',
	// 	'18': 'w-[18%]',
	// 	'19': 'w-[19%]',
	// 	'20': 'w-[20%]',
	// 	'21': 'w-[21%]',
	// 	'22': 'w-[22%]',
	// 	'23': 'w-[23%]',
	// 	'24': 'w-[24%]',
	// 	'25': 'w-[25%]',
	// 	'26': 'w-[26%]',
	// 	'27': 'w-[27%]',
	// 	'28': 'w-[28%]',
	// 	'29': 'w-[29%]',
	// 	'30': 'w-[30%]',
	// 	'31': 'w-[31%]',
	// 	'32': 'w-[32%]',
	// 	'33': 'w-[33%]',
	// 	'34': 'w-[34%]',
	// 	'35': 'w-[35%]',
	// 	'36': 'w-[36%]',
	// 	'37': 'w-[37%]',
	// 	'38': 'w-[38%]',
	// 	'39': 'w-[39%]',
	// 	'40': 'w-[40%]',
	// 	'41': 'w-[41%]',
	// 	'42': 'w-[42%]',
	// 	'43': 'w-[43%]',
	// 	'44': 'w-[44%]',
	// 	'45': 'w-[45%]',
	// 	'46': 'w-[46%]',
	// 	'47': 'w-[47%]',
	// 	'48': 'w-[48%]',
	// 	'49': 'w-[49%]',
	// 	'50': 'w-[50%]',
	// 	'51': 'w-[51%]',
	// 	'52': 'w-[52%]',
	// 	'53': 'w-[53%]',
	// 	'54': 'w-[54%]',
	// 	'55': 'w-[55%]',
	// 	'56': 'w-[56%]',
	// 	'57': 'w-[57%]',
	// 	'58': 'w-[58%]',
	// 	'59': 'w-[59%]',
	// 	'60': 'w-[60%]',
	// 	'61': 'w-[61%]',
	// 	'62': 'w-[62%]',
	// 	'63': 'w-[63%]',
	// 	'64': 'w-[64%]',
	// 	'65': 'w-[65%]',
	// 	'66': 'w-[66%]',
	// 	'67': 'w-[67%]',
	// 	'68': 'w-[68%]',
	// 	'69': 'w-[69%]',
	// 	'70': 'w-[70%]',
	// 	'71': 'w-[71%]',
	// 	'72': 'w-[72%]',
	// 	'73': 'w-[73%]',
	// 	'74': 'w-[74%]',
	// 	'75': 'w-[75%]',
	// 	'76': 'w-[76%]',
	// 	'77': 'w-[77%]',
	// 	'78': 'w-[78%]',
	// 	'79': 'w-[79%]',
	// 	'80': 'w-[80%]',
	// 	'81': 'w-[81%]',
	// 	'82': 'w-[82%]',
	// 	'83': 'w-[83%]',
	// 	'84': 'w-[84%]',
	// 	'85': 'w-[85%]',
	// 	'86': 'w-[86%]',
	// 	'87': 'w-[87%]',
	// 	'88': 'w-[88%]',
	// 	'89': 'w-[89%]',
	// 	'90': 'w-[90%]',
	// 	'91': 'w-[91%]',
	// 	'92': 'w-[92%]',
	// 	'93': 'w-[93%]',
	// 	'94': 'w-[94%]',
	// 	'95': 'w-[95%]',
	// 	'96': 'w-[96%]',
	// 	'97': 'w-[97%]',
	// 	'98': 'w-[98%]',
	// 	'99': 'w-[99%]',
	// 	'100': 'w-[100%]'
	// }

	return (
		<Query
			query={query}
			render={data => (
				<div>
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
									{/* TODO: use z1 and z2 values */}
									<div className='mr-auto'>
										<p className='my-3 font-lexend text-sm  font-semibold'>
											Z1: 0
										</p>
										<p className='mt-3 font-lexend text-sm  font-semibold'>
											Z2: 0
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
									<div className='h-12 w-[34%] rounded-tl-lg rounded-bl-lg bg-green-fauv' />
									<div className='h-12 w-[34%] border-x-2  border-white bg-yellow-fauv' />
									<div className='h-12 w-[34%] rounded-tr-lg rounded-br-lg   bg-red-fauv' />
								</div>
								<div className='my-auto flex justify-between'>
									<div className='flex flex-col'>
										<p className='font-lg text-center font-lexend'>
											{/* TODO: Use API percentage for text */}
											<span className='text-xl   text-green-fauv '>IO </span>
											<span className='text-sm'>Menor ou igual 75% </span>
										</p>
										<p className='mx-auto font-lexend font-bold'>
											{`${data.totalIo} (${data.io * 100}%)`}
										</p>
									</div>
									<div className='flex flex-col'>
										<p className='font-lg text-center font-lexend '>
											{/* TODO: Use API percentage for text */}
											<span className='text-xl   text-yellow-fauv '>BK </span>
											<span className='text-sm'>Maior 75 % e menor 100%</span>
										</p>
										<p className='mx-auto font-lexend  font-bold'>
											{`${data.totalBk} (${data.bk * 100}%)`}
										</p>
									</div>
									<div className='flex flex-col'>
										<p className='font-lg text-center font-lexend'>
											{/* TODO: Use API percentage for text */}
											<span className='text-xl   text-red-fauv '>AK</span>
											<span className='text-sm'>Maior 100%</span>
										</p>
										<p className='mx-auto font-lexend font-bold'>
											{`${data.totalAk} (${data.ak * 100}%)`}
										</p>
									</div>
								</div>
							</div>
							{/* TODO: use grid to remove unnecessary conditional */}
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
					<div className='fixed top-16 bottom-0 right-8 w-60 py-4 pdf-screen:right-4'>
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
			)}
		/>
	)
}
