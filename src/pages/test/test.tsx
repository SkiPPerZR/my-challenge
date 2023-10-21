import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';

const Test = () => {
    const location = useLocation();
    let login = 0;
    if (location.state != null)
        login = location.state.login
    return (
        <div className='Main'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                <Header login={login}/>
                
            </div>
        </div>
    );
};

export default Test;