import { formatNumber, truncate } from 'utils/format'
import type { IWidthVariants, PercentageCardProperties } from './types'

// Tailwindcss doesnt support dynamic classes, so we need to create this object
export const widthVariants: IWidthVariants = {
	'0': 'w-[0%]',
	'1': 'w-[1%]',
	'2': 'w-[2%]',
	'3': 'w-[3%]',
	'4': 'w-[4%]',
	'5': 'w-[5%]',
	'6': 'w-[6%]',
	'7': 'w-[7%]',
	'8': 'w-[8%]',
	'9': 'w-[9%]',
	'10': 'w-[10%]',
	'11': 'w-[11%]',
	'12': 'w-[12%]',
	'13': 'w-[13%]',
	'14': 'w-[14%]',
	'15': 'w-[15%]',
	'16': 'w-[16%]',
	'17': 'w-[17%]',
	'18': 'w-[18%]',
	'19': 'w-[19%]',
	'20': 'w-[20%]',
	'21': 'w-[21%]',
	'22': 'w-[22%]',
	'23': 'w-[23%]',
	'24': 'w-[24%]',
	'25': 'w-[25%]',
	'26': 'w-[26%]',
	'27': 'w-[27%]',
	'28': 'w-[28%]',
	'29': 'w-[29%]',
	'30': 'w-[30%]',
	'31': 'w-[31%]',
	'32': 'w-[32%]',
	'33': 'w-[33%]',
	'34': 'w-[34%]',
	'35': 'w-[35%]',
	'36': 'w-[36%]',
	'37': 'w-[37%]',
	'38': 'w-[38%]',
	'39': 'w-[39%]',
	'40': 'w-[40%]',
	'41': 'w-[41%]',
	'42': 'w-[42%]',
	'43': 'w-[43%]',
	'44': 'w-[44%]',
	'45': 'w-[45%]',
	'46': 'w-[46%]',
	'47': 'w-[47%]',
	'48': 'w-[48%]',
	'49': 'w-[49%]',
	'50': 'w-[50%]',
	'51': 'w-[51%]',
	'52': 'w-[52%]',
	'53': 'w-[53%]',
	'54': 'w-[54%]',
	'55': 'w-[55%]',
	'56': 'w-[56%]',
	'57': 'w-[57%]',
	'58': 'w-[58%]',
	'59': 'w-[59%]',
	'60': 'w-[60%]',
	'61': 'w-[61%]',
	'62': 'w-[62%]',
	'63': 'w-[63%]',
	'64': 'w-[64%]',
	'65': 'w-[65%]',
	'66': 'w-[66%]',
	'67': 'w-[67%]',
	'68': 'w-[68%]',
	'69': 'w-[69%]',
	'70': 'w-[70%]',
	'71': 'w-[71%]',
	'72': 'w-[72%]',
	'73': 'w-[73%]',
	'74': 'w-[74%]',
	'75': 'w-[75%]',
	'76': 'w-[76%]',
	'77': 'w-[77%]',
	'78': 'w-[78%]',
	'79': 'w-[79%]',
	'80': 'w-[80%]',
	'81': 'w-[81%]',
	'82': 'w-[82%]',
	'83': 'w-[83%]',
	'84': 'w-[84%]',
	'85': 'w-[85%]',
	'86': 'w-[86%]',
	'87': 'w-[87%]',
	'88': 'w-[88%]',
	'89': 'w-[89%]',
	'90': 'w-[90%]',
	'91': 'w-[91%]',
	'92': 'w-[92%]',
	'93': 'w-[93%]',
	'94': 'w-[94%]',
	'95': 'w-[95%]',
	'96': 'w-[96%]',
	'97': 'w-[97%]',
	'98': 'w-[98%]',
	'99': 'w-[99%]',
	'100': 'w-[100%]'
}

export function PercentageCard({
	isFm,
	io,
	bk,
	ak,
	totalIo,
	totalBk,
	totalAk
}: PercentageCardProperties) {
	const [ioWidth, bkWidth, akWidth] = [
		(truncate(io) * 100).toString(),
		(truncate(bk) * 100).toString(),
		(truncate(ak) * 100).toString()
	]

	return (
		<div className='flex w-1/2 flex-col overflow-auto rounded-lg bg-white p-4 '>
			<h3 className=' font-lexend text-xl font-bold text-blue-fauv'>
				{isFm ? 'FM' : 'PMP'} status porcentagem (%)
			</h3>
			<hr className='mt-2 mb-2 border-bluishgray-fauv' />
			<div className='mt-auto flex'>
				<div
					className={`h-12 ${widthVariants[ioWidth]} ${
						bkWidth === '0' && akWidth === '0'
							? 'rounded-lg'
							: 'rounded-tl-lg rounded-bl-lg'
					} bg-green-fauv`}
				/>
				<div
					className={`h-12 ${widthVariants[bkWidth]} ${
						ioWidth === '0' && akWidth === '0'
							? 'rounded-lg'
							: 'rounded-tl-lg rounded-bl-lg'
					} border-x-2  border-white bg-yellow-fauv`}
				/>
				<div
					className={`h-12  ${widthVariants[akWidth]} ${
						ioWidth === '0' && bkWidth === '0'
							? 'rounded-lg'
							: 'rounded-tl-lg rounded-bl-lg'
					} rounded-tr-lg rounded-br-lg bg-red-fauv`}
				/>
			</div>
			<div className='my-auto flex justify-between'>
				<div className='flex flex-col'>
					<p className='font-lg text-center font-lexend'>
						<span className='text-xl   text-green-fauv '>IO </span>
						<span className='text-sm'>Menor ou igual 75% </span>
					</p>
					<p className='mx-auto font-lexend font-bold'>
						{`${totalIo} (${formatNumber(Math.trunc(io * 10_000) / 100)}%)`}
					</p>
				</div>
				<div className='flex flex-col'>
					<p className='font-lg text-center font-lexend '>
						<span className='text-xl   text-yellow-fauv '>BK </span>
						<span className='text-sm'>Maior 75 % e menor 100%</span>
					</p>
					<p className='mx-auto font-lexend  font-bold'>
						{`${totalBk} (${formatNumber(Math.trunc(bk * 10_000) / 100)}%)`}
					</p>
				</div>
				<div className='flex flex-col'>
					<p className='font-lg text-center font-lexend'>
						<span className='text-xl   text-red-fauv '>AK</span>
						<span className='text-sm'>Maior 100%</span>
					</p>
					<p className='mx-auto font-lexend font-bold'>
						{`${totalAk} (${formatNumber(Math.trunc(ak * 10_000) / 100)}%)`}
					</p>
				</div>
			</div>
		</div>
	)
}
