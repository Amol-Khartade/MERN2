import React, { useState } from 'react'
import { styles } from '../styles'
import { profile, herobg } from '../assets'
import { demos } from '../constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewDemo = () => {
	const navigate = useNavigate()

	const [selectedOption, setSelectedOption] = useState('')
	const [demoTopic, setDemoTopic] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [isOpen, setIsOpen] = useState(false) // Uncommented the isOpen state variable

	const handleDemo = (e) => {
		e.preventDefault()
		const demoData = {
			optionD: selectedOption,
			demoTopic,
			date,
			time,
		}

		// Save demo data to the database
		axios
			.post('http://localhost:5000/newdemo', demoData)
			.then((response) => {
				console.log('Demo data saved:', response.data)
				// Redirect the user to the dashboard
				navigate('/dashboard/demo')
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	const options = ['Linux', 'Cloud', 'Tools', 'Kubernetes', 'Web Development']

	const handleOptionClick = (option) => {
		setSelectedOption(option)
		setIsOpen(false) // Added to close the dropdown after selection
	}

	return (
		<>
			<section className={`grid gap-2 ${styles.paddingX} pt-5`}>
				<div className="col-start-1 col-span-4 h-screen items-center justify-center pl-72 md:pl-72 sm:pl-20">
					<div
						className="flex  bg-cover bg-no-repeat h-auto max-w-screen rounded-md shadow-xl shadow-dark-blue  py-4 my-8"
						style={{ backgroundImage: `url(${herobg})` }}
					>
						{' '}
						<h1
							className={`${styles.heroHeadText}  justify-center items-center orange-text-gradient py-0 mx-auto`}
						>
							New Demo
						</h1>
					</div>
				</div>
			</section>
			<div className="flex-col justify-center bg-gray-50 sm:py-12">
				<div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
					<div className="mx-auto max-w-md">
						<div className="divide-y divide-gray-300/50">
							<h1
								className={`${styles.heroHeadText} blue-text-gradient ml-8 font-bold`}
							>
								New Demo
							</h1>

							<div className="space-y-6 py-8 text-base leading-7 text-gray-600">
								<form onSubmit={handleDemo}>
									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="optionD"
										>
											Demo On
										</label>
										<div className="relative inline-block text-left">
											<div>
												<button
													type="button"
													className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													onClick={() =>
														setIsOpen(!isOpen)
													}
													id="optionD"
													value={selectedOption}
													onChange={(e) =>
														setSelectedOption(
															e.target.value
														)
													}
													aria-haspopup="true"
													aria-expanded={isOpen}
												>
													{selectedOption
														? selectedOption
														: 'Select an option'}
													<svg
														className="-mr-1 ml-2 h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fillRule="evenodd"
															d="M10 3a1 1 0 00-1 1v10a1 1 0 102 0V4a1 1 0 00-1-1zm-4.293.293a1 1 0 011.414 0L10 7.586l2.879-2.879a1 1 0 111.414 1.414L11.414 9l2.879 2.879a1 1 0 11-1.414 1.414L10 10.414l-2.879 2.879a1 1 0 01-1.414-1.414L8.586 9 5.707 6.121a1 1 0 010-1.414z"
															clipRule="evenodd"
														/>
													</svg>
												</button>
											</div>
											{isOpen && (
												<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
													<div
														className="py-1"
														role="menu"
														aria-orientation="vertical"
														aria-labelledby="options-menu"
													>
														{options.map(
															(option) => (
																<button
																	key={option}
																	onClick={() =>
																		handleOptionClick(
																			option
																		)
																	}
																	className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
																	role="menuitem"
																>
																	{option}
																</button>
															)
														)}
													</div>
												</div>
											)}
										</div>
									</div>
									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="demoTopic"
										>
											Demo Topic
										</label>
										<textarea
											className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											id="demoTopic"
											placeholder="Enter your Demo Topic"
											value={demoTopic}
											onChange={(e) =>
												setDemoTopic(e.target.value)
											}
										/>
									</div>
									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="date"
										>
											Date
										</label>
										<input
											type="date"
											className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											id="date"
											placeholder="Enter the date"
											value={date}
											onChange={(e) =>
												setDate(e.target.value)
											}
										/>
									</div>
									<div className="mb-4">
										<label
											className="block text-gray-700 text-sm font-bold mb-2"
											htmlFor="time"
										>
											Time
										</label>
										<input
											type="time"
											className="appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											id="time"
											placeholder="Enter the time"
											value={time}
											onChange={(e) =>
												setTime(e.target.value)
											}
										/>
									</div>
									<div className="flex items-center justify-between">
										<button
											type="submit"
											className="mb-2 w-full flex justify-center items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-gradient-to-r from-sky-blue-600 to-sky-orange-600 hover:from-sky-blue-800 hover:to-sky-orange-800 hover:text-sky-blue-300 lg:mx-2 sm:mx-4 pb-2.5 pt-3  text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] transition duration-150 ease-in-out item-center"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 512 512"
												id="login"
												className="mx-2"
											>
												<path d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z"></path>
												<path d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z"></path>
											</svg>
											Create new Demo
										</button>
									</div>
								</form>
							</div>
							<div className="pt-8 text-base font-semibold leading-7">
								<p className="text-gray-900">Something</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewDemo
