import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
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
						className={`fill-current h-3 w-3 ${
							isOpen ? 'hidden' : 'block'
						}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>

					<svg
						className={`fill-current h-3 w-3 ${
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
				<div className="text-sm lg:flex-grow">
					<a
						href="#/"
						className="block mt-4 lg:inline-block lg:mt-0 hover:blue-text-gradient mr-4 blue-text-gradient text-[20px] px-5"
					>
						<Link to="/">Home</Link>
					</a>

					<a
						href="/#"
						className="block mt-4 lg:inline-block lg:mt-0 hover:blue-text-gradient mr-4 blue-text-gradient text-[20px] px-5"
					>
						<Link to="/About">About Us</Link>
					</a>

					<a
						href="/#"
						className="block mt-4 lg:inline-block lg:mt-0 hover:blue-text-gradient mr-4 blue-text-gradient text-[20px] px-5"
					>
						<Link to="/Services">Services</Link>
					</a>

					<a
						href="/#"
						className="block mt-4 lg:inline-block lg:mt-0 hover:orange-text-gradient mr-4 blue-text-gradient text-[20px] px-5"
					>
						<Link to="/Contact">Contact Us</Link>
					</a>
				</div>

				<div>
					<Link to="/SignUP">
						<button className="inline-flex items-center rounded-full border-black bg-amber-500 border-2 py-2 px-4 text-white bg-gradient-to-r from-blue to-orange hover:from-pink hover:to-yellow mx-2">
							Sign Up
						</button>
					</Link>
				</div>
				<div>
					<Link to="/LogIn">
						<button className="inline-flex items-center rounded-full border-black bg-amber-500 border-2 py-2 px-4 text-white bg-gradient-to-r from-blue to-orange hover:from-pink hover:to-yellow mx-2">
							Log In
						</button>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
