// SideBar.js

import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../redux/actions/authAction'
import { logout, loginSuccess } from '../redux/actions/authAction'

import axios from 'axios'

import { FaSignOutAlt } from 'react-icons/fa'

import { styles } from '../styles'
import { logo, profile } from '../assets'
import { dashLinks } from '../constants'

const SideBar = () => {
	const history = useNavigate()
	const dispatch = useDispatch()

	// Access the userData, firstName, lastName, and email from the Redux store
	const userData = useSelector((state) => state.auth.userData)
	// const userId = userData.userId
	const firstName = userData.firstName
	const lastName = userData.lastName
	const email = userData.email

	const [open, setOpen] = useState(true)
	const [submenuOpen, setSubmenuOpen] = useState(false)
	const [user, setUser] = useState(null)

	const handleLogout = async () => {
		try {
			await axios
				.post('/logout') // Adjust the API endpoint URL as per your server setup
				.then((response) => {
					// Clear user data from state and sessionStorage on successful logout
					setUser(null)
					localStorage.removeItem('userData')
					localStorage.removeItem('token')

					dispatch(logout())

					console.log(response.data)
					// Redirect the user to the login page or homepage
					history('/login')
				})
		} catch (error) {
			console.error(error)
		}
		console.log('logout called')
		// localStorage.clear()
	}

	return (
		<>
			<header className="flex w-screen items-center h-20 px-6 sm:px-10 max-w-full bg-dark-blue">
				<div className="flex items-center ">
					<img
						src={logo}
						className={`w-2/3 h-1/2 justify-items-center py-2`}
						alt="Logo"
					/>
				</div>
				<button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-white-100 hover:bg-sky-blue-900 hover:text-white-800 focus:bg-sky-blue-900 focus:text-white-800 rounded-full">
					<span className="sr-only">Menu</span>
					<svg
						aria-hidden="true"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</button>

				<div className="flex flex-shrink-0 items-center ml-auto">
					<button className="inline-flex items-center p-2 hover:bg-sky-blue-900 focus:bg-sky-blue-900 rounded-lg">
						<span className="sr-only"></span>
						<div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
							<span className="font-semibold text-white-100">
								{firstName} {lastName}
							</span>
							<span className="text-sm text-white-300">
								MERN Developer
							</span>
						</div>
						<span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-sky-blue-900 rounded-full overflow-hidden">
							<img
								src={profile}
								alt="user profile"
								className="h-full w-full object-cover"
							/>
						</span>
						<svg
							aria-hidden="true"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="hidden sm:block h-6 w-6 text-white-100"
						>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							/>
						</svg>
					</button>
					<div className="border-l pl-3 ml-3 space-x-1 border-sky-orange-600">
						<button className="relative p-2 text-white-100 hover:bg-sky-blue-900 hover:text-white-300 focus:bg-sky-blue-900 focus:text-white-300 rounded-full">
							<span className="sr-only">Notifications</span>
							<span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
							<span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
							<svg
								aria-hidden="true"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>
						<button
							className="relative px-4 py-2 text-lg text-white-100 hover:bg-sky-blue-900 hover:text-white-300 focus:bg-sky-blue-900 focus:text-white-300 rounded-full"
							onClick={handleLogout}
						>
							<FaSignOutAlt />
						</button>
					</div>
				</div>
			</header>
			<aside className="main-sidebar">
				<div className="flex">
					<div
						className={`flex-col h-screen p-5 pt-8  bg-dark-blue lg:w-72 sm:w-20 md:w-20
					 duration-300 relative `}
					>
						<div className="space-y-3">
							{/* <div className="flex items-center justify-items-center p-0">
								<h2
									className={`${styles.sectionHeadText} font-bold orange-text-gradient lg:visible sm:invisible md:invisible`}
								>
									Dashboard
								</h2>
							</div> */}
							<div className="relative hidden sm:block md:block">
								<span className="absolute inset-y-0 left-0 flex items-center py-4">
									<button
										type="submit"
										className="p-2 focus:outline-none focus:ring text-sky-orange-600 hover:text-sky-blue-600 active:text-sky-blue-700"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</button>
								</span>
								<input
									type="search"
									name="Search"
									placeholder="Search..."
									className="w-full py-2 pl-10 text-sm border rounded-md text-sky-orange-600 hover:text-sky-blue-600   bg-dark-blue focus:outline-none"
								/>
							</div>
							<div className="flex-1">
								<ul className="pt-2 pb-4 space-y-1 text-sm">
									{dashLinks.map((menu, index) => (
										<NavLink
											to={menu.id}
											className={({ isActive }) =>
												isActive
													? 'bg-red-500 font-bold active:bg-orange'
													: 'bg-red-500 font-normal'
											}
										>
											<li
												key={index}
												className={`text-sm text-white-100 flex items-center gap-x- bg-transparent  hover:text-white-100    focus:outline-none cursor-pointer  p-2 hover:bg-sky-blue-900 focus:bg-sky-blue-900 rounded-lg transition-300 mt-9 px-2 `}
											>
												<span
													className={`w-5  block float-left mr-4  h-full items-center relative group
												}`}
												>
													{menu.icon}
													<div className="absolute left-0  items-center hidden ml-6 group-hover:flex ">
														{/* <div className="w-8 h-8 -mr-2 rotate-45 bg-blue border border-sky-orange-500"></div> */}
														<span className="w-full h-full lg:invisible md:visible sm:visible relative z-10 p-2 text-sm leading-none text-white whitespace-no-wrap bg-dark-blue shadow-lg border border-sky-orange-500 rounded-lg">
															{menu.title}
														</span>
													</div>
												</span>

												<span
													className={`flex-1 lg:visible md:invisible sm:invisible`}
												>
													{menu.title}
												</span>
												{menu.submenu && (
													<button
														type="button"
														className={`lg:visible md:invisible sm:invisible`}
														onClick={() =>
															setSubmenuOpen(
																!submenuOpen
															)
														}
													>
														<svg
															fill="none"
															viewBox="0 0 24 24"
															version="1.1"
															xmlns="http://www.w3.org/2000/svg"
															width="24px"
															height="24px"
															stroke="currentColor"
															className={`lg:visible md:invisible sm:invisible`}
														>
															<path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z"></path>
														</svg>
													</button>
												)}
											</li>

											{menu.submenu &&
												submenuOpen &&
												open && (
													<ul>
														{menu.submenuItems.map(
															(
																submenuItem,
																index
															) => (
																<NavLink
																	to={
																		submenuItem.id
																	}
																	key={index}
																>
																	<li
																		className={`text-sm text-white-100 flex items-center gap-x- bg-transparent rounded-md hover:text-white-100 focus:outline-none cursor-pointer p-2 px-4 hover:bg-sky-blue-900 transition-300`}
																	>
																		{
																			submenuItem.title
																		}
																	</li>
																</NavLink>
															)
														)}
													</ul>
												)}
										</NavLink>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</>
	)
}
export default SideBar
