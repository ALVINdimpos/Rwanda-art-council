import {useState, createContext, useContext } from "react";

const authContext=createContext(null);

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)

    const Login=user=>{
        setUser(user)
    }
    const Logout=()=>{
        setUser(null)
    }
    return <authContext.Provider value={{user,Login,Logout}}>
    {children}
    </authContext.Provider>
}

export const useAutho=()=>{
    return useContext(authContext)
}