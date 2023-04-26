import React from 'react'
import { Link } from 'react-router-dom'
// import icon1 from '../icon/icon1.png'
import { herobg } from '../assets'
import { styles } from '../styles'

function Hero() {
	return (
		<div className="w-screen h-[calc(100vh-5rem)]">
			<div
				className="bg-cover bg-center bg-no-repeat h-full w-full"
				style={{ backgroundImage: `url(${herobg})` }}
			>
				<div className="container mx-auto flex flex-col my-auto align-middle h-full">
					<div className="my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5">
						<h1
							className={`${styles.heroHeadText} blue-text-gradient ml-8 font-bold`}
						>
							<span className="text-violet-500">Perfectness</span>{' '}
							in Web Services improves the productivity.
						</h1>
						<p
							className={`${styles.heroSubText} mt-2 text-white-100 orange-text-gradient ml-8`}
						>
							We are Creative Tech Enthusiast working since 2018 !
						</p>
						<div className="flex items-center">
							<Link to="/Contact">
								<button className="inline-flex items-center rounded-full border-black bg-amber-500 border-0 py-2 px-4 text-white bg-gradient-to-r from-blue to-orange hover:from-pink hover:to-yellow mx-8 my-8">
									Contact Us
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
