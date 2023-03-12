import { Car } from 'pages/Cars/api'
import { makeMutation, makeQuery } from 'utils/api'
import { z } from 'zod'

export const MODELS_URL = 'model'

export enum PointAxis {
	X = 'X',
	Y = 'Y',
	Z = 'Z',
	T = 'T',
	D = 'D'
}

export enum Level {
	LOW = 'LOW',
	MEDIUM = 'MEDIUM',
	HIGH = 'HIGH',
	CRITICAL = 'CRITICAL'
}

export enum CatalogType {
	GRUNDGEOMETRIE = 'GRUNDGEOMETRIE',
	DICHTIGKEIT = 'DICHTIGKEIT',
	SYMMETRIEVERLAUF = 'SYMMETRIEVERLAUF',
	UMRISS_UND_BUNDIGKEIT = 'UMRISS UND BÜNDIGKEIT',
	FMK_PLUS = 'FMK_PLUS'
}

export const NominalAxisCoordinate = z.object({
	id: z.number(),
	name: z.string(),
	lowerTolerance: z.number(),
	higherTolerance: z.number(),
	axis: z.nativeEnum(PointAxis),
	numberId: z.number().nullish(),
	pmpId: z.number().nullish()
})
export type INominalAxisCoordinate = z.infer<typeof NominalAxisCoordinate>

export const Pmp = z.object({
	id: z.number(),
	name: z.string(),
	workingOn: z.nativeEnum(PointAxis),
	x: z.number(),
	y: z.number(),
	z: z.number(),
	numberId: z.number().nullish(),
	active: z.boolean(),
	axisCoordinateList: z.array(NominalAxisCoordinate).nullish()
})
export type IPmp = z.infer<typeof Pmp>

export const FmImpact = z.object({
	id: z.number(),
	info: z.string(),
	numberId: z.number().nullish()
})
export type IFmImpact = z.infer<typeof FmImpact>

export const Fm = z.object({
	id: z.number(),
	name: z.string(),
	higherTolerance: z.number(),
	lowerTolerance: z.number(),
	defaultValue: z.number(),
	axis: z.nativeEnum(PointAxis),
	catalogType: z.nativeEnum(CatalogType),
	pmpList: z.array(Pmp),
	level: z.nativeEnum(Level),
	photo: z.string().nullish(),
	numberId: z.number().nullish(),
	active: z.boolean(),
	fmImpactList: z.array(FmImpact).nullish()
})
export type IFm = z.infer<typeof Fm>

export const FmCreateEdit = Fm.extend({
	pmpList: z.array(z.string())
})
export type IFmCreateEdit = z.infer<typeof FmCreateEdit>

export const Model = z.object({
	id: z.number(),
	partNumber: z.string(),
	stepDescription: z.string(),
	car: Car,
	pmpList: z.array(Pmp),
	fmList: z.array(Fm),
	active: z.boolean()
})
export type IModel = z.infer<typeof Model>

export const PmpPayload = Pmp.extend({
	id: z.number().nullish(),
	axisCoordinateList: z.array(
		NominalAxisCoordinate.extend({
			id: z.number().nullish(),
			pmpId: z.number().nullish()
		})
	)
})

export const FmPayload = Fm.extend({
	id: z.number().nullish(),
	fmImpactList: z.array(FmImpact.extend({ id: z.number().nullish() })),
	pmpList: z.array(Pmp).or(z.array(z.string()))
})

export const ModelPayload = Model.extend({
	id: z.number().nullish(),
	pmpList: z.array(PmpPayload),
	fmList: z.array(FmPayload)
})

export const PmpFieldValue = PmpPayload.extend({
	x: z.string(),
	y: z.string(),
	z: z.string(),
	axisCoordinateList: z.array(
		NominalAxisCoordinate.extend({
			id: z.number().nullish(),
			lowerTolerance: z.string(),
			higherTolerance: z.string()
		})
	)
})
export type IPmpFieldValue = z.infer<typeof PmpFieldValue>

export const FmFieldValue = FmPayload.extend({
	defaultValue: z.string(),
	lowerTolerance: z.string(),
	higherTolerance: z.string(),
	pmpList: z.array(Pmp)
})
export type IFmFieldValue = z.infer<typeof FmFieldValue>

export const FieldValues = ModelPayload.extend({
	car: z.number(),
	pmpList: z.array(PmpFieldValue),
	fmList: z.array(FmFieldValue)
})
export type IFieldValues = z.infer<typeof FieldValues>

export const useModelsQuery = makeQuery(MODELS_URL, z.array(Model))

export const useModelMutation = makeMutation(MODELS_URL, ModelPayload)

// export const useSendFilesMutation = () =>
// 	useMutation(async (item: File) => {
// 		const headers: Record<string, string> = {
// 			'Content-Type': 'multipart/form-data'
// 		}
// 		const data = new FormData()
// 		data.append('file', new Blob([item], { type: item.type }), item.name)

// 		const token = localStorage.getItem('token')
// 		if (token) {
// 			headers.Authorization = `${token}`
// 		}

// 		await axios.post(`documents/report-income/upload`, data, {
// 			baseURL: import.meta.env.VITE_API_URL ?? window.location.origin,
// 			headers
// 		})
// 	})
