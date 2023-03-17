import React from 'react'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'


import '../../assets/css/histrory-cust.css'

import fried_rice from '../../assets/images/food-1.jpg'
import hazelnut_latte from '../../assets/images/image3.jpg'
import creamy_ice_latte from '../../assets/images/creamy-ice-latte.jpg'
import cold_brew from '../../assets/images/cold-brew.jpg'
import green_tea from '../../assets/images/green-tea.jpg'
import vanilla from '../../assets/images/vanilla.jpg'




const History = () => {



  return (
    <>
    <NavigationBar/>
        <div className='history'>
            <div className="text-center text-white mt-4">
                <h1>Let’s see what you have bought!</h1>
                <p>Long press to delete item</p>
            </div>
            <div className="container mx-auto d-flex flex-wrap justify-content-center">
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={fried_rice} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Summer Fried Rice</h5>
                        <p className="card-text mb-0">IDR 34.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={hazelnut_latte} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Hazelnut Latte</h5>
                        <p className="card-text mb-0">IDR 25.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={creamy_ice_latte} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Creamy Ice Latte</h5>
                        <p className="card-text mb-0">IDR 27.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>       
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cold_brew} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Cold Brew</h5>
                        <p className="card-text mb-0">IDR 30.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>         
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={green_tea} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Green Tea</h5>
                        <p className="card-text mb-0">IDR 15.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>         
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={vanilla} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Vanilla Ice Cream</h5>
                        <p className="card-text mb-0">IDR 25.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* list product */}                   

        
            </div>
        </div>

    
    <Footer/> 
    </>
  )
}

export default History