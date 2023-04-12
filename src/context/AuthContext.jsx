import React, { createContext, useContext, useEffect, useState } from "react";
import { onUserStateChange } from "../api/fbase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        onUserStateChange((user) => {
            setIsLoading(false);
            setUserData(user);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{ userData, uid: userData && userData.uid, isLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
