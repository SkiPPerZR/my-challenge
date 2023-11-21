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
            console.log('isAuth: '+isAuth)
        } else if (newAuth === 'false'){
            setIsAuth(false)
            console.log('isAuth: '+isAuth)
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