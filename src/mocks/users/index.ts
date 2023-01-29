import { USERS_URL } from 'pages/Users/api'
import { mock } from 'utils/mock'
import users from './list.json'

export const handlers = [
	mock('get', USERS_URL, users),
	mock('post', USERS_URL, {
		id: 1,
		vwId: 1,
		name: 'Jose da Silva',
		roles: [{ id: 1, name: 'administrator', active: true }],
		active: true
	}),
	mock('put', USERS_URL, {
		id: 1,
		vwId: '18787878',
		name: 'Jose da Silva',
		roles: [{ id: 1, name: 'administrator', active: true }],
		active: true
	})
]
