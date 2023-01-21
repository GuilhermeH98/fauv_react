import type { ReactElement } from 'react'
import {
	RiCarLine,
	RiGroupLine,
	RiListSettingsLine,
	RiMailSettingsLine,
	RiMicroscopeLine
} from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { ClipboardIcon } from '../icons/ClipboardIcon'
import { IndustyIcon } from '../icons/IndustyIcon'

export default function PageHeader(): ReactElement {
	const location = useLocation()

	return (
		<header className='fixed flex h-12 w-full content-center gap-10 border-b border-bluishgray-fauv bg-white sm:h-16  '>
			<span className='relative left-7 my-auto font-lexend  text-3xl font-semibold  tracking-[.175em] text-blue-fauv'>
				FAUV
			</span>
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

			<RiCarLine
				className={`my-auto cursor-pointer text-icon  ${
					location.pathname === '/users' ? 'text-blue-fauv' : 'text-gray-fauv-3'
				}`}
			/>

			<RiGroupLine
				className={`my-auto cursor-pointer text-icon  ${
					location.pathname === '/users' ? 'text-blue-fauv' : 'text-gray-fauv-3'
				}`}
			/>
			<RiMailSettingsLine
				className={`my-auto cursor-pointer text-icon  ${
					location.pathname === '/users' ? 'text-blue-fauv' : 'text-gray-fauv-3'
				}`}
			/>
			<RiListSettingsLine
				className={`my-auto cursor-pointer text-icon  ${
					location.pathname === '/users' ? 'text-blue-fauv' : 'text-gray-fauv-3'
				}`}
			/>
			<ClipboardIcon currentPath={location.pathname} />
		</header>
	)
}
