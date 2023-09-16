import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import TermsPolicy from '../../components/TermsPolicy/TermsPolicy';


const Main = () => {

    return (
        <div className='Main'>
            <Sidebar backbutton={1}/>
            <div className='Container'>
                <Header login={0}/>
                <TermsPolicy/>
            </div>
        </div>
    );
};

export default Main;