import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import NotLogin from '../../components/NotLogin/notLogin';
import { AuthContext } from '../../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <div className='Login'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                <Header login={isAuth}/>
                <NotLogin />
            </div>
        </div>
    );
};

export default Login;