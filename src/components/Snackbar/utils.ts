import { toast } from 'react-toastify'

export const createSnackbar = (
	type: 'error' | 'success' | 'warning',
	message: string
) => {
	switch (type) {
		case 'error': {
			return toast.error(message)
		}
		case 'success': {
			return toast.success(message)
		}
		case 'warning': {
			return toast.warn(message)
		}
		default: {
			return toast(message)
		}
	}
}
