import React, { FC, useState } from 'react'
import './LogIn.scss'

import icon from '../../img/iconSignUp.svg'
import close from '../../img/close.svg'
import number from '../../img/Call.svg'
import email from '../../img/email-signUp.svg'

import { useNavigate } from 'react-router-dom';
import ChooseSignUp, { ChooseVariant } from '../../shared/chooseSignUp/ChooseSignUp';
import LogInByEmail from '../../shared/logInByEmail/LogInByEmail'
import LogInByNumber from '../../shared/logInByNumber/LogInByNumber'

interface LogInProps {
    isOpenLogIn: Function;
}

const LogIn:FC<LogInProps> = ({isOpenLogIn}) => {

    const [chooseLogIn, setChooseLogIn] = useState(false);
    const [logInVar, setLogInVar] = useState(false);

    const closeSideBar = () => {
        isOpenLogIn(false)
    }

    const navigate = useNavigate();

    return (
        <div className='LogIn_overlay' onClick={closeSideBar}>
            <div onClick={(e) => e.stopPropagation()} className='LogIn_box'>
                <div className="SignUpClose">
                    <button onClick={closeSideBar}>
                        <img src={close} alt="Закрыть" />
                    </button>
                </div>
                <div className="SignUpTitle">
                    <img src={icon} alt="Вход" />
                    <h2 className="title-25 semibold">Вход</h2>
                </div> 
                {chooseLogIn
                    ?
                    <>
                        {logInVar
                            ?
                                <LogInByNumber toggle={closeSideBar}/>
                            :
                                <LogInByEmail toggle={closeSideBar}/>
                        }
                    </>
                    :
                    <>
                        <div className='LogInChoose'>
                            <ChooseSignUp theme={ChooseVariant.standart} icon={number} name='По номеру телефона' choose={() => setChooseLogIn(true)} type={() => setLogInVar(true)}/>
                            <ChooseSignUp theme={ChooseVariant.standart} icon={email} name='По почте' choose={() => setChooseLogIn(true)} type={() => setLogInVar(false)}/>
                        </div>
                        {/* <div className="SignUpBySocial">
                            <div className="SignUpBySocialGroup">
                                <SocialSignUp icon={vk}/>
                                <SocialSignUp icon={ya}/>
                                <SocialSignUp icon={gl}/>
                            </div>
                            <span className='text-12 regular'>Через социальные сети</span>
                        </div> */}
                    </>
                }
            </div>
        </div>
    );
};

export default LogIn;