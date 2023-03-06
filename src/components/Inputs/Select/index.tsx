import type { FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import makeAnimated from 'react-select/animated'
import type { ISelectOption } from 'utils/miscellaneous'
import type { ISelectProperties } from '../types'

const animatedComponents = makeAnimated()

export function Select<TFieldValues extends FieldValues, TContext>({
	control,
	name,
	options,
	placeholder = '',
	className = '',
	label,
	staticMenu = false,
	required = false,
	widthClassName,
	isSearchable = false,
	rules
}: ISelectProperties<TFieldValues, TContext>) {
	return (
		<div className={`grid gap-4  ${widthClassName ?? ' w-full'}`}>
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
					<ReactSelect
						components={animatedComponents}
						options={options}
						value={options.find(option => option.value === value)}
						onChange={selectedOption => {
							onChange((selectedOption as ISelectOption).value)
						}}
						isSearchable={isSearchable}
						isDisabled={false}
						isLoading={false}
						isRtl={false}
						closeMenuOnSelect
						placeholder={placeholder}
						styles={{
							control: baseStyles => ({
								...baseStyles,
								borderColor: '#CDDDE8'
							}),
							menu: baseStyles => ({
								...baseStyles,
								position: staticMenu ? 'static' : 'absolute'
							}),

							input: baseStyles => ({
								...baseStyles,
								'--tw-ring-color': 'none',
								':focus': {
									outlineColor: 'none'
								}
							})
						}}
						className={`${className}`}
					/>
				)}
			/>
		</div>
	)
}
