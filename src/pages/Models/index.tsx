import Button from 'components/Buttons/Button'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import type { IModel } from './api'
import { useModelsQuery } from './api'
import { columns } from './columns'

export function Models(): ReactElement {
	const query = useModelsQuery()

	const navigate = useNavigate()

	function onEdit(row: IModel) {
		navigate('edit', { state: row })
	}

	return (
		<>
			<PageTop>
				<Button onClick={() => navigate('create')}> Criar novo</Button>
			</PageTop>
			{query.data && (
				<Table
					title='Modelos'
					data={query.data}
					columns={columns}
					onRowClick={onEdit}
				/>
			)}
		</>
	)
}
