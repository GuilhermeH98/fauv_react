import { Status } from 'pages/Samples/api'

export function getStatusLabel(status: Status) {
	switch (status) {
		case Status.SUCCESS: {
			return 'Sucesso'
		}
		case Status.ERROR: {
			return 'Erro'
		}
		default: {
			return 'Alerta'
		}
	}
}
