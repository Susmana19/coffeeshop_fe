import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'

// import { Link } from 'react-router-dom';

import '../../assets/css/auth.css'
// import logo from '../../assets/images/coffee 1.png'

// import { saveProducts } from '../../features/productSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
    const [nameProduct, setNameProduct] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [preview, setPreview] = useState("")
    const [category, setCategory] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const loadImage = (e) => {
        const images = e.target.files[0]
        setImage(images)
        setPreview(URL.createObjectURL(images));
    }
    

    const saveProducts = async(e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", nameProduct);        
        formData.append("price", price)
        formData.append("image", image);
        formData.append("category", category)

        try {
            await dispatch(axios.post('http://localhost:5000/api/v1/products', formData, {
                headers: {
                    "Content-type": 'multipart/form-data'
                }
            }));        
        } catch (error) {
            console.log(error);
        }
        navigate('/products')      
    }

return (
    <>
        <NavigationBar/>
            <div className="form-detail text-center mx-auto bg-light" style={{marginTop: '15vh'}} >
                        <h1>ADD PRODUCT</h1>
                    <form onSubmit={saveProducts}  className="container px-5 text-start" style={{width: '50vw'}} >
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Product Name :</label>
                            <input value={nameProduct} onChange={(e)=> setNameProduct(e.target.value)} type="name" className="form-control rounded-4 fs-5 px-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Input the product name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Price :</label>
                            <input value={price} onChange={(e)=> setPrice(e.target.value)} type="number" className="form-control rounded-4 fs-5 px-4" id="exampleInputPassword1" placeholder="Input the price of product"/>
                        </div>
                        <div className="mb-3">
                            <label for="formFileLg" className="form-label">Choose a Picture</label>
                            <input onChange={loadImage} className="file-input form-control form-control-lg h-50" id="formFileLg" type="file" />
                        </div>
                        <div>
                            {preview && (
                                <div className='mb-3'>
                                    <img src={preview} alt="PreviewImage" style={{width: '15vw', height: '30vh', borderRadius:'100vw'}}></img>
                                </div>
                            )}
                        </div>
                        <div>
                            <label for="formSelect" className='form-label'> Select Category :</label>
                            <select onChange={(e)=> {
                                setCategory(e.target.value)
                                }}
                                id="formSelect" className="form-select fs-5" aria-label="Default select example">
                                <option selected disabled>Choose the Category :</option>
                                <option value="coffee" >Coffee</option>
                                <option value="non-coffee" >Non Coffee</option>
                                <option value="foods" >Foods</option>
                                <option value="add-on" >Add On</option>
                            </select>                        
                        </div>
                        <br />
                        <div className="d-grid gap-2 my-3">
                            <button type='submit' className="btn-prime shadow">Save Product</button>
                            <button className="btn-tertiary mt-3 shadow" type="button">Cancel</button>
                        </div>
                    </form>
            </div>     
        <Footer/>
    </>
  )
}

export default AddProduct