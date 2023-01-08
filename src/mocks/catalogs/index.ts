import { CATALOGS_URL } from 'pages/Catalogs/api'
import { mock } from 'utils/mock'
import catalogs from './list.json'

export const handlers = [
	mock('get', CATALOGS_URL, catalogs),
	mock('post', CATALOGS_URL, { id: 1, name: 'New Catalog', isActive: true }),
	mock('put', CATALOGS_URL, { id: 1, name: 'New Catalog', isActive: true })
]
