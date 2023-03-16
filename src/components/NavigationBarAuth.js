import { Link } from 'react-router-dom';
import '../assets/css/navigationBarAuth.css';
import logo from '../assets/images/coffee 1.png';

function NavigationBarAuth() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top py-4">
              <div className="container" style={{height: '5vh'}}>
                <Link to='/' className="navbar-brand"><img src={logo} alt="" className="me-3" />Coffee Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-2">
                      <Link to='/' className="nav-link actived nav-style" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link to='/products'  className="nav-link nav-style" href="./product-cust.html">Product</Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link to='/payment' className="nav-link nav-style">Your Cart</Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link to='/history' className="nav-link nav-style">History</Link>
                    </li>
                  </ul>
                  <div>
                    <Link to='/login'> <button className="button-login">Login</button></Link>
                    <Link to='/register'><button className="button-sign-up">Sign Up</button></Link>
                  </div>
                </div>
              </div>
      </nav>
    </>
  );
}

export default NavigationBarAuth;
