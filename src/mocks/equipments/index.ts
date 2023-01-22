import { EQUIPMENTS_URL } from 'pages/Equipments/api'
import { mock } from 'utils/mock'
import equipments from './list.json'

export const handlers = [
	mock('get', EQUIPMENTS_URL, equipments),
	mock('post', EQUIPMENTS_URL, {
		id: 1,
		name: 'Novo Equipamento',
		unit: { id: 6, name: 'Principal Alemanha ', active: true },
		active: true
	}),
	mock('put', EQUIPMENTS_URL, {
		id: 1,
		name: 'Novo Equipamento',
		unit: { id: 6, name: 'Principal Alemanha ', active: true },
		active: true
	})
]
