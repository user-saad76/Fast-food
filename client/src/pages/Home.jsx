import FastfoodServices from "../components/FastfoodServices"
import FirstBanner from "../components/FirstBanner"
import Footer from "../components/Footer"
import Offers from "../components/Offers"
import { useFetch } from "../hooks/useFetch"



function Home() {
    
 
    return(
        <>
      <FirstBanner />
       <Offers />
      <FastfoodServices/>
       
        </>
    )
}
export default Home