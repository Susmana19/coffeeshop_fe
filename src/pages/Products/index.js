import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useState, useEffect } from 'react';
import axios from 'axios';

import NavigationBar from '../../components/NavigationBar'
import NavigationBarAuth from '../../components/NavigationBarAuth';
import FavoriteAndPromo from '../../components/ProductsCategory/FavoriteAndPromo';

import '../../assets/css/product-cust.css'
import Coffee from '../../components/ProductsCategory/Coffee';
import NonCoffee from '../../components/ProductsCategory/NonCoffee';
import Foods from '../../components/ProductsCategory/Foods';
import AddOn from '../../components/ProductsCategory/AddOn';
import Footer from '../../components/Footer';
import PromoToday from '../../components/PromoToday';

const Products = () => {

  const [isLogin, setIsLogin] = useState(false)


  useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

    const [dataProducts, setDataProducts] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:5000/api/v1/products')
        .then((res) => setDataProducts(res.data.data))
        .catch((err)=> console.log(err))
    }, [])




  return (
    <>
        {localStorage.getItem('@userLogin') ? (<NavigationBar setIsLogin={setIsLogin}/>) : (<NavigationBarAuth/>)}  
        <div className="d-flex" style={{borderTop: '1px solid #9F9F9F', marginTop: '15vh', minHeight: '180vh', width: '100vw'}}>
        {/* Promo Today  Start*/}
        <div className="left-side-product" style={{minHeight: '180vh'}}>
          <br />
          <h3 className="text-center mt-3 fw-bold" style={{color: '#6A4029'}}>Promo Today</h3>
          <p className="text-center">Coupons will be updated every weeks. Check them out!</p>
          <br /><br />
            <PromoToday/>
          <br />
          <div className="d-grid gap-2">
            <button className="btn-apply-coupon" type="button">Apply Coupon</button>
          </div>
          <br /><br /><br /><br />
          <h6>Term and Conditon</h6>
          <ol className="ps-3 pe-0">
            <small><li>You can only apply 1 coupon per day</li></small>
            <small><li>It only for dine in</li></small>
            <small><li>Buy 1 get 1 only for new user</li></small>
            <small><li>Should make member card to apply coupon</li></small>
          </ol>
        </div>
        {/* Promo End */}
        {/* List Product Start */}
        <div className="container ps-0" style={{borderLeft: '1px solid #9F9F9F'}}>
          {/* Nav Tabs start */}
        <Tabs
        defaultActiveKey="fav-promo"
        id="justify-tab-example"
        className="mb-3 mt-0"
        justify
        >
            <Tab eventKey="fav-promo" title="Favorite & Promo">
                <FavoriteAndPromo setIsLogin={setIsLogin} />
            </Tab>
            <Tab eventKey="coffee" title="Coffee">
                <Coffee/>
            </Tab>
            <Tab eventKey="non-coffee" title="Non Coffee">
                <NonCoffee/>
            </Tab>
            <Tab eventKey="foods" title="Foods">
                <Foods/>
            </Tab>
            <Tab eventKey="add-on" title="Add-On">
                <AddOn data={dataProducts}/>
            </Tab>
        </Tabs>
          {/* Nav Tabs End */}
        </div>
        {/* List Product End */}
        </div>
        <Footer/>
    </>
  )
}

export default Products