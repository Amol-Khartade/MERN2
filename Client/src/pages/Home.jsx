import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Hero from './Hero'
import { home_1, herobg } from '../assets'
import { styles } from '../styles'
import Slider from '../component/Slider'
import { Sliders } from '../constants'

const Home = () => {
	const location = useLocation()

	return (
		<>
			{/* <h1>
				Hello {location.state.id} and Welcome to SkyAge Training Center
			</h1> */}
			<div className="max-w-screen">
				<Slider autoSlide={true} autoSlideInterval={8000}>
					{[
						...Sliders.map((slide, index) => (
							<>
								<img
									key={index}
									className="aspect-w-16 relative w-screen"
									src={slide.imageUrl}
									alt=""
								/>
							</>
						)),
					]}
				</Slider>
			</div>
			<Hero className="container mx-auto flex flex-wrap" />
			<div
				className="flex flex-wrap bg-cover bg-center bg-no-repeat h-full w-full bg-fixed "
				style={{ backgroundImage: `url(${herobg})` }}
			>
				<div className="h-full w-full lg:w-1/3 p-6">
					<div className={`${styles.paddingX}`}>
						<img
							src={home_1}
							alt="home_1"
							className={` w-full shadow-lg shadow-sky-blue-800/50 hover:shadow-sky-blue-600/50 rounded max-w-full h-auto align-middle border-2`}
						/>
					</div>
				</div>

				<div className={`${styles.paddingX} h-full w-full lg:w-2/3`}>
					<div className="relative">
						<div className="flex flex-wrap justify-center">
							<h1
								className={`${styles.sectionHeadText} blue-text-gradient pb-5 font-bold uppercase text-center text-6xl`}
							>
								About SkyAge
							</h1>
							<span
								className={`${styles.sectionSubText} orange-text-gradient pb-5 justify-center text-center`}
							>
								Perfectness in Web Services improves the
								productivity. We are Creative Tech Enthusiast
								working since 2018 !
							</span>
						</div>
						<div className="row-sp-span-2">
							<p className={`${styles.paddingX} text-white-100 `}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vestibulum congue euismod
								sapien, sed viverra velit porttitor ac. Praesent
								condimentum placerat semper. Nullam eget quam
								efficitur, finibus lorem ut, interdum turpis.
								Mauris eu ex dignissim, semper ante sed, egestas
								leo. Phasellus sagittis euismod lorem, sed
								suscipit nulla scelerisque sed. Donec aliquam
								orci vel congue feugiat. Nam euismod nisi ante,
								et efficitur mi congue eu. Mauris hendrerit
								lacinia vulputate. Proin bibendum, turpis vitae
								sollicitudin cursus, ex nisl commodo dui, vitae
								vehicula odio nunc vel augue. Curabitur pretium
								venenatis est, ut tincidunt eros pretium quis.
								Fusce eget justo eu ipsum eleifend blandit. In
								lobortis porttitor lorem, eu sollicitudin est
								consequat sed. Orci varius natoque penatibus et
								magnis dis parturient montes, nascetur ridiculus
								mus. Vivamus eu elit congue, elementum nibh
								eget, congue libero. Suspendisse ut porttitor
								augue.
							</p>
						</div>
					</div>
				</div>

				{/* <div className="h-full w-full lg:w-1/2">
					<div className=" relative"></div>
				</div> */}
			</div>
		</>
	)
}

export default Home
