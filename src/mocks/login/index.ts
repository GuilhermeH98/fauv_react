import { LOGIN_URL } from 'pages/SignIn/api'
import { REGISTER_URL } from 'pages/SignUp/api'
import { mock } from 'utils/mock'
import credentials from './list.json'

export const handlers = [
	mock('post', LOGIN_URL, credentials),
	mock('post', REGISTER_URL)
]
