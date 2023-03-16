import React from 'react'
import '../assets/css/check-promo.css'

const CheckPromo = () => {
  return (
    <>
        <div className="promo container d-flex justify-content-between py-5 shadow rounded-3 px-5 bg-white">
            <div className="w-25">
            <h1>Check our promo today!</h1>
            <p>Let's see the deals and pick yours!</p>
            </div>
            <a href="./product-cust.html"> <button className="button-get-started mt-5">See Promo</button></a>
        </div>  
    </>
  )
}

export default CheckPromo