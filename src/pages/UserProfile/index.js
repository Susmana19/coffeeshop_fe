import React from 'react'
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import '../../assets/css/profile.css'

import profil_picture from '../../assets/images/profile2.jpg'

const UserProfile = () => {
  return (
    <>
        <NavigationBar/>
        <div className='bg-user'>
            <div className='user-profile container-fluid'>
                <h1 className="ms-5 ps-5 text-white mt-3">User Profile</h1>
                <div className="container card p-4 mt-3">
                <div className="container d-flex">
                    <div className="left-side container text-center">
                    <img src={profil_picture} alt="" className="rounded-circle" style={{width: '10rem'}} />
                    <h2>Zulaikha</h2>
                    <p>zulaikha@gmail.com</p>
                    <div className="d-grid gap-2">
                        <button className="btn btn-warning" type="button">Choose Photo</button>
                        <button className="btn btn-dark" type="button">Remove Photo</button>
                        <br />
                        <button className="btn btn-outline-dark" type="button">Edit Password</button>
                        <h5>Do you want to save the change?</h5>
                        <div className="d-grid gap-3">
                        <button className="btn btn-dark" type="button">Save Change</button>
                        <button className="btn btn-warning" type="button">Cancel</button>
                        <br /><br />
                        <button className="btn btn-outline-dark" type="button">Log out</button>
                        </div>
                    </div>
                    </div>
                    <div className="right-side card container p-3 ms-3 h-50" style={{borderBottom: '10px solid brown'}}>
                        <div className="d-flex justify-content-between">
                            <h3>Contacts</h3>
                            <img src="./assets/images/pencil.jpg" alt="" />
                        </div>
                        <div className="top-data d-flex flex-column flex-wrap" style={{height: '15rem'}}>
                            <div className="mb-3">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label w-100">Email adress :</label>
                            <div className="col-sm-10" style={{borderBottom: '2px solid grey', width: '20vw'}}>
                                <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="zulaikha17@gmail.com" />
                            </div>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label w-100">Delivery adress :</label>
                            <div className="col-sm-10" style={{borderBottom: '2px solid grey', width: '20vw'}}>
                                <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="Iskandar Street no. 67 Block A Near Bus Stop ascdadadadadda" />
                            </div>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label w-100">Mobile number :</label>
                            <div className="col-sm-10" style={{borderBottom: '2px solid grey', width: '20vw'}}>
                                <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="(+62)813456782" />
                            </div>
                            </div>
                        </div>
                    <h3>Details</h3> 
                    <div className="bottom-data d-flex flex-column flex-wrap" style={{height: '20rem'}}>
                        <div className="mb-3">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label w-100">Display Name :</label>
                        <div className="col-sm-10" style={{borderBottom: '2px solid grey', width: '20vw'}}>
                            <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="Zulaikha" />
                        </div>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label w-100">First Name :</label>
                        <div className="col-sm-10" style={{borderBottom: '2px solid grey', width: '20vw'}}>
                            <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="Zulaikha" />
                        </div>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label w-100">Last Name :</label>
                        <div className="col-sm-10" style={{borderBottom: '2px solid grey', width: '20vw'}}>
                            <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="Zulaikha" />
                        </div>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label w-100">DD/MM/YY :</label>
                        <div className="col-sm-10" style={{borderBottom: '2px solid grey', width: '20vw'}}>
                            <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="03/04/90" />
                        </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center gap-5">
                        <div>
                            <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div>
                        <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Female
                        </label>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <br/><br/>
        </div>
        <Footer/>
    
    </>
  )
}

export default UserProfile