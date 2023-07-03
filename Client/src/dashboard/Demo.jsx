import React from 'react'
import { styles } from '../styles'
import { profile } from '../assets'
import { herobg } from '../assets'
import { demos } from '../constants'

const Demo = () => {
	return (
		<section className={`grid gap-2 ${styles.paddingX}`}>
			<div className="col-start-1 col-span-4 h-screen items-center justify-center pl-72 md:pl-72 sm:pl-20">
				<div
					className="flex  bg-cover bg-no-repeat h-auto max-w-full rounded-md shadow-xl shadow-dark-blue  py-4 my-8"
					style={{ backgroundImage: `url(${herobg})` }}
				>
					{' '}
					<h1
						className={`${styles.sectionHeadText}  justify-center items-center orange-text-gradient py-10 mx-auto`}
					>
						Demo
					</h1>
				</div>

				<div className="flex h-auto max-w-full rounded-lg shadow-xl bg-white-200 ">
					<div className="w-3/5 ">
						<h1
							className={`${styles.dashHeadText} justify-center items-center pt-4 px-4 blue-text-gradient text-[18px] flex`}
						>
							Amol Khartade
						</h1>
						<span
							className={`${styles.dashSubText} justify-center items-center mx-2 text-white-950 text-[16px] flex`}
						>
							Web Developer
						</span>

						<span
							className={`blue-text-gradient ${styles.sectionSubText} justify-center items-center flex`}
						>
							@
						</span>
						<span
							className={`${styles.dashSubText} justify-center items-center mx-2 text-white-950 text-[16px] flex`}
						>
							SkyAge IT Services Pvt. Ltd.
						</span>
					</div>
					<div className="w-2/5 ">
						<img
							src={profile}
							className="justify-center p-4 rounded-lg flex"
							alt="profile"
						/>
						<button className="rounded-lg bg-white-100 hover:bg-white-300 border-0 shadow-md shadow-white-800 mx-3 p-2 py-0 justify-center items-center sm:py-2">
							Update
						</button>
						<button className="rounded-lg bg-white-100 hover:bg-white-300 border-0 shadow-md shadow-white-800 mx-3 p-2 py-0 justify-center items-center sm:py-2">
							Delete
						</button>
					</div>
				</div>
				<div className="container mx-auto pt-4">
					<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
						<div class="rounded-lg shadow-xl bg-white-200 pt-2 mt-2 flex items-center justify-center">
							<div className="flex items-center justify-center">
								<h1
									className={`${styles.dashHeadText} justify-center items-center pt-4 px-4 blue-text-gradient text-[18px] flex`}
								>
									Demo Details
								</h1>
								<ul className="pt-2 pb-4 space-y-1 text-sm">
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
													className={`flex-1 text-[18px] ${styles.dashSubText}`}
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
						<h1
							className={`${styles.dashHeadText} justify-center items-center pt-4 px-4 blue-text-gradient text-[18px] flex`}
						>
							Company Details
						</h1>
						<div class="rounded-lg shadow-xl bg-white-200 p-2 py-2 my-2 flex items-center justify-center">
							<div className="flex items-center justify-center">
								<ul className="pt-2 pb-4 space-y-1 text-sm">
									{demos.map((demo, index) => (
										<>
											<li
												key={index}
												className={`text-sm text-white-950 flex items-center py-2 px-2`}
											>
												<span
													className={`flex-left text-[18px] ${styles.dashSubText}`}
												>
													{demo.title + ' :'}
												</span>
												<span
													className={`float-left text-[16px] ml-5 flex-wrap`}
												>
													{
														'Experiance/CompanyName/JoinDate/Projects'
													}
												</span>
											</li>
										</>
									))}
								</ul>
							</div>
						</div>
						<h1
							className={`${styles.dashHeadText} justify-center items-center pt-4 px-4 blue-text-gradient text-[18px] flex`}
						>
							Education Background
						</h1>
						<div class="rounded-lg shadow-xl bg-white-200 p-2 py-2 my-2 flex items-center justify-center">
							<div className="flex items-center justify-center">
								<ul className="pt-2 pb-4 space-y-1 text-sm">
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
	)
}

export default Demo
