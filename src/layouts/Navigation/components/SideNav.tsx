import type { ReactElement } from 'react'
import {
	RiCarLine,
	RiCarWashingLine,
	RiGroupLine,
	RiMicroscopeLine,
	RiSearchLine
} from 'react-icons/ri'
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
				{/* <Link to='/profile' className='mx-auto mt-auto '>
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
				</Link> */}

				<Link to='/cars' className='mx-auto mt-auto '>
					<RiCarLine
						className={` text-icon  ${
							location.pathname === '/cars'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						}`}
					/>
				</Link>
				{/* <IndustyIcon currentPath={location.pathname} /> */}
				<Link to='/equipments' className='mx-auto '>
					<RiMicroscopeLine
						className={`text-icon ${
							location.pathname === '/equipments'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						} `}
					/>
				</Link>

				<Link to='/users' className='mx-auto '>
					<RiGroupLine
						className={`text-icon ${
							location.pathname === '/users'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						} `}
					/>
				</Link>
				{/* <Link to='/employees' className='mx-auto'>
					<RiContactsLine
						className={`text-icon ${
							location.pathname === '/employees'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						} `}
					/>
				</Link> */}
				{/* <Link to='/statisticManagement' className='mx-auto'>
					<RiListSettingsLine
						className={`text-icon ${
							location.pathname === '/statisticManagement'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						} `}
					/>
				</Link> */}

				<Link to='/models' className='mx-auto'>
					<RiCarWashingLine
						className={` text-icon  ${
							location.pathname === '/models'
								? 'text-blue-fauv'
								: 'text-gray-fauv-3'
						}`}
					/>
				</Link>

				<Link to='/samples' className='mx-auto'>
					<RiSearchLine
						className={`text-icon ${
							location.pathname === '/samples'
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
