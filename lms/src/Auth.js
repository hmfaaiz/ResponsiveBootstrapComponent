import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from "universal-cookie";


const Auth = (props) => {
    const cookies = new Cookies();
    const navigate = useNavigate('');
    const location = useLocation('');
    const token = cookies.get("token")
    useEffect(() => {
        // const isLogin = localStorage.getItem("login")


        if ((token === undefined)) {
            console.log("token",token)
            navigate('/')
        }
        else if (location.pathname === "/") {
            navigate('/dashboard')
        }

    }, [])

    return (
        <>
            <props.Component />
        </>
    )
}

export default Auth