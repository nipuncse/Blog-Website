import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarParent from './Components/SidebarParent';
import { useState, createContext } from 'react';


export const UserContext = createContext()
function App() {

	// let navigate = useNavigate()

	const [currentUser, setCurrentUser] = useState(
		{
			username: undefined,
			password: undefined
		}
	)
	// const user = useContext(UserContext)
	// console.log(currentUser.username.length)
	return (
		<>
			<div className="sidenav" >
				<SidebarParent />
			</div>


			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/homepage" element={<Homepage />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/" element={<Register />}>
						</Route>
					</Routes>
				</BrowserRouter>
			</UserContext.Provider >

		</>
	);
}

export default App;
