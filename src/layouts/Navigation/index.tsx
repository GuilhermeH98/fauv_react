import type { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from './components/PageHeader'
import SideNav from './components/SideNav'

export function NavigationLayout({
	children
}: React.PropsWithChildren): ReactElement {
	const location = useLocation()
	const onStatisticPage = location.pathname.includes('/statistic/')

	return (
		<div className='flex h-auto min-h-screen overflow-auto bg-gray-fauv text-black'>
			<PageHeader />
			<SideNav />
			<div
				className={`flex h-screen w-full flex-col overflow-auto ${
					onStatisticPage ? 'overflow-y-scroll' : ''
				} pl-24 pt-16 pr-4 pb-4 sm:pt-20`}
			>
				{children}
			</div>
		</div>
	)
}
