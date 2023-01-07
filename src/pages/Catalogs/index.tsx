import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import { DialogHeader } from 'components/Dialog/Header'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useToggle } from 'utils/miscellaneous'
import { useCatalogsQuery } from './api'
import { columns } from './columns'

export function Catalogs(): ReactElement {
	const query = useCatalogsQuery()
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()

	function onCreateEditCatalog() {
		toggleIsDialogOpen()
	}

	return (
		<>
			<PageTop>
				<Button onClick={toggleIsDialogOpen}> Criar novo</Button>
			</PageTop>
			{query.data && (
				<Table title='Catálogos' data={query.data} columns={columns} />
			)}
			<Dialog isOpen={isDialogOpen} onClose={toggleIsDialogOpen}>
				<div className='flex flex-col gap-8'>
					<DialogHeader
						title='Novo Catálogo'
						onButtonClick={onCreateEditCatalog}
					/>
				</div>
			</Dialog>
		</>
	)
}
