import type { ReactElement } from 'react'
import FauvTitle from './components/FauvTitle'
import Footer from './components/Footer'
import type { IAuthenticationProperties } from './types'

export function AuthenticationLayout({
	subtitle,
	children,
	onSubmit
}: React.PropsWithChildren<IAuthenticationProperties>): ReactElement {
	return (
		<div className='flex min-h-screen flex-col bg-gray-fauv'>
			<form
				className='z-10   mx-auto mt-auto flex flex-col items-center gap-6  xl:gap-8'
				onSubmit={onSubmit}
			>
				<FauvTitle subtitle={subtitle} />
				{children}
			</form>
			<Footer />
		</div>
	)
}
