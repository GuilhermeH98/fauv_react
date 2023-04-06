import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import { Query } from 'components/Query'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import { CreateEditUser } from './CreateEditUser'
import type { IUser } from './api'
import { useUsersQuery } from './api'
import { columns } from './columns'

export function Users(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedUserItem, setSelectedUserItem] = useState<IUser | null>(null)

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
			<Query
				query={useUsersQuery()}
				render={data => (
					<Table
						title='Usuários'
						data={data}
						columns={columns}
						onRowClick={onUserClick}
					/>
				)}
			/>

			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditUser
					onClose={onCloseDialog}
					selectedUser={selectedUserItem}
				/>
			</Dialog>
		</>
	)
}
