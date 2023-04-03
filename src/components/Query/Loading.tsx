import { RiLoader2Fill } from 'react-icons/ri'

export function QueryLoading() {
	return (
		<div className=' flex h-full w-full flex-col '>
			<div className='m-auto flex flex-col '>
				<RiLoader2Fill className='mx-auto mb-4 text-blue-fauv' size={48} />

				<p className='mx-auto text-xl font-bold text-blue-fauv'>
					Carregando os dados...
				</p>
			</div>
		</div>
	)
}
