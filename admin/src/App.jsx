

import './App.css'
import Navbar from './components/Navbar';
import CreateOffers from './pages/CreateOffers';
import DeleteOffers from './pages/DeleteOffers';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbar/>
     <Routes>
       <Route path='/' element = {<Home/>} />
        <Route path='/home' element = {<Home/>} />  
         <Route path='/offers-page' element = {<CreateOffers/>} /> 
           <Route path='/offers-page-delete' element = {<DeleteOffers/>} />  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
