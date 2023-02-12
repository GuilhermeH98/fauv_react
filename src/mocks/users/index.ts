import { USERS_URL } from 'pages/Users/api'
import { mock } from 'utils/mock'
import users from './list.json'

export const handlers = [
	mock('get', USERS_URL, users),
	mock('post', USERS_URL),
	mock('put', USERS_URL)
]
