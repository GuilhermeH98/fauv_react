import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import type { IAuthWrapperProperties } from './types'

const IS_API = !import.meta.env.VITE_MSW

export function AuthWrapper({
	authenticated,
	children
}: IAuthWrapperProperties): React.ReactElement | null {
	const [isSignedIn, setIsSignedIn] = useState<boolean>()

	useEffect(() => {
		if (IS_API) {
			setIsSignedIn(!!localStorage.getItem('token'))
		}
	}, [authenticated])

	if (isSignedIn === undefined && IS_API) {
		return null
	}

	if (isSignedIn) {
		if (authenticated) {
			return children
		}
		return <Navigate to='/home' replace />
	}
	if (authenticated && IS_API) {
		return <Navigate to='/' replace />
	}
	return children
}
