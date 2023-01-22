import type { FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import type { ISelectProperties } from './types'

const animatedComponents = makeAnimated()

export function Multiselect<TFieldValues extends FieldValues, TContext>({
	control,
	name,
	options,
	placeholder = '',
	className = '',
	label,
	staticMenu = false
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
				render={({ field: { value, onChange } }) => (
					<Select
						defaultValue={value as unknown}
						components={animatedComponents}
						isMulti
						options={options}
						onChange={onChange}
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
								borderColor: '#CDDDE8'
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
