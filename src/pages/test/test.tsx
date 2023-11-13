import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context';
import SignUpByEmail from '../../shared/signUpByEmail/SignUpByEmail';
import SignUp from '../../components/SignUp/SignUp';

const Test = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    // const location = useLocation();
    // let login = 0;
    // if (location.state != null)
    //     login = location.state.login

    const [isOpenSignUp, setIsOpenSignUp] = useState(false);

    return (
        <div className='Main'>
            <Sidebar backbutton={0}/>
            <div className='Container'>
                {/* <Header login={isAuth}/> */}
                <SignUp isOpenSignUp={setIsOpenSignUp}/>
            </div>
        </div>
    );
};

export default Test;