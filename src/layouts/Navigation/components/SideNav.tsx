import type { ReactElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ActivityIcon } from '../icons/ActivityIcon'
import { BarChartIcon } from '../icons/BarChartIcon'
import { ClipboardIcon } from '../icons/ClipboardIcon'
import { IndustyIcon } from '../icons/IndustyIcon'
import { PowerIcon } from '../icons/PowerIcon'
import { SendIcon } from '../icons/SendIcon'

export default function SideNav(): ReactElement {
	const navigate = useNavigate()
	const location = useLocation()

	function onLogout(): void {
		localStorage.removeItem('token')
		navigate('/')
	}

	return (
		<nav className='fixed bottom-0 left-0 top-12 w-24 p-4 sm:top-16 '>
			<div className='flex h-full flex-col justify-center gap-10 overflow-auto rounded-lg bg-white shadow-nav '>
				<IndustyIcon currentPath={location.pathname} />
				<SendIcon />
				<BarChartIcon currentPath={location.pathname} />
				<ClipboardIcon currentPath={location.pathname} />
				<ActivityIcon currentPath={location.pathname} />
				<PowerIcon onClick={onLogout} />
			</div>
		</nav>
	)
}
