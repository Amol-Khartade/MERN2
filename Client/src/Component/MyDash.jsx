import React from 'react'

import { abt_ban } from '../assets'
import { styles } from '../styles'

const MyDash = () => {
	return (
		<>
			<div
				className={`w-full h-full bg-cover bg-center bg-[url('${abt_ban}')`}
				style={{
					backgroundImage: `url(${abt_ban})`,
					width: 'auto',
					height: '300px',
				}}
			>
				<div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
					<div className="text-center">
						<h1
							className={`${styles.heroHeadText} blue-text-gradient ml-8 font-bold`}
						>
							Dashboard
						</h1>
						<span
							className={`${styles.heroSubText} mt-2 text-white-100 orange-text-gradient ml-8 text-center`}
						>
							Dash Board
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

export default MyDash
