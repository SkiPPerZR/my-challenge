import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import ButtonAccept from '../../shared/buttons/ButtonAccept';
import TimeAndBet from '../../shared/timeAndBet/TimeAndBet';

const Test = () => {
    return (
        <div className='Main'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                <Header login={1}/>
                <TimeAndBet/>
                <ButtonAccept/>
            </div>
        </div>
    );
};

export default Test;