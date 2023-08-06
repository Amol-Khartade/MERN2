import React, { useState } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'

import SideBar from './component/SideBar'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Cards from './component/Cards'
import NewDemo from './component/NewDemo'
import Demos from './component/Demos'
import ProfilePictureUpload from './component/ProfilePictureUpload'

import Services from './pages/Services'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import LogoutPage from './pages/LogoutPage'

import Dashboard from './dashboard/Dashboard'
import Demo from './dashboard/Demo'
import Education from './dashboard/Education'
import Company from './dashboard/Company'
import Settings from './dashboard/Settings'
import Logout from './dashboard/Logout'
import Profile from './dashboard/Profile'

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	// Function to check if the user is logged in
	const isUserLoggedIn = () => {
		return isLoggedIn
	}

	// Function to handle successful login
	const handleLogin = () => {
		setIsLoggedIn(true)
	}

	// Function to handle logout
	const handleLogout = () => {
		setIsLoggedIn(false)
		return <Navigate to="/LogIn" replace />
	}

	return (
		<Router>
			{!isLoggedIn && <Navbar />}{' '}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/dashboard/*"
					element={<ProtectedRoutes handleLogout={handleLogout} />}
				/>
				<Route path="/About" element={<About />} />
				<Route path="/Cards" element={<Cards />} />
				<Route path="/Services" element={<Services />} />
				<Route path="/Contact" element={<Contact />} />
				<Route
					path="/LogIn"
					element={<LogIn handleLogin={handleLogin} />}
				/>
				<Route path="/SignUp" element={<SignUp />} />
			</Routes>
			{!isLoggedIn && <Footer handleLogout={handleLogout}  className="lg:pl-40 sm:pl-20 md:pl-20"/>}
		</Router>
	)
}

const ProtectedRoutes = ({ handleLogout }) => {
	const [isLoggedIn] = useState(true)

	return isLoggedIn ? (
		<div className="grid grid-cols-7">
			<aside className="fixed top-0 col-span-1 h-screen mx-auto">
				<SideBar />
			</aside>

			<main className="col-start-2 col-span-6 min-h-screen lg:px-20 sm:px-20 md:px-20 lg:pl-40 sm:pl-20 md:pl-20">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/Demo" element={<Demo />} />
					<Route path="/NewDemo" element={<NewDemo />} />
					<Route path="/Demos" element={<Demos />} />
					<Route path="/Education" element={<Education />} />
					<Route path="/Company" element={<Company />} />
					<Route path="/Profile" element={<ProfilePictureUpload />} />
					<Route path="/ProfilePictureUpload" element={<ProfilePictureUpload />} />

					<Route path="/Settings" element={<Settings />} />
					<Route
						path="/Logout"
						element={<Logout handleLogout={handleLogout} />}
					/>
				</Routes>
			</main>
		</div>
	) : (
		<Navigate to="/LogIn" replace />
	)
}

export default App
