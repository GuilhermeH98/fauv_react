import Button from 'components/Buttons/Button'
import { Dialog } from 'components/Dialog'
import PageTop from 'components/PageTop'
import { Query } from 'components/Query'
import Table from 'components/Table'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useToggle } from 'utils/miscellaneous'
import { CreateEditCatalog } from './CreateEditCatalog'
import type { ICatalog } from './api'
import { useCatalogsQuery } from './api'
import { columns } from './columns'

export function Catalogs(): ReactElement {
	const [isDialogOpen, toggleIsDialogOpen] = useToggle()
	const [selectedCatalogItem, setSelectedCatalogItem] =
		useState<ICatalog | null>(null)

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
			<Query
				query={useCatalogsQuery()}
				render={data => (
					<Table
						title='Catálogos'
						data={data}
						columns={columns}
						onRowClick={onCatalogClick}
					/>
				)}
			/>
			<Dialog isOpen={isDialogOpen} onClose={onCloseDialog}>
				<CreateEditCatalog
					onClose={onCloseDialog}
					selectedCatalog={selectedCatalogItem}
				/>
			</Dialog>
		</>
	)
}
