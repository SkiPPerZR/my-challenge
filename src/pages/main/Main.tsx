import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Section from '../../components/Section/Section';
import games from '../../img/SidebarLg/GamesLg.svg'
import sport from '../../img/SidebarLg/SportLg.svg'

const Main = () => {

    return (
        <div className='Main'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                <Header login={1}/>
                <Section icon={games} name='Видеоигры' count={12415}/>
                <Section icon={sport} name='Спорт' count={1505407}/>
            </div>
        </div>
    );
};

export default Main;