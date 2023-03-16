import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { DetailProduct, Home, Login, Register, ForgotPassword, Products, Payment, History, UserProfile } from './pages';
import PageNotFound from './pages/PageNotFound';
import PrivateRoute from './App.private';
import AddProduct from './pages/AddProduct/index.js';
import EditProduct from './pages/EditProduct';


function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/forgot-password' element={<ForgotPassword/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/products/:id' element={<DetailProduct/>} /> 
                <Route path='/add-products' element={
                    <PrivateRoute>
                        <AddProduct/>
                    </PrivateRoute> } />             
                <Route path='/edit-products/:id' element={
                  <PrivateRoute>
                      <EditProduct/>
                  </PrivateRoute>} />
                <Route path='/payment' element={
                  <PrivateRoute>
                    <Payment/>
                  </PrivateRoute>} />
                <Route path='/history' element={
                  <PrivateRoute>
                    <History/>
                  </PrivateRoute>} />
                <Route path='/user' element={
                  <PrivateRoute>
                    <UserProfile/>
                  </PrivateRoute>} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
