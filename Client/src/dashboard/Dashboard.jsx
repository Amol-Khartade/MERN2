import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FaUpload, FaTrashAlt, FaEdit } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../redux/actions/authAction'

import api from '../utils/api'
import Loader from '../component/Loader'
import SessionExpiredMessage from '../component/SessionExpiredMessage'
import Card from '../component/Card'
import { styles } from '../styles'
import { profile, herobg } from '../assets'
import { demos } from '../constants'

const Dashboard = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userData = useSelector((state) => state.auth.userData)
	const userId = userData.userId
	const accessToken = useSelector((state) => state.auth.token)
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		// Check if the user is authenticated and the access token is available
		if (accessToken && userId) {
			const fetchUserDetails = async () => {
				try {
					const response = await api.get(`/user/${userId}`, {
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					})

					const data = response.data.user // Assuming the API response returns user data directly
					setUser(data)
					setLoading(false)
					console.log(data)
				} catch (error) {
					console.error('Error fetching user details:', error)
					setError('Failed to fetch user details. Please try again.')
					setUser(null)
					setLoading(false)
				}
			}
			fetchUserDetails()
		} else {
			// If the user is not authenticated, redirect to the login page
			// (You can use your preferred routing library for redirection)

			navigate('/login')
		}
	}, [userId, accessToken])

	if (loading) {
		return <Loader />
	}

	if (error) {
		return <SessionExpiredMessage message={error} />
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
							Dashboard
						</h1>
					</div>
				</div>

				<div className="flex h-auto max-w-full rounded-lg shadow-lg shadow-sky-blue-700 bg-white-100 mx-auto">
					<div className="w-3/5 justify-center items-center my-4">
						<h1
							className={`${styles.dashSubText} justify-center items-center pt-2 px-4 blue-text-gradient text-[18px] flex`}
						>
							{userData.firstName} {userData.lastName}
						</h1>
						<span
							className={` justify-center items-center mx-2 text-white-950 text-[14px] flex`}
						>
							{userData.email}
						</span>

						<span
							className={`blue-text-gradient justify-center items-center flex`}
						>
							@
						</span>
						<span
							className={` justify-center items-center mx-2 text-white-950 text-[16px] flex`}
						>
							SkyAge IT Services Pvt. Ltd.
						</span>
					</div>
					<div className="w-2/5 items-start justify-center">
						<img
							src={profile}
							className="justify-center p-4 rounded-lg flex"
							alt="profile"
						/>
					</div>
				</div>
				<div className="w-full bg-blue-300 p-4">
					<div className="flex  mx-auto justify-center items-center">
						<button className="inline-flex px-3 py-2 text-sky-blue-600 border border-sky-blue-600 rounded-md mb-3 mx-2 text-[12px]">
							<FaEdit size={20} color="blue" className="mx-2" />
							Edit
						</button>
						<button className="inline-flex px-3 py-2 text-sky-orange-600 border border-sky-orange-600 rounded-md mb-3 mx-2 text-[12px]">
							<FaTrashAlt
								size={20}
								color="red"
								className="mx-2"
							/>
							Delete
						</button>
						<button className="inline-flex px-3 py-2 text-white text-sky-blue-600 border border-sky-blue-700 focus:bg-sky-blue-700 rounded-md mx-2 mb-3 text-[12px]">
							<FaUpload size={20} color="blue" className="mx-2" />
							Upload
						</button>
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
				<div className="flex flex-wrap -mx-4">
					{demos.map((demo) => (
						<div
							key={demo.id}
							className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4 flex-row"
						>
							<div className="bg-white rounded-lg shadow-md shadow-sky-blue-700 p-6">
								<h1
									className={`${styles.dashSubText} justify-center items-center pt-2 px-4 blue-text-gradient text-[18px] flex`}
								>
									Card
								</h1>
								<div className="gap-4">
									<Card
										key={demo.id}
										title={demo.title}
										data={{ Count: demo.count }}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Dashboard
