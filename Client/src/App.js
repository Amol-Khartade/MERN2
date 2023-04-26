import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'

import Services from './Component/Services'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import About from './Component/About'
import Contact from './Component/Contact'
import LogIn from './Component/LogIn'
import SignUp from './Component/SignUp'
import MyDash from './Component/MyDash'

const App = () => {
	// const [user, setLoginUser] = useState({})
	return (
		<BrowserRouter>
			<div>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Services" element={<Services />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/MyDash" element={<MyDash />} />
					<Route path="/LogIn" element={<LogIn />} />
					<Route path="/SignUp" element={<SignUp />} />
				</Routes>
			</div>

			<Footer />
		</BrowserRouter>
	)
}

export default App
