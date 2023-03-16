import React from 'react'

import '../assets/css/testimoni.css'
import person1 from '../assets/images/testimoni1.jpg'
import star from '../assets/images/star.svg'

const Testimoni = () => {
  return (
    <>
        <div className="container text-center my-1">
        <h2>Loved by Thousands of Happy Customer</h2>
        <p>These are the stories of our customers who have visited us with great pleasure.</p>
        </div>

        <div className="testimoni container w-25">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className>
                    <div className="card mb-2 p-2 rounded-5" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                        <div className="col-md-4 w-25">
                        <img src={person1} className="img-fluid rounded-circle mt-1 w-100" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                        <div className="card-body">
                            <p className="card-title fw-bold mb-0 p-0">Viezh Robert</p>
                            <small className="card-text mb-0 text-muted">Warsaw, Poland</small>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <p>4.5</p>
                            <img src={star} alt="" style={{maxWidth: '2vw', marginBottom: '3vh'}} />
                        </div>
                        </div>
                        <p className="mt-3">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and
                        the coffee and
                        meals tho. I like it here!!
                        Very recommended!</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                {/* card */}
                <div className>
                    <div className="card mb-2 p-2 rounded-5" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                        <div className="col-md-4 w-25">
                        <img src="./assets/images/testi1.svg" className="img-fluid rounded-circle mt-1 w-100" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                        <div className="card-body">
                            <p className="card-title fw-bold mb-0 p-0">Viezh Robert</p>
                            <small className="card-text mb-0 text-muted">Warsaw, Poland</small>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <p>4.5</p>
                            <img src="./assets/images/star.svg" alt="" style={{maxWidth: '2vw', marginBottom: '3vh'}} />
                        </div>
                        </div>
                        <p className="mt-3">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and
                        the coffee and
                        meals tho. I like it here!!
                        Very recommended!</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className>
                    <div className="card mb-2 p-2 rounded-5" style={{maxWidth: '25rem'}}>
                    <div className="row g-0">
                        <div className="col-md-4 w-25">
                        <img src="./assets/images/testi1.svg" className="img-fluid rounded-circle mt-1 w-100" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                        <div className="card-body">
                            <p className="card-title fw-bold mb-0 p-0">Viezh Robert</p>
                            <small className="card-text mb-0 text-muted">Warsaw, Poland</small>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <p>4.5</p>
                            <img src="./assets/images/star.svg" alt="" style={{maxWidth: '2vw', marginBottom: '3vh'}} />
                        </div>
                        </div>
                        <p className="mt-3">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and
                        the coffee and
                        meals tho. I like it here!!
                        Very recommended!</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>        
            
    </>
  )
}

export default Testimoni