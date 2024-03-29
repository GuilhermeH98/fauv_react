import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import type { IUnit } from './api'
import { useUnitsQuery } from './api'

import { Query } from 'components/Query'
import { CreateEditUnit } from './CreateEditUnit'
import { columns } from './columns'

export function Units(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedUnitItem, setSelectedUnitItem] = useState<IUnit | null>(null)

	function onUnitClick(catalog: IUnit) {
		setSelectedUnitItem(catalog)
		toggleIsDialogOpen()
	}

	function onCloseDialog() {
		setSelectedUnitItem(null)
		toggleIsDialogOpen()
	}

	return (
		<>
			<PageTop>
				<Button onClick={toggleIsDialogOpen}> Criar novo</Button>
			</PageTop>
			<Query
				query={useUnitsQuery()}
				render={data => (
					<Table
						title='Plantas'
						data={data}
						columns={columns}
						onRowClick={onUnitClick}
					/>
				)}
			/>

			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditUnit
					onClose={onCloseDialog}
					selectedUnit={selectedUnitItem}
				/>
			</Dialog>
		</>
	)
}
