import Input from 'components/Inputs/Input'
import { Select } from 'components/Inputs/Select'
import type { IColumnDefinitionType } from 'components/Table/types'
import type { IPmp } from 'pages/Models/api'
import { PointAxis } from 'pages/Models/api'
import type { Control, UseFormRegister } from 'react-hook-form'
import { RiDeleteBinLine } from 'react-icons/ri'
import { mapEnumOptions } from 'utils/miscellaneous'
import type { IAxisRow } from './types'

export function getColumns(
	register: UseFormRegister<IPmp>,
	control: Control<IPmp>,
	onRemove: (row: IAxisRow) => void
): IColumnDefinitionType<IAxisRow, keyof IAxisRow>[] {
	return [
		{
			key: 'name',
			header: 'Nome',
			render: row => (
				<Input
					id={`axisCoordinateList.${row.id}.name`}
					key={`axisCoordinateList.${row.id}.name`}
					register={register}
				/>
			)
		},
		{
			key: 'higherTolerance',
			header: 'Tolerância Superior',
			render: row => (
				<Input
					type='number'
					id={`axisCoordinateList.${row.id}.higherTolerance`}
					key={`axisCoordinateList.${row.id}.higherTolerance`}
					register={register}
				/>
			)
		},
		{
			key: 'lowerTolerance',
			header: 'Tolerância Inferior',
			render: row => (
				<Input
					type='number'
					id={`axisCoordinateList.${row.id}.lowerTolerance`}
					key={`axisCoordinateList.${row.id}.lowerTolerance`}
					register={register}
				/>
			)
		},
		{
			key: 'axis',
			header: 'Eixo',
			render: row => (
				<Select
					name={`axisCoordinateList.${row.id}.axis`}
					widthClassName='w-20'
					options={mapEnumOptions(PointAxis)}
					control={control}
					required
				/>
			)
		},
		{
			key: 'actions',
			header: 'Ações',
			render: row => (
				<RiDeleteBinLine
					className=' cursor-pointer text-icon text-gray-fauv-2 '
					onClick={() => onRemove(row)}
				/>
			)
		}
	]
}
