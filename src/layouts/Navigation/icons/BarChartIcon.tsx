import type { ReactElement } from 'react'

export function BarChartIcon(): ReactElement {
	return (
		<div className='mx-auto cursor-pointer'>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18 20V10'
					stroke='#A0ACB4'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12 20V4'
					stroke='#A0ACB4'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6 20V14'
					stroke='#A0ACB4'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}
