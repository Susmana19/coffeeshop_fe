import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../assets/css/NavigationBar.css'
import logo from '../assets/images/coffee 1.png';
import search from '../assets/images/search.svg'
import chat from '../assets/images/chat.jpg'
import profilePict from '../assets/images/profile.jpg'

const NavigationBar = ({setIsLogin, setKeyword}) => {

    // const [data, setData] = useState([])

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white fixed-top py-4">
                <div className="container px-3">
                    <Link to='/' className="navbar-brand" href="./index.html"><img src={logo} alt="" className="me-3" />Coffee Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-2">
                            <Link to='/' className="nav-link actived nav-style" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                            <Link to='/products' className="nav-link nav-style">Product</Link>
                            </li>
                            <li className="nav-item mx-2">
                            <Link to='/payment' className="nav-link nav-style">Your Cart</Link>
                            </li>
                            <li className="nav-item mx-2">
                            <Link to='/history' className="nav-link nav-style">History</Link>
                            </li>
                        </ul>
                        <div className='d-flex'>
                            <form className='d-flex bg-light me-3 px-3' style={{borderRadius: '15px', width: '15vw', height: '6vh'}}>
                                <img src={search} alt="" className='h-50 mt-2' ></img>
                                <input 
                                onChange={(e)=> setKeyword(e.target.value)}
                                type="text" 
                                className='w-100 border-0 bg-light ms-2' 
                                style={{borderRadius: '15px', outline: 'none'}} 
                                placeholder='Search'></input>
                            </form>
                            <Link href="./chat.html" className="me-5"><img src={chat} alt=""></img></Link>
                            <Link className='dropdown'><img src={profilePict} alt="" className="rounded-5 dropdown-toggle" data-bs-toggle="dropdown"></img>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/user">My Profile</Link></li>
                                    <li
                                     onClick={()=> {
                                        localStorage.removeItem('@userLogin')
                                        setIsLogin(false)
                                    }}
                                    ><Link class="dropdown-item" to="/login">Logout</Link></li>
                                </ul>
                            </Link>
                        </div>
                    </div>
                </div>
        </nav>    
    </>
  )
}

export default NavigationBar