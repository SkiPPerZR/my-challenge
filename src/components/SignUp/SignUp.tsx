import React, { FC, useState } from 'react'
import './SignUp.scss'
// import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import axios from 'axios'

import icon from '../../img/iconSignUp.svg'
import close from '../../img/close.svg'
import SignUpByNumber from '../../shared/signUpByNumber/SignUpByNumber';
import SignUpByEmail from '../../shared/signUpByEmail/SignUpByEmail';
import SignUpUserAndDate from '../../shared/signUpUserAndDate/SignUpUserAndDate'
import ChooseSignUp from '../../shared/chooseSignUp/ChooseSignUp';
import SocialSignUp from '../../shared/socialSignUp/SocialSignUp';

import number from '../../img/Call.svg'
import email from '../../img/email-signUp.svg'

import gear from '../../img/Gear.svg'
import lightning from '../../img/Lightning.svg'

import vk from '../../img/Sign_up/vk.svg'
import ya from '../../img/Sign_up/ya.svg'
import ap from '../../img/Sign_up/apple.svg'
import gl from '../../img/Sign_up/gmail.svg'

{/* <GoogleOAuthProvider key='AIzaSyA6QQBIM3xnOAXkl0hTDFma615KZdLQVzQ' clientId="244707566602-vvchajhduhhbfd2jo5hrlopk43mjnu8p.apps.googleusercontent.com">...</GoogleOAuthProvider>; */}

interface SignUpProps {
    isOpenSignUp: Function;
}
 
const SignUp:FC<SignUpProps> = ({isOpenSignUp}) => {

    const [chooseSignUp, setChooseSignUp] = useState(false);
    const [signUpVar, setSignUpVar] = useState(false);

    const closeSideBar = () => {
        isOpenSignUp(false)
    }
    
    // const googleLogin = useGoogleLogin({
    //     flow: 'auth-code',
    //     onSuccess: async (codeResponse) => {
    //         console.log(codeResponse);
    //         const tokens = await axios.post(
    //             'https://uponblog.ru/api/user_registration_by_gl.php', {
    //                 code: codeResponse.code,
    //             });

    //         console.log(tokens);
    //     },
    //     onError: errorResponse => console.log(errorResponse),
    // });

    return (
        <div className='SignUp_overlay' onClick={closeSideBar}>
            <div onClick={(e) => e.stopPropagation()} className='SignUp_box'>
                <div className="SignUpTitle">
                    <img src={icon} alt="Регистрация" />
                    <h2 className="title-25 semibold">Регистрация</h2>
                    <button onClick={closeSideBar}>
                        <img src={close} alt="Закрыть" onClick={() => setChooseSignUp(false)}/>
                    </button>
                </div>    
                {chooseSignUp
                    ?
                    <>
                        {signUpVar
                            ?
                                <SignUpByNumber toggle={closeSideBar}/>
                            :
                                <SignUpByEmail toggle={closeSideBar}/>
                        }
                    </>
                    :
                    <>
                        <div className='SignUpChoose'>
                            <ChooseSignUp icon={number} name='По номеру телефона' choose={() => setChooseSignUp(true)} type={() => setSignUpVar(true)}/>
                            <ChooseSignUp icon={email} name='По почте' choose={() => setChooseSignUp(true)} type={() => setSignUpVar(false)}/>
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
                {/* Todo: Дописать логику отправки информации профиля */}
                {/* <SignUpUserAndDate /> */}
                {/* Todo: Выбор настроек пользователя или принять вызов */}
                {/* <div className='SignUpChooseActive'>
                    <div className="SignUpChooseActiveGroup">
                        <ChooseSignUp icon={gear} name='Настроить профиль' choose={() => setChooseSignUp(true)} type={() => setSignUpVar(true)}/>
                        <ChooseSignUp icon={lightning} name='Принять вызов' choose={() => setChooseSignUp(true)} type={() => setSignUpVar(false)}/>
                    </div>
                    <span className="text-14 medium notice">Вы можете всегда настроить профиль позже</span>
                </div> */}
            </div>
        </div>
    );
};

export default SignUp;