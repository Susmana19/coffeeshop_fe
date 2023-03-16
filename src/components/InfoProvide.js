import React from 'react'

import '../assets/css/info-provide.css'
import teamwork from '../assets/images/teamwork.jpg'
import ceklist from '../assets/images/ceklist.svg'

const InfoProvide = () => {
return (
    <>
        <div className="bg-teamwork container pt-5">
                <div className="card p-2 mx-auto" style={{maxWidth: '100vw', border: 'none'}}>
                <div className="row g-0 d-flex align-items-center justify-content-between">
                    <div className="col-md-4" style={{width: '35vw'}}>
                    <img src={teamwork} className="img-fluid rounded-circle mt-3" alt="..." ></img>
                    </div>
                    <div className="col-md-8" style={{maxWidth: '40vw'}}>
                    <div className="card-body w-100">
                        <h1 className="card-title">We Provide Good Coffee and Healthy Meals</h1>
                        <p className="card-text mb-0">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    </div>
                    <div className="d-flex container">
                        <img src={ceklist} alt="" style={{marginRight: '20px', width: '2vw', height: '5vh'}} />
                        <p>High quality beans</p>
                    </div>
                    <div className="d-flex container">
                        <img src={ceklist} alt="" style={{marginRight: '20px', width: '2vw', height: '5vh'}} />
                        <p>Healthy meals, you can request the ingredients</p>
                    </div>
                    <div className="d-flex container">
                        <img src={ceklist} alt="" style={{marginRight: '20px', width: '2vw', height: '5vh'}} />
                        <p>High quality beans</p>
                    </div>   
                    <div className="d-flex container">
                        <img src={ceklist} alt="" style={{marginRight: '20px', width: '2vw', height: '5vh'}} />
                        <p>Free member card with a minimum purchase of IDR 200.000.</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>            
    </>
  )
}

export default InfoProvide