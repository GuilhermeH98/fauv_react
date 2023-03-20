import type { ISample } from '../api'

export interface IUploadDialogProperties {
	isOpen: boolean
	onClose: () => void
	onUploadSuccess: (previewModel: ISample) => void
}

export interface IUploadValues {
	dmoFile: File
}
