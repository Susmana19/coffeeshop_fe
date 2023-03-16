import React, { useEffect, useState } from 'react'

//css
import '../../assets/css/style.css'

//components
import NavigationBarAuth from '../../components/NavigationBarAuth'
import HeroBanner from '../../components/HeroBanner'
import InfoStaffStoreCust from '../../components/InfoStaffStoreCust'
import InfoProvide from '../../components/InfoProvide'
import Favorite from '../../components/Favorite'
import MapStore from '../../components/MapStore'
import Partner from '../../components/Partner'
import Testimoni from '../../components/Testimoni'
import CheckPromo from '../../components/CheckPromo'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'



const Home = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])


  return (
    <> 
    {localStorage.getItem('@userLogin') ? (<NavigationBar setIsLogin={setIsLogin}/>) : (<NavigationBarAuth/>)}  
      <HeroBanner/>
      <InfoStaffStoreCust/>
      <InfoProvide/>
      <Favorite/>
      <MapStore/>
      <Partner/>
      <Testimoni/>
      <CheckPromo/>
      <div className='footer-home'>
      <Footer/>
      </div>
    </>
  )
}

export default Home