import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import type { ICatalog } from './api'
import { useCatalogsQuery } from './api'
import { columns } from './columns'
import { CreateEditCatalog } from './CreateEditCatalog'

export function Catalogs(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedCatalogItem, setSelectedCatalogItem] =
		useState<ICatalog | null>(null)

	const query = useCatalogsQuery()

	function onCatalogClick(catalog: ICatalog) {
		setSelectedCatalogItem(catalog)
		toggleIsDialogOpen()
	}

	function onCloseDialog() {
		setSelectedCatalogItem(null)
		toggleIsDialogOpen()
	}

	return (
		<>
			<PageTop>
				<Button onClick={toggleIsDialogOpen}> Criar novo</Button>
			</PageTop>
			{query.data && (
				<Table
					title='Catálogos'
					data={query.data}
					columns={columns}
					onRowClick={onCatalogClick}
				/>
			)}
			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditCatalog
					onClose={onCloseDialog}
					selectedCatalog={selectedCatalogItem}
				/>
			</Dialog>
		</>
	)
}
