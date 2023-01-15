import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import type { INavigationIconProperties } from './types'

export function ActivityIcon({
	currentPath
}: INavigationIconProperties): ReactElement {
	return (
		<Link to='/wip' className='mx-auto cursor-pointer'>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M22 12H18L15 21L9 3L6 12H2'
					stroke={`${currentPath === '/wip' ? '#2274AC' : '#A0ACB4'} `}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</Link>
	)
}
