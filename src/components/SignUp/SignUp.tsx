import React, { FC, useContext, useEffect, useState} from 'react'
import './SignUp.scss'
// import {useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import axios from 'axios'

import icon from '../../img/iconSignUp.svg'
import close from '../../img/close.svg'
import SignUpByNumber from '../../shared/signUpByNumber/SignUpByNumber';
import SignUpByEmail from '../../shared/signUpByEmail/SignUpByEmail';
import SignUpUserAndDate from '../../shared/signUpUserAndDate/SignUpUserAndDate'
import ChooseSignUp, { ChooseVariant } from '../../shared/chooseSignUp/ChooseSignUp';
import SocialSignUp from '../../shared/socialSignUp/SocialSignUp';

import number from '../../img/Call.svg'
import email from '../../img/email-signUp.svg'

import gear from '../../img/SettingsWhite.svg'
import skip from '../../img/Skip.svg'

import vk from '../../img/Sign_up/vk.svg'
import ya from '../../img/Sign_up/ya.svg'
import ap from '../../img/Sign_up/apple.svg'
import gl from '../../img/Sign_up/gmail.svg'
import { AuthContext, ImageContext, ProfileData, TokenContext } from '../../context'
import FormsSettings from '../../shared/forms/formSettings/FormsSettings'
import FormInterests from '../../shared/forms/formInterests/FormInterests'
import PostService from '../../api/PostService'
import { ICategory, ICategorySub, IData} from '../../interfaces/IResponse'

{/* <GoogleOAuthProvider key='AIzaSyA6QQBIM3xnOAXkl0hTDFma615KZdLQVzQ' clientId="244707566602-vvchajhduhhbfd2jo5hrlopk43mjnu8p.apps.googleusercontent.com">...</GoogleOAuthProvider>; */}

interface SignUpProps {
    isOpenSignUp: Function;
    reChoose: Function;
}
 
const SignUp:FC<SignUpProps> = ({isOpenSignUp, reChoose}) => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {isToken, setIsToken} = useContext(TokenContext);
    const {data, setData} = useContext(ProfileData);
    const {image, setImage} = useContext(ImageContext);

    const [dataCategory, setDataCategory] = useState<IData>({
        challenge_mode: [],
        category: [],
        category_sub: []
    });

    const [chooseInterests, setChooseInterests] = useState(false);
    const [settingsProfile, setSettingsProfile] = useState(false);
    const [afterReg, setAfterReg] = useState(false);
    const [UserDateinput, setUserDateInput] = useState(false);
    const [chooseSignUp, setChooseSignUp] = useState(false);
    const [signUpVar, setSignUpVar] = useState(false);

    const reChooseFunc = () => {
        isOpenSignUp(false)
        reChoose(true)
    }

    const closeSideBar = () => {
        if (afterReg) {
            isOpenSignUp(false)
            fetchProfileData()
            // console.log('Нынешний токен: '+ isToken)
            setIsAuth(true)
            let newToken = sessionStorage.getItem('isToken')
            getProfileData(newToken)
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        } else (
            isOpenSignUp(false)
        )
    }
    const returnToChooseSignUp = () => {
        setUserDateInput(false)
        setChooseSignUp(false)
    }
    const chooseAfterReg = () => {
        fetchCategory(isToken)
        setAfterReg(true)
    }

    async function fetchCategory(token: string) {
        let categoryList = await PostService.getCategory(token);
        setDataCategory(categoryList.data)
    }

    async function fetchProfileData() {
        await PostService.sendSettingProfile(data);
        // console.log('Отправка данных юзера'+JSON.stringify(data))
    }

    async function getProfileData(token: string | null) {
        setData(await PostService.getProfileData(token));
        // console.log('Получение данных юзера'+JSON.stringify(data))
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
                            <FormInterests dataCat={dataCategory} onClick={closeSideBar}/>
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
                                                            <ChooseSignUp theme={ChooseVariant.standart} icon={skip} name='Пропустить' choose={closeSideBar}/>
                                                            <ChooseSignUp theme={ChooseVariant.bright} icon={gear} name='Настроить профиль' choose={() => setSettingsProfile(true)}/>
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
                                                                            <SignUpByNumber UserDate={() => setUserDateInput(true)} reChoose={reChooseFunc}/>
                                                                        :
                                                                            <SignUpByEmail UserDate={() => setUserDateInput(true)} reChoose={reChooseFunc}/>
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
                                                                        <ChooseSignUp theme={ChooseVariant.standart} icon={number} name='По номеру телефона' choose={() => setChooseSignUp(true)} type={() => setSignUpVar(true)}/>
                                                                        <ChooseSignUp theme={ChooseVariant.standart} icon={email} name='По почте' choose={() => setChooseSignUp(true)} type={() => setSignUpVar(false)}/>
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