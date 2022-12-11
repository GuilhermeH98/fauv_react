import LoadingOrError from 'components/LoadingOrError'
import SignIn from 'pages/Authentication/SignIn'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<SignIn />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
