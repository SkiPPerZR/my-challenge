import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChallengePage from '../../components/ChallengePage/ChallengePage';
import { AuthContext } from '../../context';

const Challenge = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <div className='Main'>
            <Sidebar backbutton={2}/>
            <div className='Container'>
                <Header login={isAuth}/>
                <ChallengePage/>
            </div>
        </div>
    );
};

export default Challenge;