import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import type { INavigationIconProperties } from './types'

export function BarChartIcon({
	currentPath
}: INavigationIconProperties): ReactElement {
	return (
		<Link to='/statisticPreview' className='mx-auto cursor-pointer'>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18 20V10'
					stroke={`${
						currentPath === '/statisticPreview' || currentPath === '/statistic'
							? '#2274AC'
							: '#A0ACB4'
					} `}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12 20V4'
					stroke={`${
						currentPath === '/statisticPreview' || currentPath === '/statistic'
							? '#2274AC'
							: '#A0ACB4'
					} `}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6 20V14'
					stroke={`${
						currentPath === '/statisticPreview' || currentPath === '/statistic'
							? '#2274AC'
							: '#A0ACB4'
					} `}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</Link>
	)
}
