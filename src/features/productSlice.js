import { createSlice, AsyncThunk, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import products from "../reducers/products";

export const getProducts = createAsyncThunk("product/getProducts", async()=> {
    const response = await axios.get('http://localhost:5000/api/v1/products')
    return response.data.data
})

export const saveProducts = createAsyncThunk("product/saveProducts", async({name, price, image, category})=> {
    const response = await axios.post('http://localhost:5000/api/v1/products', {
        name,
        price,
        image,
        category
    })
    return response.data.data
})

export const updateProducts = createAsyncThunk("product/updateProducts", async({id, name, price, image, category})=> {
    const response = await axios.patch(`http://localhost:5000/api/v1/products/${id}`, {
        name,
        price,
        image,
        category
    })
    return response.data.data
})

export const deleteProducts = createAsyncThunk("product/deleteProducts", async(id)=> {
    await axios.delete(`hhttp://localhost:5000/api/v1/products/${id}`);
    return id
})

const productEntity = createEntityAdapter({
    selectId: (product) => product.id
})

const productSlice = createSlice({
    name: "product",
    initialState: productEntity.getInitialState(),
    extraReducers: {
        [getProducts.fulfilled] : (state, action) => {
            productEntity.setAll(state, action.payload);
        },
        [saveProducts.fulfilled] : (state, action) => {
            productEntity.addOne(state, action.payload);
        },
        [deleteProducts.fulfilled] : (state, action) => {
        productEntity.removeOne(state, action.payload);
        },
        [updateProducts.fulfilled] : (state, action) => {
        productEntity.updateOne(state, {id: action.payload.id, updates: action.payload });
        }
    }
});

export const productSelectors = productEntity.getSelectors(state => state.product)
export default productSlice.reducer;