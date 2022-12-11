import LoadingOrError from 'components/LoadingOrError'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
