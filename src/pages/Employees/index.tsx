import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import { Query } from 'components/Query'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import { CreateEditEmployee } from './CreateEditEmployee'
import type { IEmployee } from './api'
import { useEmployeesQuery } from './api'
import { columns } from './columns'

export function Employees(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedEmployeeItem, setSelectedEmployeeItem] =
		useState<IEmployee | null>(null)

	function onEmployeeClick(employee: IEmployee) {
		setSelectedEmployeeItem(employee)
		toggleIsDialogOpen()
	}

	function onCloseDialog() {
		setSelectedEmployeeItem(null)
		toggleIsDialogOpen()
	}

	return (
		<>
			<PageTop>
				<Button onClick={toggleIsDialogOpen}> Criar novo</Button>
			</PageTop>
			<Query
				query={useEmployeesQuery()}
				render={data => (
					<Table
						title='Funcionários'
						data={data}
						columns={columns}
						onRowClick={onEmployeeClick}
					/>
				)}
			/>
			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditEmployee
					onClose={onCloseDialog}
					selectedEmployee={selectedEmployeeItem}
				/>
			</Dialog>
		</>
	)
}
