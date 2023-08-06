import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { FaSignOutAlt } from 'react-icons/fa'

import { styles } from '../styles'
import { profile, herobg } from '../assets'

const Logout = () => {
	const navigate = useNavigate()
	const [error, setError] = useState('')
	const [user, setUser] = useState(null)
	const history = useNavigate()
	const handleLogout = async () => {
		try {
			await axios
				.post('/logout') // Adjust the API endpoint URL as per your server setup
				.then((response) => {
					// Clear user data from state and sessionStorage on successful logout
					setUser(null)
					// sessionStorage.removeItem('userId')
					localStorage.removeItem('reduxState')

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
		<div>
			<section className={`grid gap-2 ${styles.paddingX} max-w-full py-10`}>
				
				<div
				className="flex bg-cover bg-no-repeat h-1/2  rounded-md shadow-xl shadow-dark-blue py-4 my-8"
				style={{ backgroundImage: `url(${herobg})` }}
			>
				{' '}
				<h1
					className={`${styles.sectionHeadText}  justify-center items-center orange-text-gradient mx-auto`}
				>
					Log Out
				</h1>
			</div>

			{error && <p className="error">{error}</p>}{' '}
			{/* Display error message if it exists */}
			<p>Are you sure you want to logout?</p>
			<button
				className="relative px-4 py-4 text-lg mb-2 w-full flex justify-center items-center rounded font-medium uppercase leading-normal text-white  text-white-100 bg-sky-orange-600 hover:bg-sky-blue-900 hover:text-white-300 focus:bg-sky-blue-900 focus:text-white-300"
				onClick={handleLogout}
			>
				<FaSignOutAlt />
			</button>
					
			</section>
			
			
		</div>
	)
}

export default Logout
