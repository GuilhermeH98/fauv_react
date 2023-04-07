import { useMutation } from '@tanstack/react-query'
import { Equipment } from 'pages/Equipments/api'
import { Model } from 'pages/Models/api'
import { makeQuery } from 'utils/api'
import { z } from 'zod'

export const SAMPLES_URL = `${import.meta.env.VITE_ANALYZER_URL ?? ''}sample`

export enum STATUS {
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
	WARNING = 'WARNING'
}

export interface IFileUpload {
	dmoFile: File
}

const UserWithCredentials = z.object({
	vwId: z.string(),
	active: z.boolean(),
	roles: z
		.array(
			z.object({
				name: z.string().nullish(),
				admin: z.boolean().nullish()
			})
		)
		.nullish()
})

const Sample = z.object({
	id: z.number(),
	uploadDate: z.string(),
	model: Model.pick({ partNumber: true, car: true, stepDescription: true }),
	equipment: Equipment,
	status: z.nativeEnum(STATUS),
	uploadUser: UserWithCredentials,
	ak: z.number(),
	bk: z.number(),
	io: z.number()
	//  TODO: Verify if this is needed
	// scan_init_date: z.string().nullish(),
	// scan_end_date: z.string().nullish(),
	// pin: z.string().nullish()
	//  TODO: Diferent type from default Pmp and Fm. Need confirmation
	// pmpSampleList: z.array(Pmp).nullish(),
	// fmSampleList: z.array(Fm).nullish()
})
export type ISample = z.infer<typeof Sample>

export const useSamplesQuery = makeQuery(SAMPLES_URL, z.array(Sample))

export const useSendFileMutation = () =>
	useMutation(async (files: IFileUpload) => {
		const headers: Record<string, string> = {
			'Content-Type': 'multipart/form-data'
		}

		const formData = new FormData()
		formData.append('dmoFile', new Blob([files.dmoFile]))

		const token = localStorage.getItem('token')
		if (token) {
			headers.Authorization = `${token}`
		}

		const response = await fetch(`/${SAMPLES_URL}`, {
			method: 'POST',
			body: formData,
			headers
		})

		return response.json()
	})
