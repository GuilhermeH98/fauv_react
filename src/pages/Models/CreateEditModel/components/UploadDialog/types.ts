import type { IModelPreview } from 'pages/Models/api'

export interface IUploadDialogProperties {
	isOpen: boolean
	onClose: () => void
	onUploadSuccess: (previewModel: IModelPreview) => void
}

export interface IUploadValues {
	dmoFile: File
	csvFile: File
}
