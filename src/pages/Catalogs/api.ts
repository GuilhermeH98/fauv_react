import { makeMutation, makeQuery } from 'utils/api'
import { z } from 'zod'

export const CATALOGS_URL = 'catalog'

export const Catalog = z.object({
	id: z.number(),
	name: z.string(),
	active: z.boolean()
})
export type ICatalog = z.infer<typeof Catalog>

export const CatalogPayload = Catalog.partial({ id: true })

export const useCatalogsQuery = makeQuery(CATALOGS_URL, z.array(Catalog))

export const useCatalogMutation = makeMutation(CATALOGS_URL, CatalogPayload)
