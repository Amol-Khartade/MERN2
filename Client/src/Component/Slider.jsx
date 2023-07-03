import React, { useEffect, useRef, useState } from 'react'

import { herobg } from '../assets'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

const Slider = ({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) => {
	const [current, setCurrent] = useState(0)

	const next = () => {
		setCurrent((current) =>
			current === 0 ? slides.length - 1 : current - 1
		)
	}
	const prev = () => {
		setCurrent((current) =>
			current === slides.length - 1 ? 0 : current + 1
		)
	}

	useEffect(() => {
		if (!autoSlide) return
		const slideInterval = setInterval(next, autoSlideInterval)
		return () => clearInterval(slideInterval)
	}, [])

	return (
		<>
			<div className="overflow-hidden relative">
				<div
					className="flex transition-transform ease-out duration-500"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{slides}
				</div>
				<div className="absolute inset-0 flex justify-between items-center px-3">
					<button
						onClick={prev}
						className="p-1 rounded-full shadow bg-white-400 text-white-800 hover:bg-white-50"
					>
						<FaArrowCircleLeft size={40} />
					</button>

					<button
						onClick={next}
						className="p-1 rounded-full shadow bg-white-400 text-white-800 hover:bg-white-50"
					>
						<FaArrowCircleRight size={40} />
					</button>
				</div>
				<div className="absolute bottom-4 right-0 left-0">
					<div className="flex items-center justify-center gap-2">
						{slides.map((_, i) => (
							<div
								className={`transition-all w-3 h-3 bg-white-900 rounded-full ${
									current === i ? 'p-2' : 'bg-opacity-50'
								}`}
							></div>
						))}
					</div>
				</div>
				<div className="">
					<div className="flex items-center justify-center ">
						<div className="text-white-50 items-center justify-center">
							{slides.title}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Slider
