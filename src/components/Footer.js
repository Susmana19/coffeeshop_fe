// third party
import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/footer.css'
import logo from '../assets/images/coffee 1.png'
import fb from '../assets/images/facebook.jpg'
import twitter from '../assets/images/twitter.jpg'
import ig from '../assets/images/instagram.jpg'


const Footer = () => {
  return (
    <>
      <footer className="container-fluid align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="left-footer p-3 text-start" style={{width: '35vw'}}>
            <Link className="navbar-brand fw-bold fs-5" style={{color: 'black'}} href="#"><img src={logo} alt="" className="me-3" />Coffee Shop</Link>
            <p className="mt-3 fw-semibold">Coffee Shop is a store that sells some good meals, and especially coffee. We
              provide
              high quality beans</p>
            <div className="d-flex mb-3">
              <img className="me-3" src={fb} alt="" />
              <img className="me-3 bg-dark" src={twitter} alt="" />
              <img src={ig} alt="" />
            </div>
            <small className style={{color: '#AFB5C0'}}>©2020CoffeeStore</small>
          </div>
          <div className="right-footer w-50" style={{paddingLeft: '15vw'}}>
            <table className="table table-borderless">
              <tbody><tr>
                  <th><Link href>Product</Link> </th>
                  <th><Link href>Engage</Link> </th>
                </tr>
                <tr>
                  <td><Link href>Download</Link></td>
                  <td><Link href>Coffe Shop ?</Link></td>
                </tr>
                <tr>
                  <td><Link href>Pricing</Link></td>
                  <td><Link href>FAQ</Link></td>
                </tr>
                <tr>
                  <td><Link href>Locations</Link></td>
                  <td><Link href>About Us</Link></td>
                </tr>
                <tr>
                  <td><Link href>Countries</Link></td>
                  <td><Link href>Privacy Policy</Link></td>
                </tr>
                <tr>
                  <td><Link href>Blog</Link></td>
                  <td><Link href>Term and Service</Link></td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer