import { z } from 'zod'

export enum ToleranceType {
	INTOL = 'INTOL',
	OUTOL = 'OUTOL',
	NOT_RECOGNIZED = 'NOT_RECOGNIZED'
}

export const GraphicMeasurementFmDTO = z.object({
	value: z.number(),
	scanDate: z.string(),
	toleranceType: z.nativeEnum(ToleranceType)
})
export type IGraphicMeasurementFmDTO = z.infer<typeof GraphicMeasurementFmDTO>
