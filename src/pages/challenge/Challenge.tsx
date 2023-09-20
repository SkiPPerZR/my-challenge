import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChallengePage from '../../components/ChallengePage/ChallengePage';

const Challenge = () => {

    return (
        <div className='Challenge'>
            <Sidebar backbutton={1}/>
            <div className='Container'>
                <Header login={0}/>
                <ChallengePage/>
            </div>
        </div>
    );
};

export default Challenge;