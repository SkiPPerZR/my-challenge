import React, { FC, useContext, useState } from 'react'
import './LogIn.scss'

import { useNavigate } from 'react-router-dom';
import icon from 'public/img/iconSignUp.svg'
import close from 'public/img/close.svg'
import number from 'public/img/Call.svg'
import email from 'public/img/email-signUp.svg'

import ChooseSignUp, { ChooseVariant } from '../../shared/chooseSignUp/ChooseSignUp';
import LogInByEmail from '../../shared/logInByEmail/LogInByEmail'
import LogInByNumber from '../../shared/logInByNumber/LogInByNumber'
import PostService from '../../api/PostService'
import { ProfileData } from '../../context'

interface LogInProps {
    isOpenLogIn: Function;
    reChoose: Function;
}

const LogIn: FC<LogInProps> = ({ isOpenLogIn, reChoose }) => {
    const { data, setData } = useContext(ProfileData);
    const [chooseLogIn, setChooseLogIn] = useState(false);
    const [logInVar, setLogInVar] = useState(false);

    const reChooseFunc = () => {
        isOpenLogIn(false)
        reChoose(true)
    }

    const closeSideBar = () => {
        if (chooseLogIn === true) {
            setChooseLogIn(false)
            isOpenLogIn(false)
        }
        isOpenLogIn(false)
    }

    return (
        <div className='LogIn_overlay' onMouseDown={closeSideBar}>
            <div onMouseDown={(e) => e.stopPropagation()} className='LogIn_box'>
                <div className="LogInClose">
                    <button onClick={closeSideBar}>
                        <img src={close} alt="Закрыть" />
                    </button>
                </div>
                <div className="LogInTitle">
                    <img src={icon} alt="Вход" />
                    <h2 className="title-25 semibold">Вход</h2>
                </div>
                {chooseLogIn
                    ?
                    <>
                        {logInVar
                            ?
                            <LogInByNumber toggle={closeSideBar} reChoose={reChooseFunc} />
                            :
                            <LogInByEmail toggle={closeSideBar} reChoose={reChooseFunc} />
                        }
                    </>
                    :
                    <>
                        <div className='LogInChoose'>
                            <ChooseSignUp theme={ChooseVariant.standart} icon={number} name='По номеру телефона' choose={() => setChooseLogIn(true)} type={() => setLogInVar(true)} />
                            <ChooseSignUp theme={ChooseVariant.standart} icon={email} name='По почте' choose={() => setChooseLogIn(true)} type={() => setLogInVar(false)} />
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