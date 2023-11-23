import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../context';
import SignUpByEmail from '../../shared/signUpByEmail/SignUpByEmail';
import SignUp from '../../components/SignUp/SignUp';

function Test() {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    function Auth() {
        const newAuth = sessionStorage.getItem('isAuth')
        if (newAuth === 'true') {
            setIsAuth(true)
        } else if (newAuth === 'false'){
            setIsAuth(false)
        }
    }

    useEffect(()=>{
        Auth()
    }, [isAuth])

    const [isOpenSignUp, setIsOpenSignUp] = useState(false);

    return (
        <div className='Main'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                {/* <Header login={isAuth}/> */}
                {/* <SignUp isOpenSignUp={setIsOpenSignUp}/> */}
            </div>
        </div>
    );
}

export default Test;