import type { ReactElement } from 'react'
import PageHeader from './components/PageHeader'
import SideNav from './components/SideNav'

export function NavigationLayout({
	children
}: React.PropsWithChildren): ReactElement {
	return (
		<div className='flex h-auto min-h-screen overflow-auto bg-gray-fauv'>
			<PageHeader />
			<SideNav />
			<div className='flex h-screen w-full flex-col overflow-auto pl-24 pt-16 pr-4 pb-4 sm:pt-20'>
				{children}
			</div>
		</div>
	)
}
