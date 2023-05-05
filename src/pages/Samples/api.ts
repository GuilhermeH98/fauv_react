import { useMutation } from '@tanstack/react-query'
import { Equipment } from 'pages/Equipments/api'
import { Model } from 'pages/Models/api'
import { APIError, makeQuery } from 'utils/api'
import { z } from 'zod'

export const SAMPLES_URL = `${import.meta.env.VITE_ANALYZER_URL ?? ''}sample`

export enum Status {
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	WARNING = 'WARNING'
}

export interface IFileUpload {
	dmoFile: File
}

const Sample = z.object({
	id: z.number(),
	uploadDate: z.string(),
	model: Model.pick({ partNumber: true, car: true, stepDescription: true }),
	equipment: Equipment,
	status: z.nativeEnum(Status),
	uploadUser: z.string(),
	ak: z.number(),
	bk: z.number(),
	io: z.number(),
	pin: z.string().nullish()
})
export type ISample = z.infer<typeof Sample>

export const useSamplesQuery = makeQuery(SAMPLES_URL, z.array(Sample))

export function useDeleteSampleMutation() {
	return useMutation(
		async (id: number) => {
			const headers: Record<string, string> = {}

			const token = localStorage.getItem('token')
			if (token) {
				headers.Authorization = `${token}`
			}

			const response = await fetch(`${SAMPLES_URL}/${id}`, {
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

export const useSendFileMutation = () =>
	useMutation(
		async (files: IFileUpload) => {
			const headers: Record<string, string> = {
				'Content-Type': 'multipart/form-data'
			}

			const formData = new FormData()
			formData.append('dmoFile', new Blob([files.dmoFile]))

			const token = localStorage.getItem('token')
			if (token) {
				headers.Authorization = `${token}`
			}

			const response = await fetch(
				`${import.meta.env.VITE_MSW ? '/' : ''}${SAMPLES_URL}`,
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
