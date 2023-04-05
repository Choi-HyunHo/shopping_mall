import React, { createContext, useContext, useEffect, useState } from "react";
import { onUserStateChange } from "../../api/fbase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [userData, setUserData] = useState();

	useEffect(() => {
		onUserStateChange((user) => {
			setUserData(user);
		});
	}, []);

	return (
		<AuthContext.Provider value={{ userData }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
