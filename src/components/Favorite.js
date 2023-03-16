import React from 'react'

import ceklist2 from '../assets/images/ceklis-small.svg'
import hazelnutLatte from '../assets/images/image22.jpg'

const Favorite = () => {
  return (
    <>
       {/* Here is people favourite start */}
        <div className="title-fav container-fluid text-center py-5 my-5">
            <h1>Here is People’s Favorite</h1>
            <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        </div>
        {/* Here is people favourite end */}

        {/* Product Favourite start */}

        <div className="container d-flex justify-content-between">
        {/* per product start*/}
        <div className="card border-1 rounded-3 shadow px-5 py-5">
          <img src={hazelnutLatte} style={{width: '8vw'}} className="card-img-top rounded-circle mx-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fw-bolder title-menu h-75">Hazelnut Latte</h5>
          </div>
          {/* Ceklist */}
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>HazelnutSyrup</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Wanilla Whipped Cream</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Ice / Hot</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Sliced Banana on Top</p>
          </div>
          <br /><br /><br />
          <h3 className="card-text text-center price">IDR 34.000</h3>
          <a href><button className="button-sign-up mt-3 fs-5 fw-bold">Order Now</button></a>
        </div>

        <div className="card border-1 rounded-3 shadow px-5 py-5">
          <img src={hazelnutLatte} style={{width: '8vw'}} className="card-img-top rounded-circle mx-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fw-bolder title-menu h-75">Hazelnut Latte</h5>
          </div>
          {/* Ceklist */}
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>HazelnutSyrup</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Wanilla Whipped Cream</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Ice / Hot</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Sliced Banana on Top</p>
          </div>
          <br /><br /><br />
          <h3 className="card-text text-center price">IDR 34.000</h3>
          <a href><button className="button-sign-up mt-3 fs-5 fw-bold">Order Now</button></a>
        </div>

        <div className="card border-1 rounded-3 shadow px-5 py-5">
          <img src={hazelnutLatte} style={{width: '8vw'}} className="card-img-top rounded-circle mx-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center fw-bolder title-menu h-75">Hazelnut Latte</h5>
          </div>
          {/* Ceklist */}
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>HazelnutSyrup</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Wanilla Whipped Cream</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Ice / Hot</p>
          </div>
          <div className="d-flex container">
            <img src={ceklist2} alt="" style={{marginRight: '20px', marginTop: '5px', width: '1vw', height: '3vh'}} />
            <p>Sliced Banana on Top</p>
          </div>
          <br /><br /><br />
          <h3 className="card-text text-center price">IDR 34.000</h3>
          <a href><button className="button-sign-up mt-3 fs-5 fw-bold">Order Now</button></a>
        </div>        

        {/* per product end */}
        </div>
        
        
         {/* Product Favourite end */}

    </>
  )
}

export default Favorite