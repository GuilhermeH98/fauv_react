import type { ReactElement } from 'react'

export default function PageTop({
	children
}: React.HTMLAttributes<HTMLButtonElement>): ReactElement {
	return (
		<div className='align mb-2 flex h-18 w-full items-center'>{children}</div>
	)
}
