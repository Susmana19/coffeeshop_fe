import React from 'react'
import '../assets/css/check-promo.css'
import { Link } from 'react-router-dom'

const CheckPromo = () => {
  return (
    <>
        <div className="promo container d-flex justify-content-between py-5 shadow rounded-3 px-5 bg-white">
            <div className="w-25">
            <h1>Check our promo today!</h1>
            <p>Let's see the deals and pick yours!</p>
            </div>
            <Link to="/products"> <button className="button-get-started mt-5">See Promo</button></Link>
        </div>  
    </>
  )
}

export default CheckPromo