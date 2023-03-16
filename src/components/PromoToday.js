import React from 'react'

import motherday from '../assets/images/image46.jpg'
import sundaymorning from '../assets/images/image43.jpg'
import halloween from '../assets/images/image45.jpg'

const PromoToday = () => {
  return (
    <>
        <div className="container mx-auto">
                {/* ganti komponen */}
                <div className="card mb-2 p-2 rounded-5" style={{maxWidth: '30rem', backgroundColor: '#88B788'}}>
                <div className="row g-0">
                    <div className="col-md-4 w-25">
                    <img src={motherday} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title fw-bold mb-0 p-0">HAPPY MOTHER’S DAY!</p>
                        <p className="card-text mb-0">Get one of our favorite menu for free !</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card mb-2 p-2 rounded-5" style={{maxWidth: '30rem', backgroundColor: '#F5C361'}}>
                <div className="row g-0">
                    <div className="col-md-4 w-25">
                    <img src={sundaymorning} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title fw-bold mb-0 p-0">Get a cup of coffee for free on sunday morning</p>
                        <p className="card-text mb-0">Only at 7 to 9 AM</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card mb-2 p-2 rounded-5" style={{maxWidth: '30rem', backgroundColor: '#88B788'}}>
                <div className="row g-0">
                    <div className="col-md-4 w-25">
                    <img src={motherday} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title fw-bold mb-0 p-0">HAPPY MOTHER’S DAY!</p>
                        <p className="card-text mb-0">Get one of our favorite menu for free !</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card mb-2 p-2 rounded-5" style={{maxWidth: '30rem', backgroundColor: '#C59378'}}>
                <div className="row g-0">
                    <div className="col-md-4 w-25">
                    <img src={halloween} className="img-fluid rounded-circle mt-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title fw-bold mb-0 p-0">HAPPY HALLOWEEN!</p>
                        <p className="card-text mb-0">Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>       
    </>
  )
}

export default PromoToday