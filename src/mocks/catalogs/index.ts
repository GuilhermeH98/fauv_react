import { CATALOGS_URL } from 'pages/Catalogs/api'
import { createHandlers } from 'utils/mock'
import catalogs from './list.json'

export const handlers = createHandlers(CATALOGS_URL, catalogs)
