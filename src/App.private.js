import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({children}) => {

    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(true)

    useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
        setIsLogin(true)
    } else {
        setIsLogin(false)
    }
    }, [])

    return localStorage.getItem('@userLogin') ? children : navigate('/login')

}

export default PrivateRoute