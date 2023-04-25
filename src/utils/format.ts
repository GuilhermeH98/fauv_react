export function formatDateWithHours(dateString: string): string {
	return new Date(dateString)
		.toLocaleDateString('pt-BR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit'
		})
		.replace(',', ' -')
}

export function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('pt-BR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	})
}

export function formatDateMonth(dateString: string): string {
	return new Date(dateString).toLocaleDateString('pt-BR', {
		month: '2-digit',
		day: '2-digit'
	})
}

export function truncate(number: number) {
	return Math.trunc(number * 100) / 100
}
