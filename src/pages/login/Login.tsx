import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import NotLogin from '../../components/NotLogin/notLogin';

const Login = () => {
    return (
        <div className='Login'>
            <Sidebar backbutton={2}/>
            <div className='Container'>
                <Header login={0}/>
                <NotLogin />
            </div>
        </div>
    );
};

export default Login;