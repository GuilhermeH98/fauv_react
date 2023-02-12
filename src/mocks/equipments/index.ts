import { EQUIPMENTS_URL } from 'pages/Equipments/api'
import { mock } from 'utils/mock'
import equipments from './list.json'

export const handlers = [
	mock('get', EQUIPMENTS_URL, equipments),
	mock('post', EQUIPMENTS_URL),
	mock('put', EQUIPMENTS_URL)
]
