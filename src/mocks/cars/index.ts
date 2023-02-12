import { CARS_URL } from 'pages/Cars/api'
import { mock } from 'utils/mock'
import cars from './list.json'

export const handlers = [
	mock('get', CARS_URL, cars),
	mock('post', CARS_URL),
	mock('put', CARS_URL)
]
