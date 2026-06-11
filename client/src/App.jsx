
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
import Profile from './pages/Profile';
import AuthProvider from './contexts/AuthProvider';
import Protected from './pages/Protected';
import CartProvider from './contexts/CartProvider';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
    
  return (
    <>
    <AuthProvider>
      <CartProvider>
    <BrowserRouter>
      <Navbar />
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
               <Route path='/profile' element = {<Protected><Profile/></Protected>} />
                <Route path='/cart-page' element = {<Protected><CartPage/></Protected>} />
                 <Route path='/checkout' element = {<Protected><CheckoutPage/></Protected>} />
            
    </Routes>
    <Footer/>

   <ToastContainer
      position="top-right"
      autoClose={3000}
    />
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>
    </>
  )
}

export default App
