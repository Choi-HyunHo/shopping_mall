import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";
import { MoonLoader } from "react-spinners";

const ProtectRouter = ({ children, requireAdmin }) => {
	const { userData, isLoading } = useAuthContext();

	if (isLoading) {
		return (
			<div className="h-[calc(100vh-12rem)] flex justify-center items-center">
				<MoonLoader size={100} color="#F96162" />
			</div>
		);
	}

	if (!userData || (requireAdmin && userData.isAdmin === false)) {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default ProtectRouter;
