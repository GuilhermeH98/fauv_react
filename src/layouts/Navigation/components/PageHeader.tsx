import { BellIcon } from 'layouts/Navigation/icons/BellIcon'
import { SettingsBlueIcon } from 'layouts/Navigation/icons/SettingsBlueIcon'
import type { ReactElement } from 'react'

export default function PageHeader(): ReactElement {
	return (
		<header className='fixed flex h-12 w-full content-center border-b border-bluishgrey-fauv bg-white sm:h-16 '>
			<span className='my-auto ml-7 font-lexend  text-3xl font-semibold  tracking-[.175em] text-blue-fauv'>
				FAUV
			</span>
			<BellIcon />
			<SettingsBlueIcon />
		</header>
	)
}
