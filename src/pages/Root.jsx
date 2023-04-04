import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router";

const Root = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Root;
