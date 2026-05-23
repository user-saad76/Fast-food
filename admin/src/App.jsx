

import './App.css'
import Navbar from './components/Navbar';
import CreateFirstBanner from './pages/CreateFirstBanner';
import CreateOffers from './pages/CreateOffers';
import CreateService from './pages/CreateService';
import DeleteOffers from './pages/DeleteOffers';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import UpdateOffers from './pages/UpdateOffers';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { useFetch } from '../../client/src/hooks/useFetch';
import AuthProvider from './contexts/AuthProvider';

function App() {
//  const {data,error,loading}  = useFetch("http://localhost:7000/admin/me")
  //     console.log("admin-data",data)
  
 
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
     <Routes>
       <Route path='/' element = {<Home/>} />
        <Route path='/home' element = {<Home/>} />  
         <Route path='/offers-page' element = {<CreateOffers/>} /> 
          <Route path='/banner-page' element = {<CreateFirstBanner/>} /> 
           <Route path='/service-page' element = {<CreateService/>} /> 
           <Route path='/offers-page-delete' element = {<DeleteOffers/>} /> 
           <Route path='/offers-page-update' element = {<UpdateOffers/>} />  
           <Route path='/sign-up' element = {<SignUp/>} />  
            <Route path='/sign-in' element = {<SignIn/>} />  
    </Routes>
    </BrowserRouter>
     </AuthProvider>
    </>
  )
}

export default App
