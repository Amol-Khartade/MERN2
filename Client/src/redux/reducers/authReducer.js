import { LOGIN_SUCCESS, LOGOUT } from '../actions/authAction'

const initialState = {
	userData: JSON.parse(localStorage.getItem('userData')) || null,
	token: null,
	isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				userData: {
					userId: action.payload.userId,
					expiryTimestamp: action.payload.expiryTimestamp,
					firstName: action.payload.firstName,
					lastName: action.payload.lastName,
					email: action.payload.email,
					isAuthenticated: true,
				},
				token: action.payload.token,
			}
			case LOGOUT:
      return {
        ...state,
        userData: null,
        isAuthenticated: false,
      };
		default:
			return state
	}
}

export default authReducer
