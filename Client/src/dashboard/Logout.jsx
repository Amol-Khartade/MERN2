import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Logout = () => {
	const navigate = useNavigate()
	const [error, setError] = useState('')

	const handleLogout = async () => {
		try {
			await axios.post('/api/logout')
			navigate('/LogIn', { replace: true })
		} catch (error) {
			setError('Logout failed. Please try again.') // Set error message if logout fails
			console.error('Logout failed:', error)
		}
	}

	return (
		<div>
			<h1>Logout</h1>
			{error && <p className="error">{error}</p>}{' '}
			{/* Display error message if it exists */}
			<p>Are you sure you want to logout?</p>
			<button
				onClick={handleLogout}
				className="mb-2 w-full flex justify-center items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-gradient-to-r from-sky-blue-600 to-sky-orange-600 hover:from-sky-blue-800 hover:to-sky-orange-800 hover:text-sky-blue-300 lg:mx-2 sm:mx-4 pb-2.5 pt-3  text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] transition duration-150 ease-in-out item-center"
			>
				Logout
			</button>
		</div>
	)
}

export default Logout
