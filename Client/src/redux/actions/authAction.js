export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export const loginSuccess = (token, userData) => {
	return {
		type: LOGIN_SUCCESS,
		payload: { token, userData },
	}
}
export const logout = () => {
	return {
		type: LOGOUT,
	}
}
