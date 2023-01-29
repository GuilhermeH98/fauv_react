import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import type { IUser } from './api'
import { useUsersQuery } from './api'
import { columns } from './columns'
import { CreateEditUser } from './CreateEditUser'

export function Users(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedUserItem, setSelectedUserItem] = useState<IUser | null>(null)

	const query = useUsersQuery()

	function onUserClick(user: IUser) {
		setSelectedUserItem(user)
		toggleIsDialogOpen()
	}

	function onCloseDialog() {
		setSelectedUserItem(null)
		toggleIsDialogOpen()
	}

	return (
		<>
			<PageTop>
				<Button onClick={toggleIsDialogOpen}> Criar novo</Button>
			</PageTop>
			{query.data && (
				<Table
					title='Usuários'
					data={query.data}
					columns={columns}
					onRowClick={onUserClick}
				/>
			)}
			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditUser
					onClose={onCloseDialog}
					selectedUser={selectedUserItem}
				/>
			</Dialog>
		</>
	)
}
