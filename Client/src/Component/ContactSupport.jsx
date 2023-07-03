import React from 'react'

const ContactSupport = () => {
	return (
		<>
			<div class="flex justify-center">
				<div class="w-full max-w-md">
					<div class="bg-white p-8 rounded shadow">
						<h2 class="text-2xl font-bold mb-6">Contact Support</h2>
						<form>
							<div class="mb-4">
								<label
									for="name"
									class="block text-gray-700 font-bold mb-2"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="John Doe"
									required
									class="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
								/>
							</div>
							<div class="mb-4">
								<label
									for="email"
									class="block text-gray-700 font-bold mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="john.doe@example.com"
									required
									class="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
								/>
							</div>
							<div class="mb-4">
								<label
									for="issue"
									class="block text-gray-700 font-bold mb-2"
								>
									Issue Type
								</label>
								<select
									id="issue"
									name="issue"
									class="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
								>
									<option value="technical">
										Technical Issue
									</option>
									<option value="billing">
										Billing Inquiry
									</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div class="mb-4">
								<label
									for="message"
									class="block text-gray-700 font-bold mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									placeholder="Describe your issue or message"
									required
									class="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
								></textarea>
							</div>
							<div class="flex justify-end">
								<button
									type="submit"
									class="px-4 py-2 bg-indigo-500 text-white font-semibold rounded"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactSupport
