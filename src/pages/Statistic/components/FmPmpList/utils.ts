import { Level } from 'pages/Models/api'

export function getFmLevelLabel(level: Level) {
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
