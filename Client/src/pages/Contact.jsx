import React, { useState } from 'react'
import axios from 'axios'

import { contact_ban } from '../assets'
import { styles } from '../styles'

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		const contactData = {
			name,
			email,
			message,
		}

		// Save user data to the database
		axios
			.post('http://localhost:5000/contact', contactData)
			.then((response) => {
				console.log('User data saved:', response.data)
				// Redirect the user to the dashboard
				// history('/dashboard')
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	return (
		<>
			<div
				className={`w-full h-full bg-cover bg-center bg-[url('${contact_ban}')`}
				style={{
					backgroundImage: `url(${contact_ban})`,
					width: 'auto',
					height: '300px',
				}}
			>
				<div className="flex items-center justify-center h-full w-full bg-dark-blue bg-opacity-70">
					<div className="text-center">
						<h1
							className={`${styles.heroHeadText} blue-text-gradient ml-8 font-bold`}
						>
							Contact Us
						</h1>
						<span
							className={`${styles.heroSubText} mt-2 text-white-100 orange-text-gradient ml-8 text-center`}
						>
							Know More About Us
						</span>
						{/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
							Start project
						</button> */}
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center h-screen">
				<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="name"
							>
								Name
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="name"
								type="text"
								placeholder="Enter your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="message"
								placeholder="Enter your message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Contact
