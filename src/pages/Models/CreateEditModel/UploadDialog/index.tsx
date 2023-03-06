import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import type { ReactElement } from 'react'
import { RiUploadCloud2Line } from 'react-icons/ri'
import type { IUploadDialogProperties } from './types'

export function UploadDialog({
	isOpen,
	onClose
}: IUploadDialogProperties): ReactElement | null {
	if (!isOpen) {
		return null
	}

	return (
		<Dialog
			isOpen={isOpen}
			onClose={onClose}
			heightClass='h-[28rem]'
			widthClass='w-[55rem]'
		>
			<div className='flex flex-1 flex-col '>
				<div className='flex'>
					<div className='relative my-auto  mr-auto font-inter text-lg  font-bold '>
						Upload DMO/CSV
					</div>
					<Button disabled> Enviar arquivos</Button>
				</div>

				<hr className='my-4 border-bluishgray-fauv' />
				<div className='col flex flex-1 gap-6'>
					<div className='flex flex-1  flex-col rounded-lg bg-gray-fauv'>
						<RiUploadCloud2Line
							size={60}
							className='mx-auto mt-auto text-blue-fauv'
						/>
						<p className='mx-auto mt-8 font-inter  font-semibold'>
							Faça o upload de um arquivo DMO
						</p>
						<Button className='mx-auto mb-auto mt-4 w-fit'> Upload DMO</Button>
					</div>

					<div className='flex flex-1  flex-col rounded-lg bg-gray-fauv'>
						<RiUploadCloud2Line
							size={60}
							className='mx-auto mt-auto text-blue-fauv'
						/>
						<p className='mx-auto mt-8 font-inter  font-semibold'>
							Faça o upload de um arquivo CSV
						</p>
						<Button disabled className='mx-auto mb-auto mt-4 w-fit'>
							Upload CSV
						</Button>
					</div>
				</div>
			</div>
		</Dialog>
	)
}
