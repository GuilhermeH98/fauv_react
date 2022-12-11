import Input from 'components/Input'
import type { ReactElement } from 'react'
import Checkbox from '../../../components/Checkbox'
import FauvTitle from './components/FauvTitle'
import Footer from './components/Footer'

export default function SignIn(): ReactElement {
	return (
		<>
			<div className='flex min-h-screen bg-grey-fauv'>
				<form className='z-10 m-auto flex flex-col items-center gap-8'>
					<FauvTitle subTitle='Entre para gerenciar a qualidade da produção' />
					<Input type='text' id='userId' placeholder='ID' required />
					<Input type='password' id='password' placeholder='Senha' required />
					<div className='flex w-72 justify-between'>
						<Checkbox id='remember' label='Lembrar-me' />
						<a
							href='/signup'
							className=' font-montserrat text-base font-semibold  leading-4 text-blue-fauv'
						>
							Novo usuário?
						</a>
					</div>
					<button
						type='submit'
						className='mb-4 h-11 w-72 rounded-btn bg-blue-fauv font-lexend text-white shadow-btn'
					>
						Login
					</button>
				</form>
			</div>
			<Footer />
		</>
	)
}
