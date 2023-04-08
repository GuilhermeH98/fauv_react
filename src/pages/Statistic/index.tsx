import FlatButton from 'components/Buttons/FlatButton'
import { useState } from 'react'
import { RiArrowDownSLine, RiEyeFill } from 'react-icons/ri'
import { Graph } from './components/Graph'

export function Statistic() {
	const [isFmList, setIsFmList] = useState(true)

	function onChangePmpFm(action: 'FM' | 'PMP') {
		setIsFmList(action === 'FM')
		// TODO: CHANGE FM SELECTED AND SELECTED FM
	}

	return (
		<div className='flex flex-1 gap-4'>
			<div className='h-fit  flex-1 rounded-lg bg-white  '>
				{/* TODO: USE API DATA FM NAME */}
				<div className='flex px-8 pt-5 align-middle'>
					<div className='my-auto flex flex-col'>
						<span className='my-auto font-lexend text-xl font-bold'>
							FM_001
						</span>
						{/* TODO: USE API CATALOG */}
						<span className='font-lexend text-sm font-semibold'>
							Catálogo: GRUNDGEOMETRIE
						</span>
					</div>
					{/* TODO: Select with options OR BUTTON */}

					<FlatButton
						className='ml-auto mt-auto'
						data-dropdown-toggle='dropdown'
					>
						<div className='flex'>
							<span>Especificação - Valores individuais </span>
							<RiArrowDownSLine className='ml-2 text-icon' />
						</div>
					</FlatButton>

					{/* TODO: VERIFY DROPDOWN */}
				</div>

				{/* TODO: Pass DATA to Graph component */}
				<Graph
				// data={[]}
				/>
			</div>
			<div className='flex w-60 flex-col gap-4'>
				<div className='flex h-10'>
					<button
						onClick={() => onChangePmpFm('PMP')}
						className={`flex-1 rounded-tl-lg rounded-bl-lg font-bold ${
							isFmList ? 'bg-white' : 'bg-blue-fauv text-white'
						}`}
						type='button'
					>
						PMP
					</button>
					<button
						onClick={() => onChangePmpFm('FM')}
						className={`flex-1 rounded-tr-lg  rounded-br-lg  ${
							isFmList ? 'bg-blue-fauv text-white' : 'bg-white'
						}`}
						type='button'
					>
						FM
					</button>
				</div>
				<div className='flex-1 rounded-lg bg-white p-2'>
					{/* TODO: TITLE CARD */}
					<div className='flex h-12 px-5 '>
						<span className='my-auto  text-lg font-bold '>
							{isFmList ? 'FM' : 'PMP'}
						</span>
					</div>
					{/* TODO: CREATE CARD COMPOENNT */}
					<div className='flex h-18 px-5 '>
						<div className='my-auto flex flex-col'>
							<span className='my-auto font-lexend text-sm font-semibold'>
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
							<span className='my-auto font-lexend text-sm font-semibold'>
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
							<span className='my-auto font-lexend text-sm font-semibold '>
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
