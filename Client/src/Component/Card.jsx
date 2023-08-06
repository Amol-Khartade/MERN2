import React from 'react'

const Card = ({ title, data }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
			<div className="px-6 py-4 justify-center items-center">
				<div className="font-bold text-xl mb-2">{title}</div>
				<div className="text-gray-700 text-base inline-flex">
					{Object.keys(data).map((key, index) => (
						<p key={index}>
							<strong>{key}:</strong> {data[key]}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default Card
