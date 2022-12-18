import type React from 'react'
import type { ReactElement } from 'react'
import { ActivityIcon } from './icons/ActivityIcon'
import { BarChartIcon } from './icons/BarChartIcon'
import { BellIcon } from './icons/BellIcon'
import { ClipboardIcon } from './icons/ClipboardIcon'
import { IndustyIcon } from './icons/IndustyIcon'
import { PowerIcon } from './icons/PowerIcon'
import { SendIcon } from './icons/SendIcon'
import { SettingsBlueIcon } from './icons/SettingsBlueIcon'
import { SettingsIcon } from './icons/SettingsIcon'

export function NavigationLayout({
	children
}: React.PropsWithChildren): ReactElement {
	return (
		<div className='flex h-auto min-h-screen bg-grey-fauv'>
			<div className='fixed flex h-12 w-full content-center justify-end  bg-white sm:h-16'>
				<BellIcon />
				<SettingsBlueIcon />
			</div>
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

			<div className='pl-24 pt-12 sm:pt-16'>{children}</div>
		</div>
	)
}
