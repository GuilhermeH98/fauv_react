import { Dialog } from 'components/Dialog'
import Input from 'components/Inputs/Input'
import { Query } from 'components/Query'
import TableContent from 'components/Table/components/TableContent'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { RiAlertLine, RiArrowGoBackLine } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import { useToggle } from 'utils/miscellaneous'
import type { IFmOverview, IPmpOverview } from './api'
import { useSampleOverviewQuery } from './api'
import { FmDialog } from './components/FmDialog'
import { PmpDialog } from './components/PmpDialog'
import { fmColumns } from './fmColumns'
import { pmpColumns } from './pmpColumns'
import { getStatusLabel } from './utils'

export function SampleOverview() {
	const [isPmpDialogOpen, toggleIsPmpDialogOpen] = useToggle()
	const [selectedPmp, setSelectedPmp] = useState<IPmpOverview | null>(null)
	const [isFmDialogOpen, toggleIsFmDialogOpen] = useToggle()
	const [selectedFm, setSelectedFm] = useState<IFmOverview | null>(null)

	const { sampleId } = useParams() as Record<string, string>

	const query = useSampleOverviewQuery(sampleId)()

	const navigate = useNavigate()

	const { register: registerFilter, control: controlFilter } = useForm<{
		pmpFilter: string
		fmFilter: string
	}>({ defaultValues: { pmpFilter: '', fmFilter: '' } })

	const [pmpFilterValue, fmFilterValue] = useWatch({
		control: controlFilter,
		name: ['pmpFilter', 'fmFilter']
	})

	const filteredPmpList = query.data
		? query.data.pmpOverviewList.filter(pmp =>
				pmp.name.toLowerCase().includes(pmpFilterValue.toLowerCase())
		  )
		: []

	const filteredFmList = query.data
		? query.data.fmOverviewList.filter(fm =>
				fm.name.toLowerCase().includes(fmFilterValue.toLowerCase())
		  )
		: []

	function onClosePmpDialog() {
		setSelectedPmp(null)
		toggleIsPmpDialogOpen()
	}

	function onCloseFmDialog() {
		setSelectedFm(null)
		toggleIsFmDialogOpen()
	}

	function onFmClick(fm: IFmOverview) {
		setSelectedFm(fm)
		toggleIsFmDialogOpen()
	}

	function onPmpClick(pmp: IPmpOverview) {
		setSelectedPmp(pmp)
		toggleIsPmpDialogOpen()
	}

	return (
		<>
			<div className='flex h-auto min-h-screen bg-gray-fauv p-4'>
				<Query
					query={query}
					returnOnError
					render={data => (
						<div className='flex h-auto flex-1 rounded-lg bg-white '>
							<div className='flex-1 p-5'>
								<div className='flex flex-col gap-5'>
									<div className='flex'>
										<div className='relative mr-auto flex-shrink '>
											<RiArrowGoBackLine
												onClick={() => navigate('/samples')}
												className='absolute cursor-pointer text-icon
text-black-fauv'
											/>
											<p className='lexend pl-9  font-bold text-black-fauv'>
												PIN
											</p>
											<p className='lexend mt-2 pl-9  text-black-fauv'>
												{data.pin}
											</p>
										</div>
										<div className='mr-auto'>
											<p className='lexend  font-bold  text-black-fauv'>
												Usuário
											</p>
											<p className='lexend mt-2   text-black-fauv'>
												{data.uploadedUser}
											</p>
										</div>
										<div className='mr-auto'>
											<p className='lexend  font-bold  text-black-fauv'>
												Equipamento
											</p>
											<p className='lexend mt-2   text-black-fauv'>
												{data.equipmentName}
											</p>
										</div>
										<div className='mr-auto'>
											<p className='lexend  font-bold  text-black-fauv'>
												Data da Primeira Amostra
											</p>
											<p className='lexend mt-2   text-black-fauv'>
												{data.initDate}
											</p>
										</div>
										<div className='mr-auto'>
											<p className='lexend  font-bold  text-black-fauv'>
												Data da Última Amostra
											</p>
											<p className='lexend mt-2 text-black-fauv'>
												{data.endDate}
											</p>
										</div>
										<div className='mr-auto'>
											<p className='lexend  font-bold  text-black-fauv'>
												Status
											</p>
											<p className='lexend mt-2 flex text-black-fauv'>
												{getStatusLabel(data.status)}
											</p>
										</div>
									</div>
									<hr className='border' />
									{data.fmListAk.length > 0 && (
										<div className='flex flex-col gap-2 rounded-lg border-2 border-dashed border-red-fauv bg-red-fauv bg-opacity-5 p-4'>
											<p className='flex font-lexend font-bold text-red-fauv'>
												<RiAlertLine size={22} className='mr-2' /> ALERTAS
											</p>

											<ul className='flex list-inside list-disc flex-wrap gap-4'>
												{data.fmListAk.map((fm, index) => (
													<li
														className='text-lexend list-item text-black-fauv'
														key={`fmAk-${index}`}
													>
														{fm}
													</li>
												))}
											</ul>
										</div>
									)}{' '}
									<div className='flex'>
										<div>
											<p className='lexend  font-bold  text-black-fauv'>
												FM Overview
											</p>
											<p className='lexend mt-2  text-black-fauv'>
												<span className='font-semibold'>AK:</span>&nbsp;
												{data.totalFmAk}&nbsp;&nbsp;
												<span className='font-semibold'>BK:</span>&nbsp;
												{data.totalFmBk}&nbsp;&nbsp;
												<span className='font-semibold'>IO:</span>&nbsp;
												{data.totalFmIo}
											</p>
										</div>
										<div className='mt-auto ml-auto'>
											<Input
												widthClassName='w-52'
												id='fmFilter'
												register={registerFilter}
												placeholder='Filtar Nome'
												searchIcon
												className='mt-auto ml-auto'
												roundedClassName='rounded-lg'
											/>
										</div>
									</div>
									<TableContent
										columns={fmColumns}
										data={filteredFmList}
										onRowClick={onFmClick}
										className='h-96 w-full overflow-auto border-2'
									/>
									<hr className='border' />
									<div className='flex'>
										<div>
											<p className='lexend  font-bold  text-black-fauv'>
												PMP Overview
											</p>
											<p className='lexend mt-2  text-black-fauv'>
												<span className='font-semibold'>AK:</span>&nbsp;
												{data.totalPmpAk}&nbsp;&nbsp;
												<span className='font-semibold'>BK:</span>&nbsp;
												{data.totalPmpBk}&nbsp;&nbsp;
												<span className='font-semibold'>IO:</span>&nbsp;
												{data.totalPmpIo}
											</p>
										</div>
										<div className='mt-auto ml-auto'>
											<Input
												widthClassName='w-52'
												id='pmpFilter'
												register={registerFilter}
												placeholder='Filtar Nome'
												searchIcon
												roundedClassName='rounded-lg'
											/>
										</div>
									</div>
									<TableContent
										columns={pmpColumns}
										data={filteredPmpList}
										onRowClick={onPmpClick}
										className='h-96 w-full overflow-auto border-2'
									/>
								</div>
							</div>
						</div>
					)}
				/>
			</div>
			<Dialog
				isOpen={isPmpDialogOpen}
				onClose={onClosePmpDialog}
				widthClass='w-[60rem]'
			>
				<PmpDialog selectedPmp={selectedPmp} />
			</Dialog>
			<Dialog isOpen={isFmDialogOpen} onClose={onCloseFmDialog}>
				<FmDialog selectedFm={selectedFm} />
			</Dialog>
		</>
	)
}
