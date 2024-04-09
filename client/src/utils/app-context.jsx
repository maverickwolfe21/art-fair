import decode from 'jwt-decode';
import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({});
    const navigate = useNavigate()


    const logout = () => {
        setState({
            ...state,
            user: {},
            token: ''
        })
        localStorage.removeItem('app_state')
        navigate('/login')
    }

    const login = ({ user, token }) => {
        const newState = {
            ...state,
            user,
            token
        }
        setState(newState)
        localStorage.setItem('app_state', JSON.stringify(newState))
        navigate("/")
    }

    const isTokenExpired = (token) => {
        // Decode the token to get its expiration time that was set by the server
        const decoded = decode(token);
        // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('app_state');
            logout()
            return true;
        }
        // If token hasn't passed its expiration time, return `false`
        return false;
    }

    const loggedIn = () => {
        const token = JSON.parse(localStorage.getItem('app_state') || '{}').token
        // If there is a token and it's not expired, return `true`
        return token && !isTokenExpired(token);
    }



    return (<AppContext.Provider value={{ state, setState, loggedIn, isTokenExpired, logout, login }}>
        {children}
    </AppContext.Provider>)
}
