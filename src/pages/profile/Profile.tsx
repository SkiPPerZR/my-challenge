import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import games from '../../img/SidebarLg/GamesLg.svg'
import { useLocation } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import { AuthContext } from '../../context';

const Main = () => {
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
        <div className='Main'>
            <Sidebar backbutton={1}/>
            <div className='Container'>
                <Header login={isAuth}/>
                <Profile />
            </div>
        </div>
    );
};

export default Main;