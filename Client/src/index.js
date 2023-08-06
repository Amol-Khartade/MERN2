import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // Import Redux Provider
// import { UserProvider } from './context/UserContext'
import './index.css'
import App from './App'
import store from './redux/store' // Assuming you have set up your Redux store

// Save the Redux state to local storage before the page unloads
window.addEventListener('beforeunload', () => {
	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <UserProvider> */}
				<App />
			{/* </UserProvider> */}
		</Provider>
	</React.StrictMode>
)
