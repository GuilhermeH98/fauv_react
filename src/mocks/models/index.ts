import { MODELS_URL } from 'pages/Models/api'
import { mock } from 'utils/mock'
import models from './list.json'

export const handlers = [
	mock('get', MODELS_URL, models),
	mock('post', MODELS_URL),
	mock('put', MODELS_URL)
]
