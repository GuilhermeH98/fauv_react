import { CatalogType } from 'pages/Models/api'
import { useLayoutEffect, useReducer, useState } from 'react'
import type { KeepStateOptions } from 'react-hook-form'

export type Nullable<T> = {
	[P in keyof T]?: T[P] extends object ? Nullable<T[P]> | null : T[P] | null
}

export type OptionValue = number | string

export interface ISelectOption {
	label: React.ReactNode
	value: OptionValue
}

export function mapSelectOptions<TItem>(
	items?: TItem[] | undefined,
	labelField?: keyof TItem,
	idField?: keyof TItem
) {
	return (
		items?.map<ISelectOption>(item => {
			const record = item as unknown as Record<string, number | string>

			return {
				label: record[labelField ?? 'name'],
				value: record[idField ?? 'id']
			}
		}) || []
	)
}

export function mapEnumOptions<TEnum extends Record<string, number | string>>(
	options: TEnum,
	getLabel?: (value: number | string) => string
): ISelectOption[] {
	return Object.values(options).map(value => ({
		value,
		label: getLabel ? getLabel(value) : options[value]
	}))
}

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(() => matchMedia(query).matches)

	useLayoutEffect(() => {
		const mediaQuery = matchMedia(query)

		function onMediaQueryChange(): void {
			setMatches(mediaQuery.matches)
		}

		mediaQuery.addEventListener('change', onMediaQueryChange)

		return (): void => {
			mediaQuery.removeEventListener('change', onMediaQueryChange)
		}
	}, [query])

	return matches
}

export function useToggle(
	initial = false
): [boolean, React.DispatchWithoutAction] {
	return useReducer(old => !old, initial)
}

export const resetIsSubmittedOptions: KeepStateOptions = {
	keepDefaultValues: true,
	keepDirty: true,
	keepErrors: true,
	keepIsSubmitted: false,
	keepIsValid: true,
	keepSubmitCount: false,
	keepTouched: true,
	keepValues: true
}

// for show only
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getCatalogLabel(catalog: CatalogType | number | string) {
	switch (catalog) {
		case CatalogType.DICHTIGKEIT: {
			return 'Vedação'
		}
		case CatalogType.GRUNDGEOMETRIE: {
			return 'Gemometria'
		}
		case CatalogType.SYMMETRIEVERLAUF: {
			return 'Simetria'
		}
		default: {
			return 'Geometria'
		}
	}
}
