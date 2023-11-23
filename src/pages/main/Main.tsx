import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import games from 'public/img/SidebarLg/GamesLg.svg'
import { AuthContext } from '../../context';

function Main() {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    function Auth() {
        const newAuth = sessionStorage.getItem('isAuth')
        if (newAuth === 'true') {
            setIsAuth(true)
        } else if (newAuth === 'false') {
            setIsAuth(false)
        }
    }

    useEffect(() => {
        Auth()
    }, [isAuth])
    return (
        <div className='Main'>
            <Sidebar backbutton={0} />
            <div className='Container'>
                <Header login={isAuth} />
                <Section icon={games} name='Видеоигры' count={12415} />
            </div>
        </div>
    );
}

export default Main;