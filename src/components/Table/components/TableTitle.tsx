import type { ITableTitleProperties } from '../types'

function TableTitle({ dataLength, title }: ITableTitleProperties): JSX.Element {
	return (
		<div className='flex h-16 rounded-t-lg  border-b border-bluishgray-fauv bg-white'>
			<div className='mr-6 py-5 pl-6 font-bold text-black-fauv'>{title}</div>
			<hr className='h-full border-r border-bluishgray-fauv' />
			<div className='ml-6 py-5 font-inter text-sm font-light leading-6 text-black-fauv'>
				{`${dataLength < 10 ? `0${dataLength}` : dataLength}  ${title}`}
			</div>
		</div>
	)
}

export default TableTitle
