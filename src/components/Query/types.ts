import type { UseQueryResult } from '@tanstack/react-query'

export interface IQueryProperties<TData> {
	query:
		| UseQueryResult<TData>
		| ((parameter?: Record<string, string>) => UseQueryResult<TData>)
	parameters?: Record<string, string> | undefined
	mutationUpdates?: boolean
	render: (data: TData) => React.ReactElement
}

export interface IQueryErrorProperties {
	onRetry?: () => void
}
