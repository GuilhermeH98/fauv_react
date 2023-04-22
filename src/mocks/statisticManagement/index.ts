import { STATISTIC_CONFIGURATIONS_URL } from 'pages/StatisticManagement/api'
import { mock } from 'utils/mock'
import statisticConfigurations from './list.json'

export const handlers = [
	mock('get', STATISTIC_CONFIGURATIONS_URL, statisticConfigurations),
	mock('put', STATISTIC_CONFIGURATIONS_URL)
]
