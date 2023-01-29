import type { IUser } from './api'

export function getRoleName(role: string): string {
	switch (role) {
		case 'administrator': {
			return 'Administrador'
		}
		case 'inspector': {
			return 'Inspetor'
		}
		case 'consultant': {
			return 'Consultor'
		}
		default: {
			return ''
		}
	}
}

export function getRolesText(row: IUser): string {
	let rolesText = ''
	for (const role of row.roles) {
		rolesText += `${getRoleName(role.name)}, `
	}
	return rolesText.slice(0, -2)
}
