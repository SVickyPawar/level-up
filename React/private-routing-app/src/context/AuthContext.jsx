import { createContext, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [isAuthinticated,setIsAuthinticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAuthinticated,setIsAuthinticated}}>{children}</AuthContext.Provider>
    )
}