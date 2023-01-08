import Button from 'components/Buttons/Button'
import type { ReactElement } from 'react'
import type { IDialogHeaderProperties } from './types'

export function DialogHeader({
	title,
	isFormDialog,
	disabledSubmit
}: IDialogHeaderProperties): ReactElement {
	return (
		<div className='flex justify-between '>
			<span className='relative my-auto px-3 font-inter text-lg   font-bold after:absolute after:-bottom-[0.375rem] after:left-0 after:right-0 after:h-[0.125rem] after:bg-blue-fauv'>
				{title}
			</span>
			{isFormDialog && (
				<Button isSubmit disabled={disabledSubmit}>
					Salvar
				</Button>
			)}
		</div>
	)
}
