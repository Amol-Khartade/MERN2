import React, { useState } from 'react'
// import { Button, Container, Header, Text } from "tailwindcss";

const LogoutPage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true)

	const handleLogout = () => {
		setIsLoggedIn(false)
	}

	return (
		<div className="container">
			{/* <Header>Logout</Header> */}
			<p>Are you sure you want to logout?</p>
			<button color="red" type="button" onClick={handleLogout}>
				Logout
			</button>
		</div>
	)
}

export default LogoutPage
