import React,{createContext, useContext} from 'react'
import { useFetch } from "../hooks/useFetch"

export const AuthContext = createContext();

function AuthProvider({children}){
    const {data,error,loading}  = useFetch("http://localhost:7000/users/me")
    //  const {data:logout}  = useFetch("http://localhost:7000/users/logout")
    
    return(
        <AuthContext.Provider value = {{user:data,error,loading}}>
           {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider

 export const useAuth = ()=> useContext(AuthContext)