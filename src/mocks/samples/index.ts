import { SAMPLES_URL } from 'pages/Samples/api'
import { mock } from 'utils/mock'
import samples from './list.json'
import sample from './upload.json'

export const handlers = [
	mock('get', SAMPLES_URL, samples),
	mock('post', SAMPLES_URL, sample),
	mock('delete', `${SAMPLES_URL}/*`)
]
