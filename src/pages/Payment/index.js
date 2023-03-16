import React from 'react'
import { Link } from 'react-router-dom'

//components
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'


//css
import '../../assets/css/payment-delivery.css'


//images
import card from '../../assets/images/card.jpg'
import bank from '../../assets/images/bank.jpg'
import cod from '../../assets/images/deliv.jpg'
import hazelnut_latte from '../../assets/images/image3.jpg'


const Payment = () => {
  return (
    <>
    <NavigationBar/>
    <div className='payment'>
            <h1 className="title container w-25 mt-5 pt-5" style={{marginLeft: '7vw', color: 'white'}}>Checkout your item now!</h1>
            <div className="payment-container container-fluid d-flex">
            {/* Left Side (Order Summary) Start */}
            <section className="left-side-payment rounded-4" style={{height: '115vh', width: '35vw'}}>
                {/* Order Summary Start */}
                <h3 className="text-center my-5">Order Summary</h3>
                <div className="card mb-2" style={{maxWidth: '40vw', border: 'none'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={hazelnut_latte} className="img-fluid rounded-4" alt="..." />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-text fw-bold m-0">Hezelnute Latte</h5>
                        <h6 className="card-text m-0">x1</h6>
                        <h6 className="card-text m-0">Regular</h6>
                    </div>
                    <h6>IDR 24.0</h6>
                    </div>
                </div>
                </div>
                <div className="card mb-2" style={{maxWidth: '40vw', border: 'none'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={hazelnut_latte} className="img-fluid rounded-4" alt="..." />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-text fw-bold m-0">Hezelnute Latte</h5>
                        <h6 className="card-text m-0">x1</h6>
                        <h6 className="card-text m-0">Regular</h6>
                    </div>
                    <h6>IDR 24.0</h6>
                    </div>
                </div>
                </div>
                {/* Order Summary End */}
                <hr />
                <br />
                {/* Bill  start*/}
                <div className="rincian d-flex align-items-center justify-content-between">
                <h5>SUBTOTAL</h5>
                <h5>IDR 140.000</h5>
                </div>
                <div className="rincian d-flex align-items-center justify-content-between">
                <h5>TAX &amp; FEES</h5>
                <h5>IDR 140.000</h5>
                </div>
                <div className="rincian d-flex align-items-center justify-content-between">
                <h5>SHIPPING</h5>
                <h5>IDR 140.000</h5>
                </div>
                <br /><br />
                <div className="total d-flex align-items-center justify-content-between">
                <h2>TOTAL</h2>
                <h2>IDR 140.000</h2>
                </div>
                {/* Bill  end*/}
            </section>
            {/* Left Side (Order Summary) End*/}
            {/* Right Side (Adress Detail & Payment Method) Start */}
            <section className="">
                {/* Adress Detail Start */}
                <div>
                {/* Written Adress Detail and Edit start */}
                <div className="d-flex justify-content-between" style={{width: '35vw'}}>
                    <h4 style={{color: 'white'}}>Address Detail</h4>
                    <Link href="#" style={{color: 'white', textDecoration: 'none', fontWeight: 700}}>Edit</Link>
                </div>
                {/* Written Adress Detail and Edit end */}
                {/*  Adress Detail Start */}
                <div className="card px-4 py-3" style={{width: '35vw'}}>
                    <p className="border-b"> <strong>Delivery</strong> to Iskandar Street</p>
                    <p className="border-b">Km 5 refinery road oppsite re
                    public road, effurun, Jakarta</p>
                    <p className="border-b">+62 81348287878</p>
                </div>
                {/* Adress Detail End*/}
                <br />
                <br />
                </div>
                {/* Adress Detail End */}
                {/* Payment Method Start*/}
                <div className="d-flex">
                <h4 style={{color: 'white'}}>Payment Method</h4>
                </div>
                {/* Table Paymnent Method Start */}
                <form action>
                <table className="card table table-hover py-3 px-4 rounded-4" style={{width: '35vw'}}>
                    <tbody><tr>
                        <td className="form-check d-flex align-items-center gap-3 fw-bold fs-5"> 
                        <input className="form-check-input ms-1" type="radio" name="flexRadioDefault" id={1} />
                        <label className="form-check-label" htmlFor={1}><img className="me-3" src={card} alt="" style={{borderRadius: '10px'}}/>Card
                        </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-check d-flex align-items-center gap-3 fw-bold fs-5">
                        <input className="form-check-input ms-1" type="radio" name="flexRadioDefault" id={2} defaultChecked />
                        <label className="form-check-label" htmlFor={2}><img className="me-3" src={bank} alt="" style={{borderRadius: '10px'}}/>Bank Account
                        </label>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-check d-flex align-items-center gap-3 fw-bold fs-5">
                        <input className="form-check-input ms-1" type="radio" name="flexRadioDefault" id={3} />
                        <label className="form-check-label" htmlFor={3}><img className="me-3" src={cod} alt="" style={{borderRadius: '10px'}} />Cash on Delivery
                        </label>
                        </td>
                    </tr>         
                    </tbody></table>
                </form>
                {/* Table Payment End */}
                {/* Payment Method End*/}
                {/* Button Confirm and Pay */}
                <button className="btn-secondary mt-5" type="button">Confirm and pay</button>         
            </section>
            {/* Right Side (Adress Detail & Payment Method) End */}
            </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default Payment