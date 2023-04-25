import { useState } from 'react'
import { RiEyeFill } from 'react-icons/ri'
import type { IFmPmpListProperties } from './types'
import { getFmLevelLabel } from './utils'

export function FmPmpList({
	isShowingFmList,
	toggleIsShowingFmList,
	fmNamesList,
	pmpNamesList
}: IFmPmpListProperties) {
	// TODO LOGIC TO SELECTED CARD AND DEFAULT VALUE
	// TODO replace unecessary useState selectedPmp
	const [selectedPmp, setSelectedPmp] = useState('')
	const [selectedFm, setSelectedFm] = useState('')

	function onCardClick(isPmpOrFm: 'fm' | 'pmp', name: string) {
		// TODO use useState instead of useToggle
		if (isPmpOrFm === 'pmp') {
			setSelectedPmp(name)
			if (isShowingFmList) toggleIsShowingFmList()
		} else {
			setSelectedFm(name)
			if (!isShowingFmList) toggleIsShowingFmList()
		}
	}

	return (
		<div className='flex-1 overflow-auto rounded-lg bg-white  p-2'>
			<div className='flex h-12 px-5 '>
				<span className='my-auto  text-lg font-bold text-blue-fauv '>
					{isShowingFmList ? 'FM' : 'PMP'}
				</span>
			</div>

			{isShowingFmList &&
				fmNamesList.map((fmName, index) => (
					<div
						className={`flex h-18 px-5 ${
							fmName.name === selectedFm ? 'rounded bg-[#91BAD6]' : ''
						}`}
						key={`fmNameCard-${index}`}
					>
						<div className='my-auto flex flex-col'>
							<span className='my-auto w-[8.75rem] break-words font-lexend text-sm font-semibold'>
								{fmName.name}
							</span>

							<span className='font-lexend text-sm '>
								{getFmLevelLabel(fmName.level)}
							</span>
						</div>
						<RiEyeFill
							onClick={() => {
								onCardClick('fm', fmName.name)
							}}
							className={`my-auto ml-auto cursor-pointer  ${
								fmName.name === selectedFm
									? 'text-blue-fauv'
									: 'text-black-fauv'
							} `}
							size={28}
						/>
					</div>
				))}
			{!isShowingFmList &&
				pmpNamesList.map((pmpName, index) => (
					<div
						className={`flex h-18 px-5 ${
							pmpName.name === selectedPmp ? 'rounded bg-[#91BAD6]' : ''
						}`}
						key={`fmNameCard-${index}`}
					>
						<div className='my-auto flex flex-col'>
							<span className='my-auto w-[8.75rem] break-words font-lexend text-sm font-semibold'>
								{pmpName.name}
							</span>
						</div>
						<RiEyeFill
							onClick={() => {
								onCardClick('pmp', pmpName.name)
							}}
							className={`my-auto ml-auto cursor-pointer  ${
								pmpName.name === selectedPmp ? 'rounded bg-[#91BAD6]' : ''
							} `}
							size={28}
						/>
					</div>
				))}
		</div>
	)
}
