import React,{createContext, useContext, useEffect, useState} from 'react'
import { useFetch } from "../hooks/useFetch"

export const AuthContext = createContext();

function AuthProvider({children}){
   const {data,error,loading}  = useFetch("http://localhost:7000/admin/me")
    //  const {data:logout}  = useFetch("http://localhost:7000/admin/logout")

     const [admin,setAdmin] = useState(null)
    useEffect(()=>{
        if (data) setAdmin(data);
    },[data])
     
    // Logout function
  const logout = async () => {
    try {
      const response = await fetch(
        "http://localhost:7000/admin/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );
      setAdmin(null);

      const result = await response.json();

      console.log(result);
       window.location.href = '/';

    } catch (error) {
      console.log(error);
    }
  };
 
    
    return(
        <AuthContext.Provider value = {{admin,error,loading,logout }}>
           {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider

 export const useAuth = ()=> useContext(AuthContext)