import { UNITS_URL } from 'pages/Units/api'
import { mock } from 'utils/mock'
import units from './list.json'

export const handlers = [
	mock('get', UNITS_URL, units),
	mock('post', UNITS_URL, {
		id: 1,
		name: 'Nova unidade America do Sul',
		active: true
	}),
	mock('put', UNITS_URL, {
		id: 1,
		name: 'Nova unidade America do Sul',
		active: true
	})
]
