import React from 'react'
import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';

import '../assets/css/testimoni.css'
import person1 from '../assets/images/person1.svg'
import person2 from '../assets/images/person2.svg'
import person3 from '../assets/images/person3.svg'
import star from '../assets/images/star.svg'

const Testimoni = () => {

    const [testi, setTesti] = useState([]);
    useEffect(() => {
      setTesti([
        {
            id: 1,
            name: "Viezh Robert",
            image: person1,
            address: "Warsaw, Poland",
            rating: '4.5',
            description: "“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!“",
        },
        {
            id: 2,
            name: "Yessica Christy",
            image: person2,
            address: "Shanxi, China",
            rating: '4.7',
            description: "“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte“",
        },
        {
            id: 3,
            name: "Kim Young Jou",
            image: person3,
            address: "Seoul, South Korea",
            rating: '4.8',
            description: "“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!“",
        },        
      ]);
    }, []);

  return (
    <>
        <div className="container text-center my-1">
        <h2 className='fs-1'>Loved by Thousands of Happy Customer</h2>
        <p className='fs-5'>These are the stories of our customers who have visited us with great pleasure.</p>
        </div>

        <div className="testimoni container-fluid" style={{width: '50vw', marginLeft: '24vw'}}>
            <Carousel variant="dark" style={{width: '50vw'}}>
                {testi.map((item)=> (
                    <Carousel.Item>
                            <div className="card mb-2 p-2 rounded-3" style={{maxWidth: '50rem', height: '50vh', border: 'solid', borderWidth: 2, borderColor:'#6A4029'}}>
                                <div className="row g-0" style={{paddingLeft: '6vw', paddingRight: '6vw'}}>
                                    <div className="col-md-4 w-25">
                                    <img src={item.image} className="img-fluid rounded-circle mt-1 w-100" alt="..." />
                                    </div>
                                    <div className="col-md-8 d-flex">
                                    <div className="card-body">
                                        <p className="card-title fs-4 fw-bold mb-0 p-0">{item.name}</p>
                                        <small className="card-text fs-5 mb-0 text-muted"> {item.address} </small>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <p className='fs-5'>{item.rating}</p>
                                        <img src={star} alt="" style={{maxWidth: '2vw', marginBottom: '3vh'}} />
                                    </div>
                                    </div>
                                    <p className="mt-3 fs-5"> {item.description} </p>
                                </div>
                            </div>
                    </Carousel.Item>))}
            </Carousel>          
        </div>        
            
    </>
  )
}

export default Testimoni