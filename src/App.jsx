import React from "react";
import Navbar from "./components/common/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
	return (
		<AuthContextProvider>
			<Navbar />
			<Outlet />
		</AuthContextProvider>
	);
}

export default App;
