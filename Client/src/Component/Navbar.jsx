import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { logo } from '../assets'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav
			className={`flex items-center justify-between flex-wrap p-6 bg-dark-blue`}
		>
			<div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
				<img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
			</div>

			<div className="block lg:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
				>
					<svg
						className={` h-3 w-3 fill-sky-blue-400  hover:fill-sky-orange-400 ${
							isOpen ? 'hidden' : 'block'
						}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>

					<svg
						className={` h-3 w-3 fill-sky-blue-400  hover:fill-sky-orange-400 ${
							isOpen ? 'block' : 'hidden'
						}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
					</svg>
				</button>
			</div>

			<div
				className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
					isOpen ? 'block' : 'hidden'
				}`}
			>
				<div className="text-sm lg:flex-grow lg:pt-0 sm:pt-3">
					<NavLink
						exact
						to="/"
						activeStyle={{ color: '#ef3c07' }}
						className="block mt-4 lg:inline-block lg:mt-0  hover:text-sky-orange-600 mr-4 text-sky-blue-400 hover:text-[21px] text-[20px] px-5 transition duration-300"
					>
						Home
					</NavLink>

					<NavLink
						to="/About"
						className="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-orange-600 mr-4 text-sky-blue-400 hover:text-[21px] text-[20px] px-5 transition duration-300"
					>
						About Us
					</NavLink>

					<NavLink
						to="/Services"
						className="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-orange-600 mr-4 text-sky-blue-400 hover:text-[21px] text-[20px] px-5 transition duration-300"
					>
						Services
					</NavLink>

					<NavLink
						to="/Contact"
						className="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-orange-600 mr-4 text-sky-blue-400 hover:text-[21px] text-[20px] px-5 transition duration-300"
					>
						Contact Us
					</NavLink>
				</div>

				<div>
					<NavLink to="/SignUP">
						<button className="inline-flex items-center rounded-full border-black bg-amber-500 border-2 py-2 px-4 text-white bg-gradient-to-r from-sky-blue-400 to-sky-orange-400 hover:from-sky-blue-600 hover:to-sky-orange-600 hover:text-sky-blue-300 lg:mx-2 sm:mx-4 lg:mt-0 sm:mt-8">
							Sign Up
						</button>
					</NavLink>
				</div>
				<div>
					<NavLink to="/LogIn">
						<button className="inline-flex items-center rounded-full border-black bg-amber-500 border-2 py-2 px-4 text-white bg-gradient-to-r from-sky-blue-400 to-sky-orange-400 hover:from-sky-blue-600 hover:to-sky-orange-600 hover:text-sky-blue-300 lg:mx-2 sm:mx-4">
							Log In
						</button>
					</NavLink>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
