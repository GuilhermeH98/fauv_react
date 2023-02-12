import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import type { ICar } from './api'
import { useCarsQuery } from './api'
import { columns } from './columns'
import { CreateEditCar } from './CreateEditCar'

export function Cars(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedCarItem, setSelectedCarItem] = useState<ICar | null>(null)

	const query = useCarsQuery()

	function onCarClick(car: ICar) {
		setSelectedCarItem(car)
		toggleIsDialogOpen()
	}

	function onCloseDialog() {
		setSelectedCarItem(null)
		toggleIsDialogOpen()
	}

	return (
		<>
			<PageTop>
				<Button onClick={toggleIsDialogOpen}> Criar novo</Button>
			</PageTop>
			{query.data && (
				<Table
					title='Carros'
					data={query.data}
					columns={columns}
					onRowClick={onCarClick}
				/>
			)}
			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditCar onClose={onCloseDialog} selectedCar={selectedCarItem} />
			</Dialog>
		</>
	)
}
