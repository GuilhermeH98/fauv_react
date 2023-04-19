import { getIsAdmin } from 'components/AuthWrapper/utils'
import type { ReactElement } from 'react'
import {
	RiCarLine,
	RiCarWashingLine,
	RiContactsLine,
	RiGroupLine,
	RiMicroscopeLine
} from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { IndustyIcon } from '../icons/IndustyIcon'

export default function PageHeader(): ReactElement {
	const location = useLocation()

	const isAdmin = getIsAdmin()

	return (
		<header className='fixed z-50 flex h-12 w-full content-center gap-10 border-b border-bluishgray-fauv bg-white sm:h-16  '>
			<span className='relative left-7 my-auto font-lexend  text-3xl font-semibold  tracking-[.175em] text-blue-fauv'>
				FAUV
			</span>

			{isAdmin && (
				<>
					<Link to='/models' className='my-auto ml-auto'>
						<RiCarWashingLine
							className={` text-icon  ${
								location.pathname === '/models'
									? 'text-blue-fauv'
									: 'text-gray-fauv-3'
							}`}
						/>
					</Link>
					<Link to='/cars' className='my-auto '>
						<RiCarLine
							className={` text-icon  ${
								location.pathname === '/cars'
									? 'text-blue-fauv'
									: 'text-gray-fauv-3'
							}`}
						/>
					</Link>
					<IndustyIcon currentPath={location.pathname} />
					<Link to='/equipments' className='my-auto '>
						<RiMicroscopeLine
							className={`text-icon ${
								location.pathname === '/equipments'
									? 'text-blue-fauv'
									: 'text-gray-fauv-3'
							} `}
						/>
					</Link>

					<Link to='/users' className='my-auto '>
						<RiGroupLine
							className={`text-icon ${
								location.pathname === '/users'
									? 'text-blue-fauv'
									: 'text-gray-fauv-3'
							} `}
						/>
					</Link>
					<Link to='/employees' className='my-auto mr-auto'>
						<RiContactsLine
							className={`text-icon ${
								location.pathname === '/employees'
									? 'text-blue-fauv'
									: 'text-gray-fauv-3'
							} `}
						/>
					</Link>
					{/* <RiMailSettingsLine className='my-auto mr-auto cursor-pointer text-icon text-gray-fauv-3' /> */}
					{/* <RiListSettingsLine className='my-auto cursor-pointer text-icon text-gray-fauv-3' />
					<ClipboardIcon currentPath={location.pathname} /> */}
				</>
			)}
		</header>
	)
}
