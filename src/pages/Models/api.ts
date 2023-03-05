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
	id: z.number().nullish(),
	name: z.string(),
	lowerTolerance: z.number(),
	higherTolerance: z.number(),
	axis: z.nativeEnum(PointAxis),
	pmpId: z.number()
})
export type INominalAxisCoordinate = z.infer<typeof NominalAxisCoordinate>

export const Pmp = z.object({
	id: z.number(),
	name: z.string(),
	workingOn: z.nativeEnum(PointAxis),
	x: z.number(),
	y: z.number(),
	z: z.number(),
	active: z.boolean(),
	axisCoordinateList: z.array(NominalAxisCoordinate)
})
export type IPmp = z.infer<typeof Pmp>

export const FmImpact = z.object({
	id: z.number(),
	info: z.number()
})

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
	fmImpactList: z.array(FmImpact),
	photo: z.string(),
	active: z.boolean()
})
export type IFm = z.infer<typeof Fm>

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

export const ModelPayload = Model.partial({ id: true })

export const ModelDetails = Model.extend({
	pmpList: z.array(Pmp),
	fmList: z.array(Fm)
})

export const useModelsQuery = makeQuery(MODELS_URL, z.array(Model))

export const useModelMutation = makeMutation(MODELS_URL, ModelPayload)
