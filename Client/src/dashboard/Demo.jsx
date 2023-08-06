import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../redux/actions/authAction'

import api from '../utils/api'
import { format } from 'date-fns'

import Loader from '../component/Loader'
import Card from '../component/Card'
import { styles } from '../styles'
import { profile, herobg } from '../assets'
import { demos } from '../constants'

const Demo = () => {
	// Retrieve the user data from the Redux store using useSelector:
	const dispatch = useDispatch()

	// Access the userData, firstName, lastName, and email from the Redux store
	const userId = useSelector((state) => state.auth._id)
	const userData = useSelector((state) => state.auth.userData)
	const firstName = useSelector((state) => state.auth.userData.firstName)
	const lastName = useSelector((state) => state.auth.userData.lastName)
	const email = useSelector((state) => state.auth.userData.email)

	const [userDemos, setUserDemos] = useState([])

	useEffect(() => {
		const fetchUserDemos = async () => {
			try {
				if (!userData.userId) {
					return // Exit if userId is not available
				}

				const response = await api.get(`/createdemo/${userData.userId}`)
				const data = response.data
				setUserDemos(data) // Save the fetched demo data in local state
			} catch (error) {
				console.error(error)
				setUserDemos([]) // Reset the userDemos state in case of an error
			}
		}

		fetchUserDemos()
	}, [userData.userId])

	// console.log(userId, setUserDemos)

	if (userDemos.length === 0) {
		return <Loader />
	}
	return (
		<>
			<section className="container">
				<div className="max-w-screen-xl">
					<div
						className="flex bg-cover max-w-full bg-no-repeat h-1/2 rounded-md shadow-xl shadow-dark-blue py-4 my-8"
						style={{
							backgroundImage: `url(${herobg})`,
						}}
					>
						<h1
							className={`${styles.sectionHeadText} justify-center items-center orange-text-gradient mx-auto`}
						>
							Demo
						</h1>
					</div>
				</div>
				<div className="items-center justify-center py-2 mx-auto  hidden xl:block 2xl:block lg:block md:flex sm:flex">
					<h1
						className={`${styles.dashSubText} flex-wrap justify-center items-center orange-text-gradient text-[18px]`}
					>
						Demo Details
					</h1>
				</div>

				<div className="flex h-auto max-w-full rounded-md shadow-md shadow-sky-blue-700 my-5 mx-auto">
					<h1
						className={`${styles.dashSubText} hidden lg:block flex-wrap justify-center items-center orange-text-gradient text-[18px] m-auto`}
					>
						Demo Details
					</h1>
					<div className="flex flex-wrap justify-center gap-2">
						{demos.map((demo) => (
							<Card
								key={demo.id}
								title={demo.title}
								data={{ Count: demo.count }}
								className="w-[250px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
							/>
						))}
					</div>
				</div>

				<div className="items-center justify-center py-2 mx-auto  hidden xl:block 2xl:block lg:block md:flex sm:flex">
					<h1
						className={`${styles.dashSubText} flex-wrap justify-center items-center orange-text-gradient text-[18px]`}
					>
						Demo History
					</h1>
				</div>

				{/* <h1
						className={`${styles.dashSubText} hidden lg:block flex-wrap justify-center items-center orange-text-gradient text-[18px] m-auto`}
					>
						Demo History
					</h1> */}
				<div className="flex h-auto max-w-full items-center justify-center">
					<table className="h-auto max-w-full border-collapse border  rounded-md shadow-md shadow-sky-blue-700 my-5 p-5 mx-auto border-gray-400 mt-4">
						<thead>
							<tr>
								<th className="border border-gray-400 p-2 w-[250px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
									Demo On
								</th>
								{/* <th className="border border-gray-400 p-2 w-[250px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
          Demo Topic
        </th> */}
								<th className="border border-gray-400 p-2 w-[250px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
									Date
								</th>
								<th className="border border-gray-400 p-2 w-[250px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
									Time
								</th>
								<th className="border border-gray-400 p-2 w-[250px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{userDemos.map((demo) => (
								<tr
									key={demo._id}
									className="border border-gray-400"
								>
									<td className="text-[14px] border border-gray-400 p-2">
										{demo.demoOn}
									</td>
									{/* <td className="border border-gray-400 p-2">{demo.demoTopic}</td> */}
									<td className="text-[14px] border border-gray-400 p-2">
										{demo.demoDate}
									</td>
									<td className="text-[14px] border border-gray-400 p-2">
										{demo.demoTime}
									</td>
									<td className="border border-gray-400 p-2">
										<button>
											{/* ... Delete button code ... */}
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</>
	)
}

export default Demo
