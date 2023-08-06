import React from 'react'

const SessionExpiredMessage = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="bg-white px-6 py-4 rounded-lg shadow-md">
				<p className="text-red-600 text-lg font-semibold">
					Session expired. Please log in again.
				</p>
			</div>
		</div>
	)
}

export default SessionExpiredMessage
