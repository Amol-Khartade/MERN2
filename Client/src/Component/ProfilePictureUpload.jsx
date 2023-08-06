import React, { useState, useRef } from 'react'
// import { FaUpload } from 'react-icons/fa'
import axios from 'axios'

const ProfilePictureUpload = () => {
	const fileInputRef = useRef(null)
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0])
	}

	const handleFileUpload = () => {
		if (selectedFile) {
			const formData = new FormData()
			formData.append('profilePicture', selectedFile)

			axios
				.post('http://localhost:5000/uploadProfilePicture', formData)
				.then((response) => {
					console.log('File uploaded successfully:', response.data)
					// Add any further logic or update the UI as needed
				})
				.catch((error) => {
					console.error('Error uploading file:', error)
					// Handle error if necessary
				})
		}
	}

	return (
		<div className="mx-auto p-20 bg-sky-blue-500">
			<input
				type="file"
				accept="image/*"
				style={{ display: 'none' }}
				onChange={handleFileChange}
				ref={fileInputRef}
        className="pt-20"
			/>
			<button
				className="inline-flex px-3 py-2 text-white text-sky-blue-600 border border-sky-blue-700 focus:bg-sky-blue-700 rounded-md mx-2 mb-3 text-[12px]"
				onClick={() => fileInputRef.current.click()} // Open file input when button is clicked
			>
				{/* <FaUpload size={20} color="blue" className="mx-2" /> */}
				Upload
			</button>
			<button
				// className="inline-flex px-3 py-2 text-white text-red-600 border border-red-700 focus:bg-red-700 rounded-md mx-2 mb-3 text-[12px]"
				onClick={handleFileUpload} // Call the handleFileUpload function when button is clicked
			>
				Upload Picture
			</button>
		</div>
	)
}

export default ProfilePictureUpload
