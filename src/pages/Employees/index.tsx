import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import type { IEmployee } from './api'
import { useEmployeesQuery } from './api'
import { columns } from './columns'
import { CreateEditEmployee } from './CreateEditEmployee'

export function Employees(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedEmployeeItem, setSelectedEmployeeItem] =
		useState<IEmployee | null>(null)

	const query = useEmployeesQuery()

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
			{query.data && (
				<Table
					title='Funcionários'
					data={query.data}
					columns={columns}
					onRowClick={onEmployeeClick}
				/>
			)}
			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditEmployee
					onClose={onCloseDialog}
					selectedEmployee={selectedEmployeeItem}
				/>
			</Dialog>
		</>
	)
}
