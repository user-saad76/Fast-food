
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import Menu from './pages/Menu';
import Footer from './components/Footer';
import Offers from './components/Offers';
import Contect from './pages/Contect';
import InfoPage from './pages/InfoPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { useFetch } from './hooks/useFetch';

function App() {
  
    const {data,error,loading}  = useFetch("http://localhost:7000/users/me")
    console.log("user-data",data)
  return (
    <>
    <BrowserRouter>
      <Navbar  data={data}/>
    <Routes>
       <Route path='/' element = {<Home/>} />
        <Route path='/home' element = {<Home/>} />
        <Route path='/menu' element = {<Menu/>} />
         <Route path='/offers' element = {<Offers/>} />
           <Route path='/contect' element = {<Contect/>} />
            <Route path='/sign-up' element = {<SignUp/>} />
            {/* //<Route path='/food/:slug' element = {<DetailPage/>} /> */}
             <Route path='/offers/:slug' element = {<InfoPage/>} />
              <Route path='/sign-in' element = {<SignIn/>} />
             

     
  
    </Routes>
    <Footer/>
    </BrowserRouter>,
    </>
  )
}

export default App
