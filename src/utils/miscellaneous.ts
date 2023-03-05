import { useLayoutEffect, useReducer, useState } from 'react'

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
