import Button from 'components/Buttons/Button'
import type { ReactElement } from 'react'
import type { IDialogHeaderProperties } from './types'

export function DialogHeader({
	title,
	onHeaderClick
}: IDialogHeaderProperties): ReactElement {
	return (
		<div className='flex justify-between '>
			<span className='my-auto font-inter text-lg font-bold'>{title}</span>
			{onHeaderClick && <Button onClick={onHeaderClick}>Salvar</Button>}
		</div>
	)
}
