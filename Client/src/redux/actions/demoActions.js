export const SHOW_DEMO = 'SHOW_DEMO'
export const showDemo = (userId, demoOn, demoTopic, demoDate, demoTime) => {
	return {
		type: SHOW_DEMO,
		payload: { userId, demoOn, demoTopic, demoDate, demoTime },
	}
}

// demoActionTypes.js
export const SET_DEMO = 'SET_DEMO'

export const setDemo = (demoData) => ({
	type: SET_DEMO,
	payload: demoData,
})
