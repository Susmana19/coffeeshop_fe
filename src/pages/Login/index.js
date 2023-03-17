import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import '../../assets/css/auth.css'
import logo from '../../assets/images/coffee 1.png'
import google from '../../assets/images/google.jpg'
import FooterAuth from '../../components/FooterAuth';


const Login = () => {
  const navigate = useNavigate();
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  const [validate, setValidate] = useState({error: false, message: ''})
  
  const handleLogin = (e) => {
    e.preventDefault()
    axios({
      url: 'https://coffeeshopbe.cyclic.app/api/v1/auth/login',
      method: "POST",
      data: loginForm
    }).then((res)=> {
      console.log(res.data.data);
      localStorage.setItem('@userLogin', JSON.stringify(res.data.data))
      navigate('/')
    }).catch((err) => {
      setValidate({error: true, message: err.response.data.message})
    })
  }


  useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
      navigate('/')
    }
  })


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
                        <Link to='/login' className="nav-link active fs-1 fw-bold" aria-current="page" style={{color: '#6A4029'}}>Login</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="form-detail text-center mt-5">
                                
              {validate.error && (
              <div className="alert alert-danger" role="alert">
                {validate.message}
                <button type="button" className="btn-close ms-5" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              )}

                <form onSubmit={handleLogin} className="container px-5 text-start" >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email Adress :</label>
                    <input 
                      onChange={(e) => setLoginForm({
                        ...loginForm,
                        email: e.target.value
                      })}                     
                    type="email" 
                    className="form-control rounded-4 fs-5 px-4" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" 
                    placeholder="Enter your email adress" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
                    <input
                      onChange={(e) => setLoginForm({
                        ...loginForm,
                        password: e.target.value
                      })} 
                      type="password" 
                      className="form-control rounded-4 fs-5 px-4" 
                      id="exampleInputPassword1" 
                      placeholder="Enter your password"/>
                  </div>
                  <Link to='/forgot-password' className="text-decoration-underline fw-bold fs-5" style={{color: '#6A4029', cursor: 'pointer'}}>Forgot Password?</Link>
                  <br />
                  <div className="d-grid gap-2 my-3">
                    <button type='submit' className="btn-prime shadow">Login</button>
                    <button className="btn-tertiary mt-3 shadow" type="button"><img src={google} alt="" />&nbsp;&nbsp; Login with Google</button>
                  </div>
                </form>
                <br />
                <div className="container w-100 px-5">
                  <div className="container" style={{color: '#9F9F9F'}}>
                    <h5>Don't have an account?</h5>
                  </div>
                </div>
                <br />    
                <Link to='/register'><button className="btn-auth mt-2 shadow">Sign up here</button></Link>            
                <FooterAuth/>
              </div>
        </section>
      </div>
    </>
  )}
export default Login;