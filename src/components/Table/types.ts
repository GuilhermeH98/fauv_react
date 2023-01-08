export interface IColumnDefinitionType<TData, TKey extends keyof TData> {
	key: TKey
	header: string
	width?: number
	valueFormatter?: (value: TData[TKey]) => string
}

export interface ITableProperties<TData, TKey extends keyof TData> {
	data: TData[]
	columns: IColumnDefinitionType<TData, TKey>[]
	title: string
	onRowClick?: (row: TData) => void
}

export interface ITableRowsProperties<TData, TKey extends keyof TData> {
	data: TData[]
	columns: IColumnDefinitionType<TData, TKey>[]
	onRowClick?: (row: TData) => void
}

export interface ITableHeaderProperties<TData, TKey extends keyof TData> {
	columns: IColumnDefinitionType<TData, TKey>[]
}

export interface ITableTitleProperties {
	dataLength: number
	title: string
}
