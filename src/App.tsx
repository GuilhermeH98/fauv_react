import { AuthWrapper } from 'components/AuthWrapper'
import LoadingOrError from 'components/LoadingOrError'
import { NavigationLayout } from 'layouts/Navigation'
import { Catalogs } from 'pages/Catalogs'
import { Equipments } from 'pages/Equipments'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import { Units } from 'pages/Units'
import { Users } from 'pages/Users'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route
						index
						element={
							<AuthWrapper>
								<SignIn />
							</AuthWrapper>
						}
					/>
					<Route
						path='/signup'
						element={
							<AuthWrapper>
								<SignUp />
							</AuthWrapper>
						}
					/>

					<Route
						path='/*'
						element={
							<AuthWrapper authenticated>
								<NavigationLayout>
									<Routes>
										<Route path='/users' element={<Users />} />
										<Route path='/catalogs' element={<Catalogs />} />
										<Route path='/units' element={<Units />} />
										<Route path='/equipments' element={<Equipments />} />
									</Routes>
								</NavigationLayout>
							</AuthWrapper>
						}
					/>
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
