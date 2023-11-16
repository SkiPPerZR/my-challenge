import React, { FC, useContext, useEffect, useState} from 'react'
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
import { AuthContext, TokenContext } from '../../context'
import FormsSettings from '../../shared/forms/formSettings/FormsSettings'
import FormInterests from '../../shared/forms/formInterests/FormInterests'
import PostService from '../../api/PostService'
import { ICategory, ICategorySub, IData, IResponse } from '../../interfaces/IResponse'

{/* <GoogleOAuthProvider key='AIzaSyA6QQBIM3xnOAXkl0hTDFma615KZdLQVzQ' clientId="244707566602-vvchajhduhhbfd2jo5hrlopk43mjnu8p.apps.googleusercontent.com">...</GoogleOAuthProvider>; */}

interface SignUpProps {
    isOpenSignUp: Function;
}
 
const SignUp:FC<SignUpProps> = ({isOpenSignUp}) => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {isToken, setIsToken} = useContext(TokenContext);

    const [category, setCategory] = useState<ICategory[]>([]);
    const [categorySub, setCategorySub] = useState<ICategorySub[]>([]);

    const [chooseInterests, setChooseInterests] = useState(false);
    const [settingsProfile, setSettingsProfile] = useState(false);
    const [afterReg, setAfterReg] = useState(false);
    const [UserDateinput, setUserDateInput] = useState(false);
    const [chooseSignUp, setChooseSignUp] = useState(false);
    const [signUpVar, setSignUpVar] = useState(false);

    const closeSideBar = () => {
        if (afterReg) {
            isOpenSignUp(false)
            setIsAuth(true)
        } else {
            isOpenSignUp(false)
        }
    }
    const returnToChooseSignUp = () => {
        setUserDateInput(false)
        setChooseSignUp(false)
    }
    const chooseAfterReg = () => {
        fetchCategory()
        setAfterReg(true)
    }

    async function fetchCategory() {
        let categoryList = await PostService.getCategory();
        setCategory(categoryList.data.category);
        setCategorySub(categoryList.data.category_sub);
    }

    // useEffect(()=>{
    //     fetchCategory()
    // },[chooseInterests])
    
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
        <div className='SignUp_overlay' onMouseDown={closeSideBar}>
            <div onMouseDown={(e) => e.stopPropagation()} className='SignUp_box'>
                {chooseInterests
                    ? 
                        <>
                            <div className="SignUpClose">
                                <button onClick={closeSideBar}>
                                    <img src={close} alt="Закрыть" />
                                </button>
                            </div>
                            <div className="SignUpTitle">
                                <img src={icon} alt="Регистрация" />
                                <h2 className="title-25 semibold">Ваши интересы</h2>
                            </div> 
                            <FormInterests category={category} categorySub={categorySub} onClick={closeSideBar}/>
                        </>
                    :   
                        <>
                            {settingsProfile
                                ?
                                    <>
                                        <div className="SignUpClose">
                                            <button onClick={closeSideBar}>
                                                <img src={close} alt="Закрыть" />
                                            </button>
                                        </div>
                                        <div className="SignUpTitle">
                                            <img src={icon} alt="Регистрация" />
                                            <h2 className="title-25 semibold">Настройка профиля</h2>
                                        </div> 
                                        <FormsSettings onClick={()=>setChooseInterests(true)}/>
                                    </>
                                :
                                    <>
                                        {afterReg
                                            ?
                                                <>
                                                    <div className="SignUpClose">
                                                        <button onClick={closeSideBar}>
                                                            <img src={close} alt="Закрыть" />
                                                        </button>
                                                    </div>
                                                    <div className="SignUpTitle">
                                                        <img src={icon} alt="Регистрация" />
                                                        <h2 className="title-25 semibold">Добро пожаловать на<br/> площадку your challenge</h2>
                                                    </div> 
                                                    <div className='SignUpChooseAfterReg'>
                                                        <div className="SignUpChooseAfterRegGroup">
                                                            <ChooseSignUp icon={gear} name='Настроить профиль' choose={() => setSettingsProfile(true)}/>
                                                            <ChooseSignUp icon={lightning} name='Принять вызов' choose={closeSideBar}/>
                                                        </div>
                                                        <span className="text-14 medium notice">Вы можете всегда настроить профиль позже</span>
                                                    </div>
                                                </>
                                            :
                                                <>
                                                {UserDateinput
                                                    ?   
                                                        <>
                                                            <div className="SignUpClose">
                                                                <button onClick={returnToChooseSignUp}>
                                                                    <img src={close} alt="Закрыть" />
                                                                </button>
                                                            </div>
                                                            <div className="SignUpTitle">
                                                                <img src={icon} alt="Регистрация" />
                                                                <h2 className="title-25 semibold">Регистрация</h2>
                                                            </div>
                                                            <SignUpUserAndDate returnToChooseSignUp={returnToChooseSignUp} chooseAfterReg={chooseAfterReg}/>
                                                        </>
                                                    :
                                                        <>
                                                            {chooseSignUp
                                                                ?
                                                                <>
                                                                    <div className="SignUpClose">
                                                                        <button onClick={() => setChooseSignUp(false)}>
                                                                            <img src={close} alt="Закрыть" />
                                                                        </button>
                                                                    </div>
                                                                    <div className="SignUpTitle">
                                                                        <img src={icon} alt="Регистрация" />
                                                                        <h2 className="title-25 semibold">Регистрация</h2>
                                                                    </div> 
                                                                    {signUpVar
                                                                        ?
                                                                            <SignUpByNumber UserDate={() => setUserDateInput(true)}/>
                                                                        :
                                                                            <SignUpByEmail UserDate={() => setUserDateInput(true)}/>
                                                                    }
                                                                </>
                                                                :
                                                                <>
                                                                    <div className="SignUpClose">
                                                                        <button onClick={closeSideBar}>
                                                                            <img src={close} alt="Закрыть" />
                                                                        </button>
                                                                    </div>
                                                                    <div className="SignUpTitle">
                                                                        <img src={icon} alt="Регистрация" />
                                                                        <h2 className="title-25 semibold">Регистрация</h2>
                                                                    </div>
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
                                                        </>
                                                }
                                            </>
                                        }
                                    </>
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default SignUp;