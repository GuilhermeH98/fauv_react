import type { ReactElement } from 'react'
import { RiDraftLine, RiSearchLine, RiUser3Line } from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BarChartIcon } from '../icons/BarChartIcon'
import { PowerIcon } from '../icons/PowerIcon'

export default function SideNav(): ReactElement {
	const navigate = useNavigate()
	const location = useLocation()

	function onLogout(): void {
		localStorage.removeItem('token')
		localStorage.removeItem('roles')
		navigate('/')
	}

	return (
		<nav className='fixed bottom-0 left-0 top-12 w-24 p-4 sm:top-16 '>
			<div className='flex h-full flex-col justify-center gap-10 overflow-auto rounded-lg bg-white shadow-nav '>
				<Link to='/profile' className='mx-auto mt-auto '>
					<RiUser3Line
						className={`text-icon ${
							location.pathname === '/profile'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						} `}
					/>
				</Link>
				<Link to='/carMapping' className='mx-auto '>
					<RiDraftLine
						className={`text-icon ${
							location.pathname === '/carMapping'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						} `}
					/>
				</Link>

				<Link to='/sample' className='mx-auto '>
					<RiSearchLine
						className={`text-icon ${
							location.pathname === '/sample'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						} `}
					/>
				</Link>

				<BarChartIcon currentPath={location.pathname} />
				<PowerIcon onClick={onLogout} />
			</div>
		</nav>
	)
}
