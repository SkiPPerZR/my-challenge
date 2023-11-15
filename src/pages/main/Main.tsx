import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Section from '../../components/Section/Section';

import games from '../../img/SidebarLg/GamesLg.svg'
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context';

const Main = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    // const location = useLocation();
    // let login = 0;
    // if (location.state != null)
    //     login = location.state.login
    return (
        <div className='Main'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                <Header login={isAuth}/>
                <Section icon={games} name='Видеоигры' count={12415}/>
            </div>
        </div>
    );
};

export default Main;