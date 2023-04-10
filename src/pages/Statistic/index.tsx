import FlatButton from 'components/Buttons/FlatButton'
import Input from 'components/Inputs/Input'
import TableContent from 'components/Table/components/TableContent'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RiArrowDownSLine, RiArrowUpSLine, RiEyeFill } from 'react-icons/ri'
import { useToggle } from 'utils/miscellaneous'
import { Graph } from './components/Graph'

export function Statistic() {
	const { register } = useForm()
	const [isFmList, setIsFmList] = useState(true)
	// // TODO: Change to use API FM , START WITH NULL
	const [selectedFm, setSelectedFm] = useState(true)
	// // TODO: Change to use API PMP , START WITH NULL
	// const [selectedPmp, setSelectedPmp] = useState(false)
	const [isMenuOpen, toggleIsMenuOpen] = useToggle()

	function onChangePmpFm(action: 'FM' | 'PMP') {
		setIsFmList(action === 'FM')
		setSelectedFm(!selectedFm)
		// TODO: CHANGE SELECTED FM AND SELECTED PMP
	}

	return (
		<div className='relative'>
			{/* left side container */}
			<div className='w-[calc(100%-16rem)]'>
				{/* Graph card */}
				<div className='h-fit  rounded-lg bg-white  '>
					{/* TODO: USE API DATA FM NAME */}
					<div className='flex px-8 pt-5 align-middle'>
						<div className='my-auto flex flex-col'>
							<h2 className='my-auto font-lexend text-xl font-bold'>FM_001</h2>
							{/* TODO: USE API CATALOG */}
							<span className='mt-1 font-lexend text-sm font-semibold text-gray-fauv-2'>
								Catálogo: GRUNDGEOMETRIE
							</span>
						</div>
						{/* TODO: Select with options OR BUTTON */}
						<div className='relative ml-auto mt-auto'>
							<FlatButton onClick={toggleIsMenuOpen}>
								<div className='flex'>
									<span>Especificação - Valores individuais </span>
									{isMenuOpen ? (
										<RiArrowUpSLine className='ml-2 text-icon' />
									) : (
										<RiArrowDownSLine className='ml-2 text-icon' />
									)}
								</div>
							</FlatButton>

							{isMenuOpen && (
								<div className='absolute z-10 rounded border border-gray-200 bg-white py-1  shadow-md'>
									{/* TODO: Use 4 options and create a function for every button */}
									<FlatButton className='w-full text-start text-sm hover:bg-gray-100'>
										CEP - Valores Individuais
									</FlatButton>

									<FlatButton className='w-full  text-start text-sm hover:bg-gray-100'>
										CEP - Amplitude Móvel
									</FlatButton>
									<FlatButton className='w-full  text-start text-sm hover:bg-gray-100'>
										Especificação - Valores Individuais
									</FlatButton>
									<FlatButton className='w-full  text-start text-sm hover:bg-gray-100'>
										Especificação - Amplitude Móvel
									</FlatButton>
								</div>
							)}
						</div>

						{/* TODO: VERIFY DROPDOWN */}
					</div>

					{/* TODO: Pass DATA to Graph component */}
					<Graph
					// data={[]}
					/>
				</div>

				<div className='mt-4 h-fit '>
					{/* Card Indicators */}
					<div className='w-full  overflow-auto rounded-lg bg-white p-4 '>
						<div className='mb-2 flex'>
							<h3 className=' font-lexend text-xl font-bold'>Índices</h3>
							<span className='ml-auto font-lexend  font-bold text-green-fauv'>
								Processo Capaz
							</span>
						</div>

						<hr className='mt-2 mb-4 border-bluishgray-fauv' />
						{/* TODO: USE API DATA ON Indicators */}
						<div className='flex  gap-2'>
							<div className='mr-auto'>
								<p className='my-3 font-lexend text-sm  font-semibold'>
									CP: 0,5{' '}
								</p>
								<p className='my-3 font-lexend text-sm font-semibold'>
									CPK: 0,5{' '}
								</p>
							</div>
							<hr className='my-auto h-18 border border-bluishgray-fauv' />

							<div className='mr-auto'>
								<p className='my-3 font-lexend text-sm  font-semibold'>
									PP: 0,5
								</p>
								<p className='my-3 font-lexend text-sm  font-semibold'>
									PPK: 0,5
								</p>
							</div>
							<hr className='my-auto h-18 border border-bluishgray-fauv' />

							<div className='mr-auto'>
								<p className='my-3 font-lexend text-sm  font-semibold'>
									Nível sigma: 5,09
								</p>
								<p className='my-3 font-lexend text-sm  font-semibold'>
									Desvio padrão: 5,09
								</p>
							</div>
							<hr className='my-auto h-18 border border-bluishgray-fauv' />

							<div className='mr-auto'>
								<p className='my-3 font-lexend text-sm  font-semibold'>
									Média: 5,09
								</p>
								<p className='mt-3 font-lexend text-sm  font-semibold'>
									Distribuição normal (Z): 5,09%
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-4 flex h-fit max-h-[22rem] min-h-[17.5rem] gap-4'>
					{/* Card Status Percentage  */}
					<div className='flex w-1/2 flex-col overflow-auto rounded-lg bg-white p-4 '>
						<h3 className=' font-lexend text-xl font-bold'>
							{selectedFm ? 'FM' : 'PMP'} status porcentagem (%)
						</h3>
						<hr className='mt-2 mb-2 border-bluishgray-fauv' />
						{/* TODO: USE API DATA FOR PERCENTAGE. PASS CONTS TO Width */}
						<div className='mt-auto flex'>
							<div className='h-12 w-[75%] rounded-tl-lg rounded-bl-lg bg-green-fauv' />
							<div className='h-12 w-[20%]  border-l-4 border-r-4 border-white bg-yellow-fauv' />
							<div className='h-12 w-[5%] rounded-tr-lg rounded-br-lg   bg-red-fauv' />
						</div>
						<div className='my-auto flex justify-between'>
							<div className='flex flex-col'>
								<p className='font-lg font-lexend'>
									{/* TODO: Use API percentage for text */}
									<span className='text-xl   text-green-fauv '>IO </span>
									<span className='hidden text-sm xl:inline'>
										Menor ou igual 75%{' '}
									</span>
								</p>
								<p className='mx-auto font-lexend text-lg font-bold'>
									27 (93%)
								</p>
							</div>
							<div className='flex flex-col'>
								<p className='font-lg font-lexend'>
									{/* TODO: Use API percentage for text */}
									<span className='text-xl   text-yellow-fauv '>BK </span>
									<span className='hidden text-sm xl:inline'>
										Maior 75 % e menor 100%
									</span>
								</p>
								<p className='mx-auto font-lexend text-lg font-bold'>2 (5%) </p>
							</div>
							<div className='flex flex-col'>
								<p className='font-lg font-lexend'>
									{/* TODO: Use API percentage for text */}
									<span className='text-xl   text-red-fauv '>AK </span>
									<span className='hidden text-sm xl:inline'>Maior 100%</span>
								</p>
								<p className='mx-auto font-lexend text-lg font-bold'>1 (2%) </p>
							</div>
						</div>
					</div>
					{/* TODO: USE GRID TO REMOVE UNNECESSARY CONDITIONAL */}
					{/* Card Photo */}
					{selectedFm ? (
						<div className='w-1/2  overflow-auto rounded-lg bg-white p-4 '>
							<h3 className=' font-lexend text-xl font-bold'>Foto</h3>

							<hr className='mt-2 mb-4 border-bluishgray-fauv' />
							{/* TODO: USE API PHOTO - REMOVE TEXT */}
							<p className='my-4 font-lexend text-sm font-semibold'>
								CP/CPK: 0,5 / 0,5
							</p>
							<p className='my-4 font-lexend text-sm font-semibold'>
								PP/PPK: 0,5 / 0,5
							</p>
							<p className='my-4 font-lexend text-sm font-semibold'>
								Nível sigma: 5,09
							</p>
							<p className='my-4 font-lexend text-sm font-semibold'>
								Desvio padrão: 5,09
							</p>
							<p className='my-4 font-lexend text-sm font-semibold'>
								Média: 5,09
							</p>
							<p className='mt-4 font-lexend text-sm font-semibold'>
								Distribuição normal (Z): 5,09%
							</p>
						</div>
					) : (
						<div className='w-1/2 overflow-auto rounded-lg bg-white p-4 '>
							<TableContent
								blueHeader
								className='max-h-[18rem]'
								data={[
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'Y' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' },
									{ name: 'FM_001', axis: 'X' }
								]}
								columns={[
									{ key: 'name', header: 'Nome' },
									{ key: 'axis', header: 'Eixo' }
								]}
							/>
						</div>
					)}
				</div>
				{selectedFm && (
					<div className='mt-4 flex h-fit gap-4'>
						<div className='w-1/2 overflow-auto rounded-lg bg-white p-4 '>
							<TableContent
								blueHeader
								className='max-h-[20rem]'
								data={[
									{ name: 'PM_001', axis: 'X' },
									{ name: 'PM_002', axis: 'Y' }
								]}
								columns={[
									{ key: 'name', header: 'Nome' },
									{ key: 'axis', header: 'Eixo' }
								]}
							/>
						</div>
						<div className='w-1/2 overflow-auto rounded-lg bg-white p-4'>
							<TableContent
								blueHeader
								data={[
									{
										impact:
											'Ajuste irregular entre para-choque dianteiro e para-lama.'
									},
									{
										impact:
											'Dificuldade/problemas de aparafusamento da alma metálica.'
									}
								]}
								columns={[{ key: 'impact', header: 'Impacto' }]}
								className='max-h-[20rem]'
							/>
						</div>
					</div>
				)}
			</div>

			{/* Right Side Bar */}
			<div className='absolute top-0 bottom-0 right-0 flex w-60 flex-col gap-4'>
				<div className='flex h-10'>
					<button
						onClick={() => onChangePmpFm('PMP')}
						className={`h-10 flex-1 rounded-tl-lg rounded-bl-lg font-bold ${
							isFmList ? 'bg-white' : 'bg-blue-fauv text-white'
						}`}
						type='button'
					>
						PMP
					</button>
					<button
						onClick={() => onChangePmpFm('FM')}
						className={`h-10 flex-1 rounded-tr-lg rounded-br-lg font-bold  ${
							isFmList ? 'bg-blue-fauv text-white' : 'bg-white'
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
				<div className='flex-1 overflow-auto rounded-lg bg-white  p-2'>
					{/* TODO: TITLE CARD */}
					<div className='flex h-12 px-5 '>
						<span className='my-auto  font-bold '>
							{isFmList ? 'FM' : 'PMP'}
						</span>
					</div>
					{/* TODO: CREATE CARD COMPOENNT */}
					<div className='flex h-18 px-5 '>
						<div className='my-auto flex flex-col'>
							<span className='my-auto w-[8.75rem] break-words font-lexend text-sm font-semibold'>
								NLLVL0001_O_DG
							</span>
							<span className='font-lexend text-sm '>Critical</span>
						</div>

						<RiEyeFill
							onClick={() => console.log('click')}
							className='my-auto ml-auto cursor-pointer text-black-fauv'
							size={28}
						/>
					</div>
					{/* TODO: CREATE CARD COMPOENNT */}
					<div className='flex h-18 px-5 '>
						<div className='my-auto flex flex-col'>
							<span className='my-auto w-[8.75rem] break-words font-lexend text-sm font-semibold'>
								NLLVL0001_O_DG
							</span>
							<span className='font-lexend text-sm '>Critical</span>
						</div>

						{/* TODO: CHANGE PMP/ FM ONCLICK  */}
						<RiEyeFill
							onClick={() => console.log('click')}
							className='my-auto ml-auto cursor-pointer text-black-fauv'
							size={28}
						/>
					</div>
					{/* TODO: CARD ON SUCCESS */}
					<div className='flex h-18 rounded bg-[#91BAD6] px-5'>
						<div className='my-auto flex flex-col'>
							<span className='my-auto w-[8.75rem] break-words font-lexend text-sm font-semibold '>
								FM_001
							</span>
							<span className='font-lexend text-sm '>Critical</span>
						</div>
						{/* TODO: CHANGE PMP/ FM ONCLICK  */}
						<RiEyeFill
							onClick={() => console.log('click')}
							className='my-auto ml-auto cursor-pointer text-blue-fauv'
							size={28}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
