import React, { useState } from 'react'
import './SignUp.scss'
import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import axios from 'axios'

import icon from '../../img/iconSignUp.svg'
import close from '../../img/close.svg'
import SignUpByNumber from '../../shared/signUpByNumber/SignUpByNumber';
import SignUpByEmail from '../../shared/signUpByEmail/SignUpByEmail';
import ChooseSignUp from '../../shared/chooseSignUp/ChooseSignUp';
import SocialSignUp from '../../shared/socialSignUp/SocialSignUp';

import number from '../../img/Call.svg'
import email from '../../img/email-signUp.svg'
import vk from '../../img/Sign_up/vk.svg'
import ya from '../../img/Sign_up/ya.svg'
import ap from '../../img/Sign_up/apple.svg'
// import gl from '../../img/Sign_up/gmail.svg'

{/* <GoogleOAuthProvider key='AIzaSyA6QQBIM3xnOAXkl0hTDFma615KZdLQVzQ' clientId="244707566602-vvchajhduhhbfd2jo5hrlopk43mjnu8p.apps.googleusercontent.com">...</GoogleOAuthProvider>; */}

interface SignUpProps {
    isOpen: boolean;
    toggle: () => void;
}
 
export default function SignUp(props: SignUpProps) {

    const [chooseSignUp, setChooseSignUp] = useState(false);
    const [signUpVar, setSignUpVar] = useState(false);
    
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
        <>
            {props.isOpen && (
                <div className='SignUp_overlay' onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className='SignUp_box'>
                        <div className="SignUpTitle">
                            <img src={icon} alt="Регистрация" />
                            <h2 className="title-25 semibold">Регистрация</h2>
                            <button onClick={props.toggle}>
                                <img src={close} alt="Закрыть" onClick={() => setChooseSignUp(false)}/>
                            </button>
                        </div>    
                        {chooseSignUp
                            ?
                            <>
                                {signUpVar
                                    ?
                                        <SignUpByNumber toggle={props.toggle}/>
                                    :
                                        <SignUpByEmail toggle={props.toggle}/>
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
                    </div>
                </div>
            )}
        </>
    );
};