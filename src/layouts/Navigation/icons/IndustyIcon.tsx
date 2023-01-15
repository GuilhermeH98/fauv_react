import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import type { INavigationIconProperties } from './types'

export function IndustyIcon({
	currentPath
}: INavigationIconProperties): ReactElement {
	return (
		<Link to='/units' className='mx-auto mt-auto cursor-pointer'>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_324_1295)'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M1.96325 0.779548C2.00217 0.338394 2.37166 0 2.81461 0H9.99101C10.4244 0 10.7892 0.324355 10.8398 0.754807L12.0036 10.6466L17.4401 7.83395C18.0661 7.51005 18.7931 8.04053 18.6755 8.73556L18.3005 10.953L22.6881 8.79112C23.2561 8.51124 23.9205 8.92463 23.9205 9.55777V23.0659C23.9205 23.5379 23.5379 23.9205 23.0659 23.9205H22.4205H2.15307H1.49928H0.854737C0.353129 23.9205 -0.0407268 23.4905 0.003374 22.9907L1.96325 0.779548ZM3.58169 1.69242L3.24065 5.55746H9.70077L9.24605 1.69242H3.58169ZM1.76966 22.2281L3.09131 7.24987H9.77684V6.20398L10.1911 9.72533L11.0534 22.2281H2.15307H1.76966ZM12.7499 22.2281L12.0798 12.5127L16.7269 10.1084L16.3586 12.2861C16.2424 12.9735 16.9537 13.5034 17.5791 13.1952L22.2281 10.9045V22.2281H12.7499ZM4.5506 16.6722H3.70439V17.5184V22.1493H5.3968V18.3646H7.40919V22.1493H9.10161V17.5184V16.6722H8.2554H4.5506Z'
						fill={`${currentPath === '/units' ? '#2274AC' : '#A0ACB4'} `}
					/>
				</g>
				<defs>
					<clipPath id='clip0_324_1295'>
						<rect width='24' height='24' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</Link>
	)
}
