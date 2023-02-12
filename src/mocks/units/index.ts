import { UNITS_URL } from 'pages/Units/api'
import { mock } from 'utils/mock'
import units from './list.json'

export const handlers = [
	mock('get', UNITS_URL, units),
	mock('post', UNITS_URL),
	mock('put', UNITS_URL)
]
