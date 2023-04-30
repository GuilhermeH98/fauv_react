import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import { createSnackbar } from 'components/Snackbar/utils'
import type { ReactElement } from 'react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { RiUploadCloud2Line } from 'react-icons/ri'
import { getErrorMessage } from 'utils/error'
import type { ISample } from '../api'
import { useSendFileMutation } from '../api'
import type { IUploadDialogProperties, IUploadValues } from './types'

export function UploadDialog({
	isOpen,
	onClose,
	onUploadSuccess
}: IUploadDialogProperties): ReactElement | null {
	const [dmoFile, setDmoFile] = useState<File | null>(null)

	const { register, handleSubmit, formState } = useForm<IUploadValues>()

	const { isSubmitting } = formState

	const { mutate } = useSendFileMutation()

	const inputDmoReference = useRef<HTMLInputElement>(null)

	function handleDmoButtonClick() {
		if (inputDmoReference.current) {
			inputDmoReference.current.click()
		}
	}

	const handleDmoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDmoFile(event.target.files?.[0] ?? null)
	}

	function onCloseDialog() {
		setDmoFile(null)

		onClose()
	}

	function onSubmit() {
		if (dmoFile) {
			mutate(
				{ dmoFile },
				{
					onSuccess(response: ISample) {
						onUploadSuccess(response)
						onCloseDialog()
						createSnackbar('success', 'Upload com sucesso!')
					},
					onError(error) {
						createSnackbar(
							'error',
							getErrorMessage((error as Error).message) ||
								'Erro ao fazer upload!'
						)
					}
				}
			)
		}
	}

	if (!isOpen) {
		return null
	}

	return (
		<Dialog
			isOpen={isOpen}
			onClose={onCloseDialog}
			heightClass='h-[28rem]'
			widthClass='w-[45rem]'
		>
			<form className='flex flex-1 flex-col ' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex'>
					<div className='relative my-auto  mr-auto font-inter text-lg  font-bold '>
						Upload DMO
					</div>
					<Button disabled={isSubmitting || !dmoFile} isSubmit>
						Enviar arquivo
					</Button>
				</div>

				<hr className='my-4 border-bluishgray-fauv' />
				<div className='col flex flex-1'>
					<div className='flex flex-1 flex-col rounded-lg bg-gray-fauv'>
						<RiUploadCloud2Line
							size={60}
							className='mx-auto mt-auto text-blue-fauv'
						/>
						<p className='mx-auto mt-8 font-inter font-semibold dark:text-black'>
							Faça o upload de um arquivo DMO
						</p>
						<input
							id='dmoFile'
							type='file'
							accept='.dmo,.txt,.csv'
							{...register('dmoFile')}
							ref={inputDmoReference}
							onChange={handleDmoChange}
							className='hidden'
						/>
						{dmoFile && (
							<p className='mx-auto mt-2 font-inter dark:text-black'>
								Arquivo: {dmoFile.name}
							</p>
						)}

						<Button
							onClick={handleDmoButtonClick}
							className='mx-auto mb-auto mt-4 w-fit'
						>
							Upload DMO
						</Button>
					</div>
				</div>
			</form>
		</Dialog>
	)
}
