import type { FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import type { ISelectOption } from 'utils/miscellaneous'
import type { ISelectProperties } from '../Multiselect/types'

const animatedComponents = makeAnimated()

export function SecondaryMultiselect<
	TFieldValues extends FieldValues,
	TContext
>({
	control,
	name,
	options,
	placeholder = '',
	className = '',
	label,
	staticMenu = false,
	required = false,
	rules
}: ISelectProperties<TFieldValues, TContext>) {
	return (
		<div className='grid gap-4'>
			{label && (
				<label
					className='font-inter text-base font-semibold leading-[160%]  text-black-fauv-3'
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<Controller
				control={control}
				name={name}
				defaultValue={undefined}
				rules={{ required, ...rules }}
				render={({ field: { value, onChange } }) => (
					<Select
						components={animatedComponents}
						isMulti
						options={options}
						// eslint-disable-next-line @typescript-eslint/no-unsafe-call
						value={options.filter(option => value?.includes(option.value))}
						onChange={selectedOptions =>
							onChange(
								(selectedOptions as ISelectOption[]).map(option => option.value)
							)
						}
						isClearable
						isSearchable
						isDisabled={false}
						isLoading={false}
						isRtl={false}
						closeMenuOnSelect={false}
						placeholder={placeholder}
						styles={{
							control: baseStyles => ({
								...baseStyles,
								border: 'none',
								backgroundColor: '#EBF9FD',
								borderWidth: '1px'
							}),
							menu: baseStyles => ({
								...baseStyles,
								position: staticMenu ? 'static' : 'absolute'
							})
						}}
						className={`${className}`}
					/>
				)}
			/>
		</div>
	)
}
