import { useAuth } from "../contexts/AuthProvider";
import { Navigate } from "react-router";

function Protected({children}) {
     const {admin,error,loading} = useAuth();
     console.log(admin)

     if(loading) return <h1>Loading......</h1>
     if(error) return <h1>Something went wrong</h1>
     if(!admin?.name) return <Navigate to = {'/sign-in'} replace/>
    return <div>
          {children}
     </div>
    
    
}
export default Protected