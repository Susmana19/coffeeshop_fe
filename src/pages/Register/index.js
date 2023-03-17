import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../assets/css/auth.css'
import logo from '../../assets/images/coffee 1.png'
import FooterAuth from '../../components/FooterAuth';

import google from '../../assets/images/google.jpg'

const Register = () => {

  const navigate = useNavigate()

    useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
      navigate('/')
    }
  })

    const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    phone: ''
  })

  const handleRegister = (e) => {
    e.preventDefault()

    if (registerForm.email === '') {
      return alert("email is required")
    } else if (registerForm.password === '' ) {
      return alert("password is required") 
    } else if(registerForm.phone  === '') {
      return alert("phone is required")
    }


    axios({
      url: 'https://coffeeshopbe.cyclic.app/api/v1/auth/register',
      method: "POST",
      data: registerForm
    }).then((res)=> {
      console.log(res.data.data)
      navigate('/login')
    }).catch((err) => {
      console.log(err.message);
    })
  }


  return (
        <>
          <div className='auth'>
            <section className="auth-bg" style={{height: '213vh'}}></section>

            <section className="auth-form">
                  <nav className="navbar navbar-expand-lg bg-transparent px-5">
                    <div className="container">
                      <Link to='/' className="navbar-brand" ><img src={logo} alt="" className="me-3" />Coffee Shop</Link>
                      <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                          <li className="nav-item mx-2 nav-right">
                            <Link to='/register'  className="nav-link active fs-1 fw-bold" aria-current="page" style={{color: '#6A4029'}}>Sign Up</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>

                  <div className="form-detail text-center mt-5">

                    <form onSubmit={handleRegister} className="container px-5 text-start">
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Adress :</label>
                        <input
                        onChange={(e) => setRegisterForm({
                                ...registerForm,
                                email: e.target.value
                                })}     
                        type="email" 
                        className="form-control rounded-4 fs-5 px-4" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter your email adress" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
                        <input
                        onChange={(e) => setRegisterForm({
                                ...registerForm,
                                password: e.target.value
                                })}                           
                          type="password"
                          className="form-control rounded-4 fs-5 px-4" 
                          id="exampleInputPassword1" 
                          placeholder="Enter your password" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone number :</label>
                        <input
                        onChange={(e) => setRegisterForm({
                                ...registerForm,
                                phone: e.target.value
                                })}                          
                        type="tel" 
                        className="form-control rounded-4 fs-5 px-4" 
                        id="exampleInputPassword1" 
                        placeholder="Enter your phone number" />
                      </div>
                      <Link to='/forgot-password'  className="text-decoration-underline fw-bold fs-5" style={{color: '#6A4029', cursor: 'pointer'}}>Forgot Password?</Link>
                      <br />
                      <div className="d-grid gap-2 my-3">
                        <button className="btn-prime shadow" type="submit">Sign Up</button>
                        <button className="btn-tertiary mt-3 shadow" type="button"><img src={google} alt="" />&nbsp;&nbsp; Sign Up with Google</button>
                      </div>
                    </form>
                    <br />
                    <div className="container w-100 px-5">
                      <div className="container" style={{color: '#9F9F9F'}}>
                        <h5>Already have an account?</h5>
                      </div>
                    </div>
                    <br />    
                    <Link to='/login' ><button className="btn-auth mt-2 shadow">Login here</button></Link>            
                    <FooterAuth/>
                  </div>
            </section>
          </div>      
        </>

  )
}

export default Register