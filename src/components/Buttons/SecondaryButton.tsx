import type { ReactElement } from 'react'

export default function SecondaryButton({
	children
}: React.HTMLAttributes<HTMLButtonElement>): ReactElement {
	return (
		<button
			type='submit'
			className='mb-4 h-11 w-72 rounded-btn-2 bg-blue-fauv font-lexend text-white shadow-btn'
		>
			{children}
		</button>
	)
}
