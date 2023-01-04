import type { ReactElement } from 'react'
import PageHeader from './components/PageHeader'
import SideNav from './components/SideNav'

export function NavigationLayout({
	children
}: React.PropsWithChildren): ReactElement {
	return (
		<div className='flex h-auto min-h-screen bg-gray-fauv'>
			<PageHeader />
			<SideNav />
			<div className='w-full pl-24 pt-20 pr-4 pb-4'>{children}</div>
		</div>
	)
}
