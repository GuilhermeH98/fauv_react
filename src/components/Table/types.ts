export interface IColumnDefinitionType<TData, TKey extends keyof TData> {
	key: TKey | string
	header: string
	width?: number
	valueFormatter?: (value: TData[TKey]) => string
	valueGetter?: (row: TData) => string
	render?: (row: TData) => JSX.Element
	headerColor?: string
}

export interface ITableProperties<TData, TKey extends keyof TData> {
	data: TData[]
	columns: IColumnDefinitionType<TData, TKey>[]
	title: string
	onRowClick?: (row: TData) => void
	className?: string
	blueHeader?: boolean
}

export type ITableContentProperties<TData, TKey extends keyof TData> = Omit<
	ITableProperties<TData, TKey>,
	'title'
>

export interface ITableRowsProperties<TData, TKey extends keyof TData> {
	data: TData[]
	columns: IColumnDefinitionType<TData, TKey>[]
	onRowClick?: (row: TData) => void
}

export interface ITableHeaderProperties<TData, TKey extends keyof TData> {
	columns: IColumnDefinitionType<TData, TKey>[]
	blueHeader?: boolean
}

export interface ITableTitleProperties {
	dataLength: number
	title: string
}
