import type { ReactElement } from 'react'
import FauvTitle from './components/FauvTitle'
import Footer from './components/Footer'
import type { IAuthenticationProperties } from './types'

export function AuthenticationLayout({
	subtitle,
	children
}: React.PropsWithChildren<IAuthenticationProperties>): ReactElement {
	return (
		<>
			<div className='flex min-h-screen bg-grey-fauv'>
				<form className='z-10 m-auto flex flex-col items-center gap-6 lg:gap-8'>
					<FauvTitle subtitle={subtitle} />
					{children}
				</form>
			</div>
			<Footer />
		</>
	)
}
