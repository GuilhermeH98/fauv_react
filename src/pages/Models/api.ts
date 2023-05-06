import { useMutation } from '@tanstack/react-query'
import { Car } from 'pages/Cars/api'
import { APIError, makeMutation, makeQuery } from 'utils/api'
import { z } from 'zod'

export const MODELS_URL = `${import.meta.env.VITE_ANALYZER_URL ?? ''}model`
export const MODEL_PREVIEW_URL = `${
	import.meta.env.VITE_ANALYZER_URL ?? ''
}model/preview`

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
	UMRISS_UND_BUNDIGKEIT = 'UMRISS_UND_BÜNDIGKEIT',
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
	x: z.number(),
	y: z.number(),
	z: z.number(),
	numberId: z.number().nullish(),
	active: z.boolean(),
	axisCoordinateList: z.array(NominalAxisCoordinate)
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
	pmpList: z.array(
		Pmp.extend({ axisCoordinateList: z.array(NominalAxisCoordinate).nullish() })
	),
	level: z.nativeEnum(Level),
	photo: z.string().nullish(),
	numberId: z.number().nullish(),
	active: z.boolean(),
	fmImpactList: z.array(FmImpact)
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
	fmList: z.array(Fm)
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
	pmpList: z.array(PmpPayload)
})

export const ModelPayload = Model.extend({
	id: z.number().nullish(),
	pmpList: z.array(PmpPayload),
	fmList: z.array(FmPayload)
})
export type IModelPayload = z.infer<typeof ModelPayload>

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
	pmpList: z.array(PmpFieldValue)
})
export type IFmFieldValue = z.infer<typeof FmFieldValue>

export const FieldValues = ModelPayload.extend({
	car: z.number().nullish(),
	pmpList: z.array(PmpFieldValue),
	fmList: z.array(FmFieldValue)
})
export type IFieldValues = z.infer<typeof FieldValues>

export interface IFilesUpload {
	dmoFile: File
	csvFile: File | null | undefined
}

const NominalAxisCoordinatePreview = NominalAxisCoordinate.extend({
	id: z.number().nullish(),
	axis: z.nativeEnum(PointAxis).nullish(),
	workingOn: z.nativeEnum(PointAxis).nullish()
})

const PmpPreview = Pmp.extend({
	id: z.number().nullish(),
	workingOn: z.nativeEnum(PointAxis).nullish(),
	axisCoordinateList: z.array(NominalAxisCoordinatePreview)
})

export const ModelPreview = Model.extend({
	id: z.number().nullish(),
	stepDescription: z.string().nullish(),
	car: Car.nullish(),
	active: z.boolean().nullish(),
	pmpList: z.array(PmpPreview),
	fmList: z.array(
		Fm.extend({
			id: z.number().nullish(),
			catalogType: z.nativeEnum(CatalogType).nullish(),
			pmpList: z.array(
				PmpPreview.extend({
					axisCoordinateList: z.array(NominalAxisCoordinatePreview).nullish()
				})
			)
		})
	)
})
export type IModelPreview = z.infer<typeof ModelPreview>
// export type IModelPreview = Nullable<IModel>

export const useModelsQuery = makeQuery(MODELS_URL, z.array(Model))

export const useModelMutation = makeMutation(MODELS_URL, ModelPayload)

export function useDeleteModelMutation() {
	return useMutation(
		async (id: number) => {
			const headers: Record<string, string> = {}

			const token = localStorage.getItem('token')
			if (token) {
				headers.Authorization = `${token}`
			}

			const response = await fetch(`${MODELS_URL}/${id}`, {
				method: 'DELETE',
				headers
			})

			if (!response.ok) {
				let payload: unknown
				try {
					payload = await response.json()
				} catch {
					// No response body.
				}

				throw new APIError(
					response.status,
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					(payload as Error)?.message || response.statusText,
					payload
				)
			}
		},
		{ networkMode: 'always' }
	)
}

export const useSendFilesMutation = () =>
	useMutation(
		async (files: IFilesUpload) => {
			const formData = new FormData()
			
			formData.append('dmoFile', new Blob([files.dmoFile]))
			
			if (files.csvFile) { formData.append('csvFile', new Blob([files.csvFile])) }

			const headers: Record<string, string> = { }

			const token = localStorage.getItem('token')
			
			if (token) { headers.Authorization = `${token}` }

			const response = await fetch(
				`${import.meta.env.VITE_MSW ? '/' : ''}${MODEL_PREVIEW_URL}`,
				{
					method: 'POST',
					body: formData,
					headers
				}
			)

			if (!response.ok) {
				let payload: unknown
				try {
					payload = await response.json()
				} catch {
					// No response body.
				}
				throw new APIError(
					response.status,
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					(payload as Error)?.message || response.statusText,
					payload
				)
			}

			return response.json()
		},
		{ networkMode: 'always' }
	)
