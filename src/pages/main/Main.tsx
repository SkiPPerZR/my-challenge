import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card, {CardVariant} from '../../shared/card/Card'
import Section from '../../components/Section/Section';
import icon from '../../img/SidebarLg/GamesLg.svg'

const Main = () => {
    return (
        <div className='Main'>
            <Sidebar />
            <div className='Container'>
                <Header />
                <Section icon={icon} name='Видеоигры' count={12415}/>
            </div>
        </div>
    );
};

export default Main;