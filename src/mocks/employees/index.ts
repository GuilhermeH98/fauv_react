import { EMPLOYEES_URL } from 'pages/Employees/api'
import { mock } from 'utils/mock'
import employees from './list.json'

export const handlers = [
	mock('get', EMPLOYEES_URL, employees),
	mock('post', EMPLOYEES_URL),
	mock('put', EMPLOYEES_URL)
]
