import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/coffee 1.png'
import fb from '../assets/images/facebook.jpg'
import twitter from '../assets/images/twitter.jpg'
import ig from '../assets/images/instagram.jpg'

const FooterAuth = () => {
  return (
    <>
        <footer className="footer container-fluid d-flex mt-5 py-5 align-items-center">
                <div className="p-3 text-start" style={{width: '35vw'}}>
                <Link className="navbar-brand fw-bold fs-5" style={{color: 'black'}} href="#"><img src={logo} alt="" className="me-3" />Coffee Shop</Link>
                <p className="mt-3 fw-semibold">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                <div className="d-flex mb-3">
                    <img className="me-3" src={fb} alt="" />
                    <img className="me-3 bg-dark" src={twitter} alt="" />
                    <img src={ig} alt="" />
                </div>
                <small className style={{color: '#AFB5C0'}}>©2020CoffeeStore</small>
                </div>
                <div className="w-50">
                <div className="p-3 text-start">
                    <h5 style={{color: 'black'}}>Product</h5>
                    <div className="d-flex mt-3">
                        <Link className="pe-5 me-4">Download</Link>
                        <Link>Pricing</Link>
                    </div>
                    <div className="d-flex mt-3 mb-3">
                        <Link className="pe-5 me-4">Locations</Link>
                        <Link>Countries</Link>
                    </div>
                    <Link>Blog</Link>
                </div>
                <div className="p-3 text-start mt-3">
                    <h5 style={{color: 'black'}}>Engage</h5>
                    <div className="d-flex mt-3 justify-content-start">
                        <Link className="pe-5">Coffee Shop?</Link>
                        <Link>About us</Link>
                    </div>
                    <div className="d-flex mt-3 mb-3">
                    <Link className="pe-5 me-5">FAQ</Link>
                    <Link className="ms-3">Privacy Policy</Link>
                    </div>
                    <Link>Term of Service</Link>
                </div>
                </div>
        </footer>       
    </>
  )
}

export default FooterAuth