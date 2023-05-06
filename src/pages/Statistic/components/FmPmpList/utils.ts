import { Level } from 'pages/Models/api'

// TODO: use Level Type on parameter type
export function getFmLevelLabel(level: number | string) {
	switch (level) {
		case Level.LOW: {
			return 'Baixo'
		}
		case Level.MEDIUM: {
			return 'Médio'
		}
		case Level.HIGH: {
			return 'Alto'
		}
		case Level.CRITICAL: {
			return 'Crítico'
		}
		default: {
			return 'Nível desconhecido'
		}
	}
}
