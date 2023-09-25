import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import ButtonAccept from '../../shared/buttons/ButtonAccept';
import TimeAndBet from '../../shared/timeAndBet/TimeAndBet';
import RequirementItem from '../../shared/requirementItem/RequirementItem';

const Test = () => {
    return (
        <div className='Main'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                <Header login={1}/>
            </div>
        </div>
    );
};

export default Test;