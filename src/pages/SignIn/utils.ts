import { createSnackbar } from 'components/Snackbar/utils'
import jwt_decode from 'jwt-decode'
import { Role } from 'layouts/Navigation/types'
import { z } from 'zod'
import type { ICredentials, IJWTPayload } from './api'

export function setCredentialsLocalStorage(credentials: ICredentials): void {
	localStorage.setItem('token', credentials.token)
	const decodedToken = jwt_decode<IJWTPayload>(credentials.token)

	try {
		const rolesParseResult = z
			.array(Role)
			.safeParse(JSON.parse(decodedToken.current_roles))

		if (rolesParseResult.success) {
			const rolesNames = rolesParseResult.data.map(role => role.name)
			localStorage.setItem('roles', JSON.stringify(rolesNames))
		}
	} catch {
		createSnackbar('error', 'erro ao decodificar token')
	}
}
