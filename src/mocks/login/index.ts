import { LOGIN_URL } from 'pages/SignIn/api'
import { mock } from 'utils/mock'
import credentials from './list.json'

export const handlers = [mock('post', LOGIN_URL, credentials)]
