import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChallengePage from '../../components/ChallengePage/ChallengePage';
import { AuthContext } from '../../context';

const Challenge = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    function Auth() {
        const newAuth = sessionStorage.getItem('isAuth')
        if (newAuth === 'true') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }

    useEffect(()=>{
        Auth()
    }, [isAuth])
    
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