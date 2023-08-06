import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import api from '../utils/api' // Import your API utility to make the API request
import { useDispatch, useSelector } from 'react-redux'
import { demoActions } from '../redux/actions/demoActions'
import { authAction } from '../redux/actions/authAction'

const CreateDemoForm = () => {
	const dispatch = useDispatch()

	// Access the userData, firstName, lastName, and email from the Redux store
	const userData = useSelector((state) => state.auth.userData)
	const userId = userData.userId
	const firstName = userData.firstName
	const lastName = userData.lastName
	const email = userData.email
	console.log(userData)

	// Define the initial form values
	const initialValues = {
		optionD: '',
		demoTopic: '',
		demoDate: '',
		demoTime: '',
	}

	const options = ['Linux', 'Cloud', 'Tools', 'Kubernetes', 'Web Development']
	//   const userData = JSON.parse(sessionStorage.getItem('userData'))

	// Define a function to handle form submission
	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			// Make the API request to save the New Demo form data
			await api.post('/createdemo', {
				...values,
				userId: userId, // Replace 'YOUR_USER_ID' with the actual user ID from your authentication system
			})

			// Handle successful submission (e.g., show success message)
			console.log('Demo data saved successfully')
		} catch (error) {
			console.error('Error:', error)
			// Handle error (e.g., show error message)
		} finally {
			setSubmitting(false)
		}
	}

	// Define the form validation function
	const validateForm = (values) => {
		const errors = {}

		if (!values.optionD) {
			errors.optionD = 'Required'
		}

		if (!values.demoTopic) {
			errors.demoTopic = 'Required'
		}

		if (!values.demoDate) {
			errors.demoDate = 'Required'
		}

		if (!values.demoTime) {
			errors.demoTime = 'Required'
		}

		return errors
	}

	return (
		<Formik
			initialValues={initialValues}
			validate={validateForm}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<div>
						<label htmlFor="optionD">Demo On</label>
						<Field
							as="select"
							name="optionD"
							id="optionD"
							className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
						>
							<option value="">Select an option</option>
							{options.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</Field>
						<ErrorMessage name="optionD" component="div" />
					</div>
					<div>
						<label htmlFor="demoTopic">Demo Topic</label>
						<Field
							as="textarea"
							name="demoTopic"
							id="demoTopic"
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Enter your Demo Topic"
						/>
						<ErrorMessage name="demoTopic" component="div" />
					</div>
					{/* <div>
            <label htmlFor="demoDate">Date</label>
            <Field
              type="date"
              name="demoDate"
              id="demoDate"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the date"
            />
            <ErrorMessage name="demoDate" component="div" />
          </div>
          <div>
            <label htmlFor="demoTime">Time</label>
            <Field
              type="time"
              name="demoTime"
              id="demoTime"
              className="appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the time"
            />
            <ErrorMessage name="demoTime" component="div" />
          </div> */}
					<div>
						<button type="submit" disabled={isSubmitting}>
							Create new Demo
						</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default CreateDemoForm
