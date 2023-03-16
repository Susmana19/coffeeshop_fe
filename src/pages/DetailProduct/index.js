
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

//component
import NavigationBar from '../../components/NavigationBar'
import NavigationBarAuth from '../../components/NavigationBarAuth';
import Footer from '../../components/Footer'
import ButtonCount from '../../components/ButtonCount';
import ButtonLarge from '../../components/ButtonLarge';

//css
import '../../assets/css/product-detail.css'

//images
// import cold_brew from '../../assets/images/image25.jpg'
import regular from '../../assets/images/regular.jpg'
// import large from '../../assets/images/large.jpg'
import xl from '../../assets/images/xl.jpg'




const DetailProduct = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])
 
  //diambil dari react-router-dom
  let  { id } = useParams();
  
  const [dataProducts, setDataProducts] = useState([])
  useEffect(()=> {
    axios.get(`http://localhost:5000/api/v1/products/${id}`)
    .then((res) => setDataProducts(res.data.data))
    .catch((err)=> console.log(err))
    })
    
    const [dataImages, setDataImages] = useState([])
    useEffect(()=> {
    axios.get(`http://localhost:5000/api/v1/products/`)
    .then((res) => setDataImages(res.data.data))
    .catch((err)=> console.log(err))
    })


const [size, setSize] = useState(0);

  return (
    <>   
    {/* <pre>{JSON.stringify(dataProducts)}</pre> */}
      {localStorage.getItem('@userLogin') ? (<NavigationBar setIsLogin={setIsLogin}/>) : (<NavigationBarAuth/>)}  
        <div className="hero container-fluid py-5">
          <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item ><Link to={'/products'}> Favorite & Promo </Link> </Breadcrumb.Item>          
            <Breadcrumb.Item active>{dataProducts.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="container-fluid d-flex" style={{height: '125vh' }}>
            <div className="left-side container p-0 m-0 bg-transparent" style={{ border: 'none'}}>
              <div className="card pt-5 bg-transparent" style={{width: '30rem', border: 'none'}}>

            {dataImages.map((item)=> {
              if (item.id === id) {
                return(                                
                  <img src={`http://localhost:5000/uploads/images/${item.images[0].filename}`} className="card-img-top rounded-circle w-75 mx-auto" style={{height: '55vh'}} alt="..." ></img>
                )
              }})}    

                <div className="card-body">
                  <h1 className="card-title text-center title-menu-hero">{dataProducts.name}</h1>
                  <h2 className="card-title text-center">IDR {dataProducts.price}.000</h2>
                </div>
                <div className="d-grid gap-4">
                  <button className="btn-secondary mt-2 shadow" style={{width: '30vw', marginLeft: '2vw'}} type="button">Add to Cart</button>
                  <button className="btn-fourth mt-2 shadow" style={{width: '30vw', marginLeft: '2vw'}} type="button">Ask a Staff</button>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card mx-auto p-5 rounded-4" style={{width: '35rem', color: '#6A4029'}}>
                <div className="card-body fs-5">
                  <p>Delivery only on <strong>Monday to friday</strong>  at <strong>1 - 7 pm</strong> </p> 
                  <br />
                  <p>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract
                    the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>  
                </div>
                <div className="choose-size container">
                  <h3 className="text-center">Choose a Size</h3>
                  <br />
                  <div className="d-flex justify-content-around">
                      <button onClick={()=> {
                  setSize(size + 1)
                }} style={{border: 'none', backgroundColor: 'white'}}><img src={regular} alt="" /></button> 

                      <ButtonLarge />

                      <button style={{border: 'none', backgroundColor: 'white'}}><img src={xl} alt="" /></button>      
                  </div>
                </div>
              </div>
              <br />
              <div className="text-center">
                <h5 className="fw-bold">Choose Delivery Methods</h5>
                <br />
                <button type="button" className="btn-active">Dine in</button>
                <button type="button" className="btn-small mx-4">Door Delivery</button>
                <button type="button" className="btn-small">Pick up</button>
                <br /><br />
                <label htmlFor="appt">Set time :</label>
                <input className='text-center fw-bold' type="text" id="appt" name="appt" min="09:00" max="18:00" placeholder="Enter the time you’ll arrived" style={{border: 'none', borderBottom: '3px solid #9F9F9F', width: '20vw', marginLeft: '5px', background: 'none', outline: 'none'}} />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid d-flex btn-check-out mt-0 pt-0">
          <div className="card container h-25 border-0 rounded-4 p-3 shadow" style={{marginLeft: '10rem'}}>
            <div className="container-fluid d-flex align-items-center">

            {dataImages.map((item)=> {
              if (item.id === id) {
                return(                 
                    <img src={`http://localhost:5000/uploads/images/${item.images[0].filename}`} alt="" className="rounded-circle" style={{width: '25vw', height:'18vh'}} />
                )
              }
            })} 
                

              <div className="ms-3 pt-3 w-100">
                <h4 className='fw-bold'>{dataProducts.name}</h4>
                <p className="mb-0">x{size}  (Regular)</p>                     
                <p >x (Large)</p>        
              </div>


                <div className="container d-flex gap-5 w-50">
               <ButtonCount/>
               </div>
            </div>
          </div>
          <div className="container d-flex ms-5 w-75">
            <button className="btn-fifth w-50 fw-bold fs-3  rounded-3 shadow"><Link to='/payment' style={{textDecoration: 'none', color: 'black'}}>CHECK OUT</Link> </button>
          </div>
        </div> 
        <div className='footer-detail'>
          <Footer/>    
        </div>
    </>
  )
}

export default DetailProduct