import { createSnackbar } from 'components/Snackbar/utils'
import { assertLocationState } from 'pages/Statistic/utils'
import { RiEye2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import type { IFmPmpListProperties } from './types'
import { getFmLevelLabel } from './utils'

export function FmPmpList({
	currentName,
	filterValue,
	isShowingFmList,
	isFm,
	state
}: IFmPmpListProperties) {
	const navigate = useNavigate()
	const isValidState = assertLocationState(state)

	function onCardClick(pmpOrFm: 'fm' | 'pmp', name: string) {
		if (name === currentName) return

		if (isValidState) {
			navigate(`/statistic/${pmpOrFm}/${state.modelId}/${name}`, {
				state
			})
		} else {
			createSnackbar('error', 'Falha ao acessar estatística')
		}
	}

	const filteredFmNames = isValidState
		? state.defaultFmNames.filter(fmName =>
				fmName.name.toLowerCase().includes(filterValue.toLowerCase())
		  )
		: []
	const filteredPmpNames = isValidState
		? state.defaultPmpNames.filter(pmpName =>
				pmpName.name.toLowerCase().includes(filterValue.toLowerCase())
		  )
		: []

	return (
		<div className='flex-1 overflow-auto rounded-lg bg-white p-2'>
			<div className='flex h-12 px-5 '>
				<span className='my-auto  text-lg font-bold text-blue-fauv '>
					{isShowingFmList ? 'FM' : 'PMP'}
				</span>
			</div>
			<div className='overflow-auto'>
				{isShowingFmList &&
					state &&
					isValidState &&
					filteredFmNames.map((fmName, index) => (
						<div
							className={`flex h-18 px-5 ${
								isFm && fmName.name === currentName
									? 'rounded bg-[#91BAD6]'
									: ''
							}`}
							key={`fmNameCard-${index}`}
						>
							<div className='my-auto flex flex-col'>
								<span className='my-auto w-[8.75rem] break-words font-lexend text-sm font-semibold text-blue-fauv'>
									{fmName.name}
								</span>

								<span className='font-lexend text-sm '>
									{getFmLevelLabel(fmName.level)}
								</span>
							</div>
							<RiEye2Line
								onClick={() => {
									onCardClick('fm', fmName.name)
								}}
								className={`my-auto ml-auto cursor-pointer  ${
									isFm && fmName.name === currentName
										? 'text-blue-fauv'
										: 'text-gray-fauv-3'
								} `}
								size={28}
							/>
						</div>
					))}
				{!isShowingFmList &&
					state &&
					filteredPmpNames.map((pmpName, index) => (
						<div
							className={`flex h-18 px-5 ${
								!isFm && pmpName.name === currentName
									? 'rounded bg-[#91BAD6]'
									: ''
							}`}
							key={`fmNameCard-${index}`}
						>
							<div className='my-auto flex flex-col'>
								<span className='my-auto w-[8.75rem] break-words font-lexend text-sm font-semibold text-blue-fauv'>
									{pmpName.name}
								</span>
							</div>
							<RiEye2Line
								onClick={() => {
									onCardClick('pmp', pmpName.name)
								}}
								className={`my-auto ml-auto cursor-pointer  ${
									!isFm && pmpName.name === currentName
										? ' text-blue-fauv'
										: 'text-gray-fauv-3'
								} `}
								size={28}
							/>
						</div>
					))}
			</div>
		</div>
	)
}
