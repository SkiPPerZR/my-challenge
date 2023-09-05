import React from 'react';
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin';
import SidebarLogin from '../../components/SidebarLogin/SidebarLogin';
import NotLogin from '../../components/NotLogin/notLogin';

const Login = () => {
    return (
        <div className='Login'>
            <SidebarLogin />
            <div className='Container'>
                <HeaderLogin />
                <NotLogin />
            </div>
        </div>
    );
};

export default Login;