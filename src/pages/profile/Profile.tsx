import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import games from '../../img/SidebarLg/GamesLg.svg'
import { useLocation } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';

const Main = () => {
    return (
        <div className='Main'>
            <Sidebar backbutton={1}/>
            <div className='Container'>
                <Header login={1}/>
                <Profile />
            </div>
        </div>
    );
};

export default Main;