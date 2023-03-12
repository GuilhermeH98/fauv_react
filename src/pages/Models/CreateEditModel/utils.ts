import type {
	IFieldValues,
	IFm,
	IFmFieldValue,
	IModel,
	IPmp,
	IPmpFieldValue
} from '../api'

export function formatModelPayload(values: IFieldValues) {
	return {
		...values,
		pmpList: values.pmpList.map(pmp => ({
			...pmp,
			id: pmp.id && pmp.id > -1 ? pmp.id : null,
			x: Number.parseFloat(pmp.x),
			y: Number.parseFloat(pmp.y),
			z: Number.parseFloat(pmp.z),
			axisCoordinateList: pmp.axisCoordinateList.map(axisCoordinate => ({
				...axisCoordinate,
				id:
					axisCoordinate.id && axisCoordinate.id > -1
						? axisCoordinate.id
						: null,
				lowerTolerance: Number.parseFloat(axisCoordinate.lowerTolerance),
				higherTolerance: Number.parseFloat(axisCoordinate.higherTolerance),
				pmpId: pmp.id && pmp.id > -1 ? pmp.id : null
			}))
		})),
		fmList: values.fmList.map(fm => ({
			...fm,
			id: fm.id && fm.id > -1 ? fm.id : null,
			defaultValue: Number.parseFloat(fm.defaultValue),
			lowerTolerance: Number.parseFloat(fm.lowerTolerance),
			higherTolerance: Number.parseFloat(fm.higherTolerance),
			fmImpactList: fm.fmImpactList.map(fmImpact => ({
				...fmImpact,
				id: fmImpact.id && fmImpact.id > -1 ? fmImpact.id : null
			}))
		}))
	}
}

export function formatModelState(model: IModel) {
	return {
		...model,
		pmpList: model.pmpList.map(pmp => ({
			...pmp,
			numberId: pmp.id,
			x: pmp.x.toString(),
			y: pmp.y.toString(),
			z: pmp.z.toString(),
			axisCoordinateList: pmp.axisCoordinateList
				? pmp.axisCoordinateList.map(axisCoordinate => ({
						...axisCoordinate,
						lowerTolerance: axisCoordinate.lowerTolerance.toString(),
						higherTolerance: axisCoordinate.higherTolerance.toString()
				  }))
				: []
		})),
		fmList: model.fmList.map(fm => ({
			...fm,
			numberId: fm.id,
			lowerTolerance: fm.lowerTolerance.toString(),
			higherTolerance: fm.higherTolerance.toString(),
			defaultValue: fm.defaultValue.toString(),
			fmImpactList: fm.fmImpactList
				? fm.fmImpactList.map(fmImpact => ({
						...fmImpact
				  }))
				: []
		}))
	}
}

export function formatPmp(pmp: IPmp) {
	return {
		...pmp,
		numberId: typeof pmp.id === 'number' ? pmp.id : null,
		x: pmp.x.toString(),
		y: pmp.y.toString(),
		z: pmp.z.toString(),
		axisCoordinateList: pmp.axisCoordinateList
			? pmp.axisCoordinateList.map(axisCoordinate => ({
					...axisCoordinate,
					numberId:
						typeof axisCoordinate.id === 'number' ? axisCoordinate.id : null,
					lowerTolerance: axisCoordinate.lowerTolerance.toString(),
					higherTolerance: axisCoordinate.higherTolerance.toString()
			  }))
			: []
	}
}

export function formatFm(fm: IFm) {
	return {
		...fm,
		numberId: typeof fm.id === 'number' ? fm.id : null,
		lowerTolerance: fm.lowerTolerance.toString(),
		higherTolerance: fm.higherTolerance.toString(),
		defaultValue: fm.defaultValue.toString(),
		fmImpactList: fm.fmImpactList
			? fm.fmImpactList.map(fmImpact => ({
					...fmImpact
			  }))
			: []
	}
}

export function getPmpRows(pmpList: IPmpFieldValue[]): IPmp[] {
	return pmpList.map((pmp, index) => ({
		...pmp,
		id: pmp.numberId || pmp.id || index,
		x: Number.parseFloat(pmp.x),
		y: Number.parseFloat(pmp.y),
		z: Number.parseFloat(pmp.z),
		axisCoordinateList: pmp.axisCoordinateList.map(axisCoordinate => ({
			...axisCoordinate,
			id: axisCoordinate.numberId || axisCoordinate.id || index,
			lowerTolerance: Number.parseFloat(axisCoordinate.lowerTolerance),
			higherTolerance: Number.parseFloat(axisCoordinate.higherTolerance)
		}))
	}))
}

export function getFmRows(fmList: IFmFieldValue[]): IFm[] {
	return fmList.map((fm, index) => ({
		...fm,
		id: fm.numberId || fm.id || index,
		defaultValue: Number.parseFloat(fm.defaultValue),
		lowerTolerance: Number.parseFloat(fm.lowerTolerance),
		higherTolerance: Number.parseFloat(fm.higherTolerance),
		fmImpactList: fm.fmImpactList.map(fmImpact => ({
			...fmImpact,
			id: fmImpact.numberId || fmImpact.id || index
		}))
	}))
}
