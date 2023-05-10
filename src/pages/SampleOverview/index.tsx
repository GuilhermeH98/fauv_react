import { Query } from 'components/Query'
import TableContent from 'components/Table/components/TableContent'
import { RiAlertLine, RiArrowGoBackLine } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import { useSampleOverviewQuery } from './api'
import { fmColumns } from './fmColumns'
import { pmpColumns } from './pmpColumns'
import { getStatusLabel } from './utils'

export function SampleOverview() {
	const { sampleId } = useParams() as Record<string, string>

	const query = useSampleOverviewQuery(sampleId)()

	const navigate = useNavigate()

	return (
		<div className='flex h-auto min-h-screen bg-gray-fauv p-4'>
			<Query
				query={query}
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
										<p className='lexend  font-bold  text-black-fauv'>Status</p>
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
								</div>
								<TableContent
									columns={fmColumns}
									data={data.fmOverviewList}
									className='max-h-96 w-full overflow-auto border-2'
								/>
								<hr className='border' />
								<div className='flex'>
									<div>
										<div className='mr-auto'>
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
									</div>
								</div>
								<TableContent
									columns={pmpColumns}
									data={data.pmpOverviewList}
									className='max-h-96 w-full overflow-auto border-2'
								/>
							</div>
						</div>
					</div>
				)}
			/>
		</div>
	)
}
