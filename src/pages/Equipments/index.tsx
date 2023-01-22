import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import type { IEquipment } from './api'
import { useEquipmentsQuery } from './api'
import { columns } from './columns'
import { CreateEditEquipment } from './CreateEditEquipment'

export function Equipments(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedEquipmentItem, setSelectedEquipmentItem] =
		useState<IEquipment | null>(null)

	const query = useEquipmentsQuery()

	function onEquipmentClick(equipment: IEquipment) {
		setSelectedEquipmentItem(equipment)
		toggleIsDialogOpen()
	}

	function onCloseDialog() {
		setSelectedEquipmentItem(null)
		toggleIsDialogOpen()
	}

	return (
		<>
			<PageTop>
				<Button onClick={toggleIsDialogOpen}> Criar novo</Button>
			</PageTop>
			{query.data && (
				<Table
					title='Equipamentos'
					data={query.data}
					columns={columns}
					onRowClick={onEquipmentClick}
				/>
			)}
			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditEquipment
					onClose={onCloseDialog}
					selectedEquipment={selectedEquipmentItem}
				/>
			</Dialog>
		</>
	)
}
