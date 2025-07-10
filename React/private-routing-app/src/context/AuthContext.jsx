import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [isAuthinticated,setIsAuthinticated] = useState(false);

    const login = () => {
        setIsAuthinticated(true);
        navigate('/');
    }

    const logout = () => {
        setIsAuthinticated(false);
        // navigate('/login');
    }

    return (
        <AuthContext.Provider value={{isAuthinticated, setIsAuthinticated, login, logout}}>{children}</AuthContext.Provider>
    )
}