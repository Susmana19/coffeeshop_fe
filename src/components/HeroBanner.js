import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/hero-banner.css'

const HeroBanner = () => {
  return (
    <>
        <section id="hero" className="container-fluid">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-7 text-white mt-lg-5 pt-5 pe-lg-5">
                        <h1>Start Your Day with Coffee and Good Meals</h1>
                        <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a
                            bigger smile!</p>
                        <Link to='/products' ><button className="button-get-started mt-3">Get Started</button></Link> 
                    </div>
                </div>
            </div>       
        </section>

    </>
  )
}

export default HeroBanner;