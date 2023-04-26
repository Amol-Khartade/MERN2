import React from 'react'
import Hero from './Hero'
import { styles } from '../styles'
import { home_1 } from '../assets'

const Home = () => {
	return (
		<>
			<div className="">
				<Hero />
				<div className="m-8 grid grid-cols-3 gap-1 justify-evenly">
					<div class="bg-green col-span-2 rounded-lg h-12">4</div>
					<div class="bg-green rounded-lg h-12">5</div>
					<div className="row-span-3 ...">
						<div className="col-1">
							<img
								src={home_1}
								alt="home_1"
								className={`{${styles.padding} `}
							/>
						</div>
					</div>
					<div className="col-span-2 justify-center">
						<h1
							className={`${styles.sectionHeadText} blue-text-gradient ml-8 font-bold uppercase text-center`}
						>
							About SkyAge
						</h1>
						<span
							className={`${styles.sectionSubText} orange-text-gradient ml-8 justify-center text-center`}
						>
							Perfectness in Web Services improves the
							productivity. We are Creative Tech Enthusiast
							working since 2018 !
						</span>
					</div>
					<div className="row-span-2 col-span-2 ...">
						<p className={`{${styles.paddingX} `}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Vestibulum congue euismod sapien, sed viverra
							velit porttitor ac. Praesent condimentum placerat
							semper. Nullam eget quam efficitur, finibus lorem
							ut, interdum turpis. Mauris eu ex dignissim, semper
							ante sed, egestas leo. Phasellus sagittis euismod
							lorem, sed suscipit nulla scelerisque sed. Donec
							aliquam orci vel congue feugiat. Nam euismod nisi
							ante, et efficitur mi congue eu. Mauris hendrerit
							lacinia vulputate. Proin bibendum, turpis vitae
							sollicitudin cursus, ex nisl commodo dui, vitae
							vehicula odio nunc vel augue. Curabitur pretium
							venenatis est, ut tincidunt eros pretium quis. Fusce
							eget justo eu ipsum eleifend blandit. In lobortis
							porttitor lorem, eu sollicitudin est consequat sed.
							Orci varius natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus. Vivamus
							eu elit congue, elementum nibh eget, congue libero.
							Suspendisse ut porttitor augue. Duis non ipsum ac mi
							placerat volutpat vitae vitae odio. Sed arcu quam,
							blandit ut tellus pretium, venenatis elementum nisi.
							Mauris imperdiet ex enim, eget facilisis nisl
							porttitor id. Fusce dignissim nulla ut libero
							faucibus vehicula et vitae erat. Quisque ut
							dignissim quam, vel facilisis dui. Praesent semper
							ex diam, ut egestas nisl gravida ac. Quisque mollis
							tincidunt ex sit amet porttitor. Sed sagittis, magna
							sed tempus lobortis, mi lacus pellentesque urna,
							quis lobortis nisi elit eu lorem. Cras elementum,
							diam eu tempor pellentesque, orci sem mollis sem, id
							condimentum urna arcu ut mauris. Aliquam vel justo
							est.{' '}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
