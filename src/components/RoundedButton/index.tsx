import type { ReactElement } from 'react'

export default function RoundedButton({
	children
}: React.HTMLAttributes<HTMLButtonElement>): ReactElement {
	return (
		<button
			type='submit'
			className='mb-4 h-11 w-72 rounded-btn bg-blue-fauv font-lexend text-white shadow-btn'
		>
			{children}
		</button>
	)
}
