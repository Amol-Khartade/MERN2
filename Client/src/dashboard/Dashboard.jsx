import React from 'react'

import { styles } from '../styles'
import { profile, herobg } from '../assets'
import { demos } from '../constants'

const Dashboard = () => {
	return (
		<>
			<section className={`grid gap-2 ${styles.paddingX} pt-5`}>
				<div className="col-start-1 col-span-4 h-screen items-center justify-center pl-72 md:pl-72 sm:pl-20">
					<div
						className="flex  bg-cover bg-no-repeat h-auto max-w-full rounded-md shadow-xl shadow-dark-blue  py-4 my-8"
						style={{ backgroundImage: `url(${herobg})` }}
					>
						{' '}
						<h1
							className={`${styles.heroHeadText}  justify-center items-center orange-text-gradient py-0 mx-auto`}
						>
							Dashboard
						</h1>
					</div>

					<div className="flex h-auto max-w-full rounded-lg shadow-lg shadow-sky-blue-700 bg-white-100 ">
						<div className="w-3/5 justify-center items-center my-4">
							{/* <ul>
								{data.map((item) => (
									<li key={item.id}>{item.name}</li>
								))}
							</ul> */}

							<span
								className={`${styles.dashSubText} font-bold justify-center items-center my-2 mx-2 text-white-950 text-[16px] flex`}
							>
								Web Developer
								<span
									className={`orange-text-gradient ${styles.sectionSubText}  items-center  mx-1`}
								>
									@
								</span>
							</span>

							<span
								className={`${styles.dashSubText} justify-center items-center my-2 mx-2 text-dark-blue  font-normal flex`}
							>
								SkyAge IT Services Pvt. Ltd.
							</span>
						</div>
						<div className="w-2/5 items-start justify-center">
							<img
								src={profile}
								className="justify-center p-4 rounded-lg flex"
								alt="profile"
							/>
							<div className="flex flex-wrap items-start justify-center">
								<button className="inline-flex px-3 py-2 text-sky-orange-600 hover:text-sky-orange-700 focus:text-sky-orange-700 hover:bg-sky-orange-100 focus:bg-sky-orange-100 border border-sky-orange-600 rounded-md mb-3">
									<svg
										aria-hidden="true"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
										/>
									</svg>
									Delete
								</button>
								<button className="inline-flex px-3 py-2 text-white bg-sky-blue-600 hover:bg-sky-blue-700 focus:bg-sky-blue-700 rounded-md mx-2 mb-3">
									<svg
										aria-hidden="true"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
									Upload
								</button>
							</div>
						</div>
					</div>
					<div className="container mx-auto pt-4">
						<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
							<div className="rounded-lg shadow-lg shadow-sky-blue-700 bg-white-200 pt-2 mt-2 flex items-center justify-center">
								{/* <div className="flex">
								<h1
									className={`${styles.dashHeadText} justify-center items-center pt-4 px-4 blue-text-gradient text-[18px] flex`}
								>
									Demo
								</h1>
							</div> */}
								<div className="flex items-center justify-center">
									<ul className="pt-2 pb-4 space-y-1 text-sm">
										<h1
											className={`${styles.heroSubText} justify-center items-center p-4 px-4 orange-text-gradient text-2xl flex`}
										>
											Demo
										</h1>
										{demos.map((demo, index) => (
											<>
												<li
													key={index}
													className={`text-sm text-white-950 flex items-center  px-2`}
												>
													<span
														className={`w-10 h-10 block float-left mr-1 items-center `}
													>
														{demo.icon}
													</span>

													<span
														className={`flex-1 ${styles.dashSubText}`}
													>
														{demo.title + ' :'}
													</span>
													<span
														className={`float-right text-[18px] ${styles.dashSubText} ml-5`}
													>
														{demo.count}
													</span>
												</li>
											</>
										))}
									</ul>
								</div>
							</div>

							<div class=" flex flex-col justify-center  bg-white-950 ">
								<div class="bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
									<div class="mx-auto max-w-md">
										<h1>Demo</h1>
										<div class="divide-y divide-gray-300/50">
											<div class="space-y-6 py-8 text-base leading-7 text-gray-600">
												<p>Information for card</p>
												<ul class="space-y-4">
													<li class="flex items-center">
														<svg
															class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
															stroke-linecap="round"
															stroke-linejoin="round"
														>
															<circle
																cx="12"
																cy="12"
																r="11"
															/>
															<path
																d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
																fill="none"
															/>
														</svg>
														<p class="ml-4">
															Option 1
														</p>
													</li>
													<li class="flex items-center">
														<svg
															class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
															stroke-linecap="round"
															stroke-linejoin="round"
														>
															<circle
																cx="12"
																cy="12"
																r="11"
															/>
															<path
																d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
																fill="none"
															/>
														</svg>
														<p class="ml-4">
															Option
															<code class="text-sm font-bold text-gray-900">
																@apply
															</code>
														</p>
													</li>
													<li class="flex items-center">
														<svg
															class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
															stroke-linecap="round"
															stroke-linejoin="round"
														>
															<circle
																cx="12"
																cy="12"
																r="11"
															/>
															<path
																d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
																fill="none"
															/>
														</svg>
														<p class="ml-4">
															Option 3
														</p>
													</li>
												</ul>
											</div>
											<div class="pt-8 text-base font-semibold leading-7"></div>
										</div>
									</div>
								</div>
							</div>

							<div className="rounded-lg shadow-lg shadow-sky-blue-700 bg-white-200 p-2 py-2 my-2 flex items-center justify-center">
								<div className="flex items-center justify-center">
									<ul className="pt-2 pb-4 space-y-1 text-sm">
										<h1
											className={`${styles.heroSubText} justify-center items-center p-4 px-4 orange-text-gradient text-[18px] flex`}
										>
											Education Background
										</h1>
										{demos.map((demo, index) => (
											<>
												<li
													key={index}
													className={`text-sm text-white-950 flex items-center py-2 px-2`}
												>
													<span
														className={`flex-1 text-[18px] ${styles.dashSubText}`}
													>
														{demo.title + ' :'}
													</span>
													<span
														className={`float-left text-[18px]ml-5`}
													>
														{
															'Institude/College/School/Certificates'
														}
													</span>
												</li>
											</>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Dashboard
