import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import NotLogin from '../../components/NotLogin/notLogin';
import { AuthContext } from '../../context';

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    function Auth() {
        const newAuth = sessionStorage.getItem('isAuth')
        if (newAuth === 'true') {
            setIsAuth(true)
        } else if (newAuth === 'false'){
            setIsAuth(false)
        }
    }

    useEffect(()=>{
        Auth()
    }, [isAuth])

    return (
        <div className='Login'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                <Header login={isAuth}/>
                <NotLogin />
            </div>
        </div>
    );
}

export default Login;