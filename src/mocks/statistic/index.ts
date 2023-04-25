import { STATISTIC_URL } from 'pages/Statistic/api'
import { mock } from 'utils/mock'
import statistic from './list.json'

export const handlers = [
	mock('get', `${STATISTIC_URL}/pmp/*`, statistic),
	mock('get', `${STATISTIC_URL}/fm/*`, statistic)
]
