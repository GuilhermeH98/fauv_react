import { AuthWrapper } from 'components/AuthWrapper'
import LoadingOrError from 'components/LoadingOrError'
import { NavigationLayout } from 'layouts/Navigation'
import { Cars } from 'pages/Cars'
import { Catalogs } from 'pages/Catalogs'
import { Employees } from 'pages/Employees'
import { Equipments } from 'pages/Equipments'
import { Models } from 'pages/Models'
import { CreateEditModel } from 'pages/Models/CreateEditModel'
import { Samples } from 'pages/Samples'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import { Units } from 'pages/Units'
import { Users } from 'pages/Users'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App(): ReactElement {
	return (
		<>
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
									<Routes>
										<Route
											path='/models/create'
											element={<CreateEditModel />}
										/>
										<Route path='/models/edit' element={<CreateEditModel />} />
										<Route
											path='/*'
											element={
												<NavigationLayout>
													<Routes>
														<Route path='/users' element={<Users />} />
														<Route path='/catalogs' element={<Catalogs />} />
														<Route path='/units' element={<Units />} />
														<Route
															path='/equipments'
															element={<Equipments />}
														/>
														<Route path='/cars' element={<Cars />} />
														<Route path='/employees' element={<Employees />} />
														<Route path='/models' element={<Models />} />
														<Route path='/samples' element={<Samples />} />
													</Routes>
												</NavigationLayout>
											}
										/>
									</Routes>
								</AuthWrapper>
							}
						/>
					</Routes>
				</Suspense>
			</BrowserRouter>
			<ToastContainer position='bottom-center' theme='colored' />
		</>
	)
}
