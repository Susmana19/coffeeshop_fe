import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../assets/css/forgot-password.css'
import FooterAuth from '../../components/FooterAuth'
import logo from '../../assets/images/coffee 1.png'

const ForgotPassword = () => {

    const navigate = useNavigate()

    useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
        navigate('/')
    }
    })



  return (
    <>
        <div className='forgot-password'>
            <section className="auth-bg" style={{height: '180vh'}}></section>

            <section className="auth-form">
            <div className="container text-center mt-4">
                <Link to='/' className="navbar-brand fw-bolder fs-4"><img src={logo} alt="" className="me-3" />
                Coffee
                Shop</Link>
            </div>
            <div className="forgot-pass text-center mt-5">
                <h1 className="fw-bold">Forgot your password?</h1>
                <h4>Don’t worry, we got your back!</h4>
            </div>
            <div className="form-detail text-center mt-5">
                <form className="container px-5 text-start">
                <div className="mb-1">
                    <input type="email" className="form-control rounded-4 fs-5 px-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email adress to get link" />
                </div>
                <br />
                <div className="d-grid">
                    <button className="btn-prime fs-4 shadow" type="button">Send</button>
                </div>
                </form>
                <br />
                <Link href="#" className="click fs-6 mb-1">Click here if you didn’t receive any link in 2 minutes</Link>
                <p className="minute fw-bold fs-5">01:52</p>
                <button className="btn-secondary mt-2 shadow">Resend Link</button>
                <FooterAuth/>
            </div>
            </section>
        </div>
    </>
  )
}

export default ForgotPassword