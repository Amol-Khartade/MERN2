import React from 'react'

import { ser_ban } from '../assets'
import { styles } from '../styles'

const SignUp = () => {
	return (
		<>
			<div
				className={`w-full h-full bg-cover bg-center bg-[url('${ser_ban}')`}
				style={{
					backgroundImage: `url(${ser_ban})`,
					width: 'auto',
					height: '300px',
				}}
			>
				<div className="flex items-center justify-center h-full w-full bg-dark-blue bg-opacity-70">
					<div className="text-center">
						<h1
							className={`${styles.heroHeadText} blue-text-gradient ml-8 font-bold`}
						>
							Sign Up
						</h1>
						<span
							className={`${styles.heroSubText} mt-2 text-white-100 orange-text-gradient ml-8 text-center`}
						>
							Create new account
						</span>
						{/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
				Start project
			</button> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default SignUp
