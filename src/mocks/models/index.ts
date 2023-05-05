import { MODELS_URL, MODEL_PREVIEW_URL } from 'pages/Models/api'
import { mock } from 'utils/mock'
import models from './list.json'
import preview from './preview.json'

export const handlers = [
	mock('get', MODELS_URL, models),
	mock('post', MODELS_URL),
	mock('put', MODELS_URL),
	mock('post', MODEL_PREVIEW_URL, preview),
	mock('delete', `${MODELS_URL}/*`)
]
