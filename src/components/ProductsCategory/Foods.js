import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// import veggietomato from '../../assets/images/image2.jpg'
// import summer_fried_rice from '../../assets/images/image4.jpg'
// import drums_sticks from '../../assets/images/image23.jpg'
// import salty_rice from '../../assets/images/image24.jpg'

// const axios = require('axios')
const Foods = () => {
    
    const [dataProducts, setDataProducts] = useState([])

    useEffect(()=> {
        axios.get('https://coffeeshopbe.cyclic.app/api/v1/products?cat=foods')
        .then((res) => setDataProducts(res.data.data))
        .catch((err)=> console.log(err))
    }, [])

  return (
    <>     
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                {/* Container List Product Start */}
                <div className="container mx-5">
                <div className="row row-cols-1 row-cols-4 g-1">
                    <div className="col my-3 w-100 d-flex flex-wrap gap-5 ms-3">
                    {/* List Product Start*/}
                    {dataProducts.map((item)=> {
                        return(
                            <Link to={`/products/${item.id}`} className="d-flex flex-wrap" style={{textDecoration: 'none', color: 'black', fontStyle: 'normal'}}>
                                <div key={item.id} className="card card-product rounded-5 border-0 shadow px-1 mx-2 fw-bold" style={{width: '10vw', fontFamily: 'Poppins'}}>
                                    <img src={`https://coffeeshopbe.cyclic.app/uploads/images/${item.images[0
                                ].filename}`} style={{width: '8vw', height: '18vh'}} className="card-img-top rounded-circle mx-auto" alt="..." />
                                    <div className="card-body">
                                    <h5 className="card-title text-center fw-bolder title-menu h-75">{item.name}</h5>
                                    <h6 className="card-text text-center price">IDR {item.price}.000</h6>
                                    </div>
                                </div>                       
                            </Link>
                        )
                    })}

                    {/* List Product End */}
                    </div>
                </div>
                <p className="mt-5" style={{color: '#6A4029'}}>*the price has been cutted by discount appears</p>
                </div>
                {/* Container List Product End*/}
        </div>           
        
    </>
  )
}

export default Foods