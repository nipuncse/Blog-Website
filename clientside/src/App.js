import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarParent from './Components/SidebarParent';


function App() {
	return (
		<>
			<div className="sidenav" >
				<SidebarParent />
			</div>


			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Register />}>
					</Route>
				</Routes>
			</BrowserRouter>

		</>
	);
}

export default App;
