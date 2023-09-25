import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChallengePage from '../../components/ChallengePage/ChallengePage';

const Challenge = () => {

    return (
        <div className='Main'>
            <Sidebar backbutton={2}/>
            <div className='Container'>
                <Header login={1}/>
                <ChallengePage/>
            </div>
        </div>
    );
};

export default Challenge;