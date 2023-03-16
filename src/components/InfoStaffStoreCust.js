import React from 'react'

import '../assets/css/info-staff-store-cust.css'
import staff from '../assets/images/icon1.jpg'
import store from '../assets/images/icon2.jpg'
import cust from '../assets/images/icon3.jpg'

const InfoStaffStoreCust = () => {
  return (
    <>
        <div className="box-1 container bg-white d-flex justify-content-center py-5 mb-5 shadow rounded-3">
        <div className="p-2 ms-3" style={{width: '25vw', border: 'none', borderRight: '2px solid #EEEFF2'}}>
          <div className="row g-0 ms-5">
            <div className="col-md-4">
              <img src={staff} className="img-fluid rounded-circle mt-3" alt="..." />
            </div>
            <div className="col-md-8 mt-3">
              <div className="card-body">
                <h3 className="card-title fw-bold">90+</h3>
                <p className="card-text">Staff</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 ms-3" style={{width: '25vw', border: 'none', borderRight: '2px solid #EEEFF2'}}>
          <div className="row g-0 ms-5">
            <div className="col-md-4">
              <img src={store} className="img-fluid rounded-circle mt-3" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-3">
                <h3 className="card-title fw-bold">30+</h3>
                <p className="card-text">Stores</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 ms-3" style={{width: '25vw', border: 'none'}}>
          <div className="row g-0 ms-5">
            <div className="col-md-4">
              <img src={cust} className="img-fluid rounded-circle mt-3" alt="..." />
            </div>
            <div className="col-md-8 mt-3">
              <div className="card-body">
                <h3 className="card-title fw-bold">800+</h3>
                <p className="card-text">Customer</p>
              </div>
            </div>
          </div>
        </div>
        </div>

    </>
  )
}

export default InfoStaffStoreCust