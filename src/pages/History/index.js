import React from 'react'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'


import '../../assets/css/histrory-cust.css'

import veggie_tomato_mix from '../../assets/images/image2.jpg'



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
                        <img src={veggie_tomato_mix} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Veggie tomato mix</h5>
                        <p className="card-text mb-0">IDR 30.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* list product */}
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={veggie_tomato_mix} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Veggie tomato mix</h5>
                        <p className="card-text mb-0">IDR 30.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* list product */}   
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={veggie_tomato_mix} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Veggie tomato mix</h5>
                        <p className="card-text mb-0">IDR 30.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* list product */}
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={veggie_tomato_mix} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Veggie tomato mix</h5>
                        <p className="card-text mb-0">IDR 30.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* list product */}
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={veggie_tomato_mix} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Veggie tomato mix</h5>
                        <p className="card-text mb-0">IDR 30.000</p>
                        <p className="card-text">Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* list product */}
                    {/* list product */}
                <div className="card mb-3 p-2 ms-3 mb-4" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={veggie_tomato_mix} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Veggie tomato mix</h5>
                        <p className="card-text mb-0">IDR 30.000</p>
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