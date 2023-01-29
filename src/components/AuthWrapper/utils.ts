import { Role } from 'layouts/Navigation/types'
import { z } from 'zod'

export function getIsAdmin(): boolean {
	try {
		const rolesString = localStorage.getItem('roles')
		if (rolesString !== null) {
			const rolesParseResult = z.array(Role).safeParse(JSON.parse(rolesString))
			if (rolesParseResult.success) {
				return rolesParseResult.data.some(role => role.name === 'administrator')
			}
		}
		return false
	} catch {
		return false
	}
}
