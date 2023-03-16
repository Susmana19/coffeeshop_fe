import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../../assets/css/page-not-found.css'


const PageNotFound = () => {
  return (
    <>
        <div className='page-not-found text-center'>
            <h1>404</h1>
            <h1>Page Not Found</h1>
            <Link to='/' ><Button variant="warning" className='fw-bold fs-3'>Back to Home</Button></Link> 
        </div>
    </>
  )
}

export default PageNotFound