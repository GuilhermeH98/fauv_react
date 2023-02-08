import { z } from 'zod'

export function getIsAdmin(): boolean {
	try {
		const rolesString = localStorage.getItem('roles')
		if (rolesString !== null) {
			const rolesParseResult = z
				.array(z.string())
				.safeParse(JSON.parse(rolesString))
			if (rolesParseResult.success) {
				return rolesParseResult.data.includes('administrator')
			}
		}
		return false
	} catch {
		return false
	}
}
