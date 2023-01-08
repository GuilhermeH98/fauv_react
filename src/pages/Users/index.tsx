import { useQuery } from '@tanstack/react-query'
import Button from 'components/Buttons/Button'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { IColumnDefinitionType } from 'components/Table/types'
import type { ReactElement } from 'react'
import { get } from 'utils/api'

interface IUser {
	name: string
	role: string
	identifier: string
}

const columns: IColumnDefinitionType<IUser, keyof IUser>[] = [
	{
		key: 'name',
		header: 'Nome'
	},
	{
		key: 'role',
		header: 'Papel'
	},
	{
		key: 'identifier',
		header: 'Identificador'
	}
]
export function Users(): ReactElement {
	const query = useQuery<IUser[]>(['users'], async () => get('/users'))

	return (
		<>
			<PageTop>
				<Button> Criar novo</Button>
			</PageTop>
			{query.data && (
				<Table title='Usuários' data={query.data} columns={columns} />
			)}
		</>
	)
}
