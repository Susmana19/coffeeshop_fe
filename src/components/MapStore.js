import React from 'react'
import map from '../assets/images/peta.jpg'

const MapStore = () => {
  return (
    <>
        {/* Visit our store start */}
        <div className="container text-center py-5 my-5 w-50">
        <h1>Visit Our Store in the </h1>
        <h1>Spot on the Map Below</h1>
        <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
        </div>
        {/* Visit our store end  */}

        {/* background world map start  */}
        <div className="container">
        <img src={map} alt="" />
        </div>
         {/* background world map start */}


    </>
  )
}

export default MapStore