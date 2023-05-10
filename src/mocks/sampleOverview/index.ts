import { SAMPLE_OVERVIEW_URL } from 'pages/SampleOverview/api'
import { mock } from 'utils/mock'
import sampleOverview from './list.json'

export const handlers = [
	mock('get', `${SAMPLE_OVERVIEW_URL}/*`, sampleOverview)
]
