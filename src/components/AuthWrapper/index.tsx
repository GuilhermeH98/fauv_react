import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import type { IAuthWrapperProperties } from './types'
import { getIsAdmin } from './utils'

const IS_API = !import.meta.env.VITE_MSW

export function AuthWrapper({
	authenticated,
	restricted = false,
	children
}: IAuthWrapperProperties): React.ReactElement | null {
	const [isSignedIn, setIsSignedIn] = useState<boolean>()

	const isAdmin = getIsAdmin()

	useEffect(() => {
		if (IS_API) {
			setIsSignedIn(!!localStorage.getItem('token'))
		}
	}, [authenticated])

	if (isSignedIn === undefined && IS_API) {
		return null
	}

	if (authenticated && !isSignedIn && IS_API) {
		return <Navigate to='/' replace />
	}

	if (isSignedIn) {
		if (!authenticated || (!isAdmin && restricted)) {
			return <Navigate to='/cars' replace />
		}
		return children
	}
	if (authenticated && IS_API) {
		return <Navigate to='/' replace />
	}
	return children
}
