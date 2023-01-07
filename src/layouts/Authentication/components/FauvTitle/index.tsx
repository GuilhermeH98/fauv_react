import type { ReactElement } from 'react'

interface IFauvTitleProperties {
	subtitle: string | null | undefined
}

export default function FauvTitle({
	subtitle
}: IFauvTitleProperties): ReactElement {
	return (
		<>
			<h1 className='ml-3 font-lexend text-xl-fauv font-medium leading-20 tracking-login text-blue-fauv xl:mb-1'>
				FAUV
			</h1>
			{subtitle && (
				<h3 className='font-lexend text-base font-medium leading-5 text-blue-fauv'>
					{subtitle}
				</h3>
			)}
		</>
	)
}
