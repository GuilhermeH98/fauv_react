import { Status } from 'pages/Samples/api'
import { ToleranceTypeStatus } from './api'

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

export function getToleranceStatusColor(status: ToleranceTypeStatus) {
	switch (status) {
		case ToleranceTypeStatus.AK: {
			return 'text-red-fauv'
		}
		case ToleranceTypeStatus.BK: {
			return 'text-yellow-fauv'
		}
		default: {
			return 'text-green-fauv'
		}
	}
}
