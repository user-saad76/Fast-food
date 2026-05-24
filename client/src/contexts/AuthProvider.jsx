import React,{createContext, useContext} from 'react'
import { useFetch } from "../hooks/useFetch"
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

function AuthProvider({children}){
    const {data,error,loading}  = useFetch("http://localhost:7000/users/me")

    const [user,setUser] = useState(null)
    useEffect(()=>{
        if (data) setUser(data);
    },[data])
     
    // Logout function
  const logout = async () => {
    try {
      const response = await fetch(
        "http://localhost:7000/users/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );
      setUser(null);

      const result = await response.json();

      console.log(result);

    } catch (error) {
      console.log(error);
    }
  };
      
    return(
        <AuthContext.Provider value = {{user,error,loading,logout}}>
           {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider

 export const useAuth = ()=> useContext(AuthContext)