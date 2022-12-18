import LoadingOrError from 'components/LoadingOrError'
import { NavigationLayout } from 'layouts/Navigation'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import { Users } from 'pages/Users'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route index element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />

					<Route
						path='/*'
						element={
							<NavigationLayout>
								<Routes>
									<Route path='/users' element={<Users />} />
								</Routes>
							</NavigationLayout>
						}
					/>
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
