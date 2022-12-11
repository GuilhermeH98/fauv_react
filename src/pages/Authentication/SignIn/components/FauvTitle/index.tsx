import type { ReactElement } from 'react'

interface IFauvTitleProperties {
	subTitle: string | undefined
}

export default function FauvTitle({
	subTitle
}: IFauvTitleProperties): ReactElement {
	return (
		<>
			<h1 className='mb-1 font-lexend text-xl-fauv font-medium leading-20 tracking-login text-blue-fauv'>
				FAUV
			</h1>
			{!!subTitle && (
				<h3 className='font-lexend text-base font-medium leading-5 text-blue-fauv'>
					{subTitle}
				</h3>
			)}
		</>
	)
}
