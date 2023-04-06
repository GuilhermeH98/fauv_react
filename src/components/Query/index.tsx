/* eslint-disable react/require-default-props */
import { QueryError } from './Error'
import { QueryLoading } from './Loading'
import type { IQueryProperties } from './types'

export function Query<TData>({
	query: useQuery,
	parameters,
	mutationUpdates,
	render
}: IQueryProperties<TData>) {
	const query =
		// eslint-disable-next-line react-hooks/rules-of-hooks
		typeof useQuery === 'function' ? useQuery(parameters) : useQuery

	if (query.isLoading || (!mutationUpdates && query.isFetching)) {
		return <QueryLoading />
	}

	if (query.isSuccess) {
		return render(query.data)
	}
	return <QueryError onRetry={query.refetch} />
}

export * from './Error'
export * from './Loading'
