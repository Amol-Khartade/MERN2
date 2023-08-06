import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import api from '../utils/api'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/actions/authAction'
import { ser_ban, login, herobg } from '../assets'
import { styles } from '../styles'

const LogIn = () => {
	const dispatch = useDispatch()
	const [user, setUser] = useState(null)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleGoogle = () => {
		window.location.href = 'http://localhost:5000/auth/google'
	}

	// Login using EMail and Password
	const handleLogin = (e) => {
		e.preventDefault()
		const loginData = { email, password }

		api.post('/login', loginData)
			.then((response) => {
				const message = response.data.message
				if (message === 'Login successful.') {
					// Login was successful, extract the user data and token
					const user = response.data.user
					const token = response.data.token

					// Assuming the response contains other user data
					const userData = {
						userId: user._id,
						firstName: user.firstName,
						lastName: user.lastName,
						email: user.email,
					}

					// Set the user data and token in localStorage for future use
					localStorage.setItem('userData', JSON.stringify(userData))
					localStorage.setItem('token', token)

					// Dispatch the loginSuccess action with the userId and other user data
					dispatch(loginSuccess(token, userData))

					// Redirect the user to the dashboard
					navigate('/dashboard')
				} else {
					// Login failed, handle error (e.g., display an error message to the user)
					console.error('Login failed:', message)
				}
			})
			.catch((error) => {
				console.error('Error:', error)
				// Handle other errors, e.g., display an error message to the user
			})
	}

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
							Log In
						</h1>
						<span
							className={`${styles.heroSubText} mt-2 text-white-100 orange-text-gradient ml-8 text-center`}
						>
							Log In into your Account
						</span>
						{/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
						Start project
					</button> */}
					</div>
				</div>
			</div>

			<section
				className="flex flex-wrap bg-cover bg-center bg-no-repeat h-full w-full bg-fixed"
				style={{ backgroundImage: `url(${herobg})` }}
			>
				<div className={`${styles.padding} container h-full`}>
					<div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
						<div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
							<div className={``}>
								<h1
									className={`${styles.sectionHeadText} blue-text-gradient ml-8 font-bold text-center`}
								>
									Log In
								</h1>
								<p
									className={`${styles.sectionSubText} mt-2  orange-text-gradient ml-8 text-center`}
								>
									LogIn Into Your Account
								</p>
							</div>
							<div
								className={`lg:${styles.paddingX} w-2/3 sm:w-full content-center place-items-center`}
							>
								<img
									src={login}
									className="rounded-lg shadow-xl object-contain"
									alt="login"
								/>
							</div>
						</div>

						<div className="md:w-8/12 lg:ml-6 lg:w-5/12">
							<form className={``} action="POST">
								<div
									className="relative mb-6"
									data-te-input-wrapper-init
								>
									<input
										className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="email"
										placeholder="Email"
										type="email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
									<label
										for="email"
										className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
									>
										Email address
									</label>
								</div>

								<div
									className="relative mb-6"
									data-te-input-wrapper-init
								>
									<input
										className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="password"
										placeholder="Password"
										type="password"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									<label
										for="password"
										className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
									>
										Password
									</label>
								</div>

								<div className="mb-6 flex items-center justify-between">
									<div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
										<input
											className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_orange-text-gradient] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_orange-text-gradient] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
											type="checkbox"
											value=""
											id="exampleCheck3"
											// checked
										/>
										<label
											className={`${styles.sectionSubText}inline-block pl-[0.15rem] hover:cursor-pointer orange-text-gradient`}
											for="exampleCheck3"
										>
											Remember me
										</label>
									</div>

									<a
										href="#!"
										className="orange-text-gradient transition duration-150 ease-in-out hover:text-sky-blue-600 focus:text-sky-blue-600 active:text-sky-blue-600"
									>
										Forgot password?
									</a>
								</div>

								<div className="relative mb-6 w-full inline-flex justify-center items-center">
									<button
										type="submit"
										onClick={handleLogin}
										data-te-ripple-init
										data-te-ripple-color="light"
										className="mb-2 w-full flex justify-center items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-gradient-to-r from-sky-blue-600 to-sky-orange-600 hover:from-sky-blue-800 hover:to-sky-orange-800 hover:text-sky-blue-300 lg:mx-2 sm:mx-4 pb-2.5 pt-3  text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] transition duration-150 ease-in-out item-center"
										// style="background-color: #1da1f2"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 512 512"
											id="login"
											className="mx-2"
										>
											<path d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z"></path>
											<path d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z"></path>
										</svg>
										Log In
									</button>
								</div>

								<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-sky-orange-600 after:mt-0.5 after:flex-1 after:border-t after:border-sky-orange-600 ">
									<p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200 orange-text-gradient">
										OR
									</p>
								</div>

								<div className="relative mb-6 w-full inline-flex justify-center items-center">
									<button
										type="button"
										onClick={handleGoogle}
										data-te-ripple-init
										data-te-ripple-color="light"
										className="mb-2 w-full flex justify-center items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-gradient-to-r from-sky-blue-600 to-sky-orange-600 hover:from-sky-blue-800 hover:to-sky-orange-800 hover:text-sky-blue-300 lg:mx-2 sm:mx-4 pb-2.5 pt-3  text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] transition duration-150 ease-in-out item-center"
										// style="background-color: #1da1f2"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											preserveAspectRatio="xMidYMid"
											viewBox="0 0 256 262"
											id="google"
											className="mx-2"
										>
											<path
												fill="#4285F4"
												d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
											></path>
											<path
												fill="#34A853"
												d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
											></path>
											<path
												fill="#FBBC05"
												d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
											></path>
											<path
												fill="#EB4335"
												d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
											></path>
										</svg>
										Continue with Google
									</button>
									{user && (
										<div>
											<h1>Welcome, {user.name}</h1>
											<p>Email: {user.email}</p>
										</div>
									)}
								</div>
								<div className="relative mb-6 w-full inline-flex justify-center items-center">
									<button
										type="button"
										data-te-ripple-init
										data-te-ripple-color="light"
										className="mb-2 w-full flex justify-center items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-gradient-to-r from-sky-blue-600 to-sky-orange-600 hover:from-sky-blue-800 hover:to-sky-orange-800 hover:text-sky-blue-300 lg:mx-2 sm:mx-4 pb-2.5 pt-3  text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] transition duration-150 ease-in-out item-center"
										// style="background-color: #1da1f2"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											className="mx-2"
										>
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
										Continue with GitHub
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default LogIn
