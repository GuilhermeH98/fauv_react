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
import { Statistic } from 'pages/Statistic'
import { StatisticManagement } from 'pages/StatisticManagement'
import { StatisticPreview } from 'pages/StatisticPreview'
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
								<Routes>
									<Route
										path='/models/create'
										element={
											<AuthWrapper authenticated restricted>
												<CreateEditModel />
											</AuthWrapper>
										}
									/>
									<Route
										path='/models/edit'
										element={
											<AuthWrapper authenticated restricted>
												<CreateEditModel />
											</AuthWrapper>
										}
									/>
									<Route
										path='/*'
										element={
											<NavigationLayout>
												<Routes>
													<Route
														path='/users'
														element={
															<AuthWrapper authenticated restricted>
																<Users />
															</AuthWrapper>
														}
													/>
													<Route
														path='/catalogs'
														element={
															<AuthWrapper authenticated restricted>
																<Catalogs />
															</AuthWrapper>
														}
													/>
													<Route
														path='/units'
														element={
															<AuthWrapper authenticated restricted>
																<Units />
															</AuthWrapper>
														}
													/>
													<Route
														path='/equipments'
														element={
															<AuthWrapper authenticated restricted>
																<Equipments />
															</AuthWrapper>
														}
													/>
													<Route
														path='/cars'
														element={
															<AuthWrapper authenticated restricted>
																<Cars />
															</AuthWrapper>
														}
													/>
													<Route
														path='/employees'
														element={
															<AuthWrapper authenticated restricted>
																<Employees />
															</AuthWrapper>
														}
													/>
													<Route
														path='/models'
														element={
															<AuthWrapper authenticated restricted>
																<Models />
															</AuthWrapper>
														}
													/>
													<Route
														path='/statisticManagement'
														element={
															<AuthWrapper authenticated restricted>
																<StatisticManagement />
															</AuthWrapper>
														}
													/>
													<Route
														path='/samples'
														element={
															<AuthWrapper authenticated>
																<Samples />
															</AuthWrapper>
														}
													/>
													<Route
														path='/statistic/:isFmVersion/:modelId/:name'
														element={
															<AuthWrapper authenticated>
																<Statistic />
															</AuthWrapper>
														}
													/>
													<Route
														path='/statisticPreview'
														element={
															<AuthWrapper authenticated>
																<StatisticPreview />
															</AuthWrapper>
														}
													/>
													<Route path='/*' element={<div />} />
												</Routes>
											</NavigationLayout>
										}
									/>
								</Routes>
							}
						/>
					</Routes>
				</Suspense>
			</BrowserRouter>
			<ToastContainer position='bottom-center' theme='colored' />
		</>
	)
}
