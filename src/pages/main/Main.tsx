import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';


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