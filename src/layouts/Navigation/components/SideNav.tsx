import type { ReactElement } from 'react'
import { ActivityIcon } from '../icons/ActivityIcon'
import { BarChartIcon } from '../icons/BarChartIcon'
import { ClipboardIcon } from '../icons/ClipboardIcon'
import { IndustyIcon } from '../icons/IndustyIcon'
import { PowerIcon } from '../icons/PowerIcon'
import { SendIcon } from '../icons/SendIcon'
import { SettingsIcon } from '../icons/SettingsIcon'

export default function SideNav(): ReactElement {
	return (
		<nav className='fixed bottom-0 left-0 top-12 w-24 p-4 sm:top-16 '>
			<div className='flex h-full flex-col justify-center gap-10 rounded-lg bg-white shadow-nav '>
				<IndustyIcon />
				<SendIcon />
				<BarChartIcon />
				<ClipboardIcon />
				<ActivityIcon />
				<SettingsIcon />
				<PowerIcon />
			</div>
		</nav>
	)
}
