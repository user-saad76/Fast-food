import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthProvider";


function Protected( {children}) {
     const {user,error,loading} = useAuth();
     console.log(user)

     if(loading) return <h1>Loading......</h1>
     if(error) return <h1>Something went wrong</h1>
     if(!user?.name) return <Navigate to = {'/sign-in'} replace/>
    return <div>
          {children}
     </div>
    
    
}
export default Protected