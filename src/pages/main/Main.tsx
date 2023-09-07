import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card, {CardVariant} from '../../shared/card/Card'


const Main = () => {
    return (
        <div className='Main'>
            <Sidebar />
            <div className='Container'>
                <Header />
                
            </div>
        </div>
    );
};

export default Main;