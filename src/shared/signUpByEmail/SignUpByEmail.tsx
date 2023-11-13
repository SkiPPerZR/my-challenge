import React, { FC, useContext, useEffect, useState } from 'react';
import './SignUpByEmail.scss'
import { AuthContext, UserToken } from '../../context';

import PostService from '../../api/PostService';
import CreateChallengeSwitch from '../buttons/CreateChallengeSwitch';

interface SignUpByEmailProps {
    toggle: () => void;
}

const SignUpByEmail:FC<SignUpByEmailProps> = ({toggle}) => {
    const [code, setCode] = useState(false);
    const [emailPass, setEmailPass] = useState(true);

    const [emailCheck, setEmailCheck] = useState('');
    const [is_error_email, setEmailError] = useState(false);

    const [passCheck, setPassCheck] = useState('');
    const [is_error_pass, setPassError] = useState(false);
    const [passRepeat, setPassRepeat] = useState('');
    const [is_error_pass_repeat, setPassErrorRepeat] = useState(false);
    
    const [codeCheck, setCodeCheck] = useState('');
    const [is_error_code, setCodeError] = useState(false);

    const [isTerms, setIsTerms] = useState(false)
    const [isPrivacy, setIsPrivacy] = useState(false)

    const [isBlocked, setIsBlocked] = useState(false);
    const [countdown, setCountdown] = useState(0);

    const {isAuth, setIsAuth} = useContext(AuthContext);
    // const {token, setToken} = useContext(UserToken);
    const [token, setToken] = useState<any>();

    async function fetchEmail(email : string, password : string) {
        let token = await PostService.emailSignUp(email, password);
        // console.log('В отправке почты Token: '+token)
        setToken(token)
    }

    async function fetchCode(code : string, token : string) {
        let message = await PostService.sendEmailCode(code, token);
        if (message === token) {
            return true
        } else {
            return false
        }
    }

    async function fetchPolicy(isTerms : String, isPrivacy: String, token : String) {
        let checkAgreePolicy = await PostService.sendAgreement(isTerms, isPrivacy, token);
        if (checkAgreePolicy === token) {
            // console.log('Политики подтверждены')
            return true
        } else {
            // console.log('Политики не подтверждены')
            return false
        }
    }

    const handleChangeTerms = () => {
        setIsTerms(!isTerms)
    }

    const handleChangePrivacy = () => {
        setIsPrivacy(!isPrivacy)
    }

    const handleClick = () => {
        if (!isBlocked) {
            setIsBlocked(true);
            setCountdown(30);
            setTimeout(() => {
                setIsBlocked(false);
            }, 30000);
            checkEmail()
            checkPass()
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (isBlocked) {
        timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        }
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isBlocked]);

    function checkEmail() {
        setEmailCheck(emailCheck)
        const re = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if (!re.test(String(emailCheck).toLowerCase())) {
            setEmailError(true)
        } else {
            setEmailError(false)
            setPassError(false)
        }
    }

    function checkPass() {
        setPassCheck(passCheck)
        const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
        if (!re.test(String(passCheck))) {
            setPassError(true)
        } else if (passRepeat !== passCheck) {
            setPassErrorRepeat(true)
        } else if (passCheck === '' || passRepeat !== passCheck) {
            setCode(false)
            setEmailError(true)
            setPassError(true)
        } else if (isTerms === false || isPrivacy === false) {
            setCode(false)
            setEmailError(false)
            setPassError(false)
        } else if (isTerms === true && isPrivacy === true && is_error_pass && is_error_pass_repeat) {
            setCode(false)
            setEmailError(false)
            setPassError(false)
        } else {
            setCode(true)
            setEmailError(false)
            setPassError(false)
            let tokenEmail = fetchEmail(emailCheck, passCheck)
            setToken(tokenEmail)
            setEmailPass(false)
        }
    }

    function checkTermsPrivacy() {
        if (isTerms === true && isPrivacy === true) {
            let terms = '1'
            let privacy = '1'
            // console.log('Policy'+ token)
            fetchPolicy(terms, privacy, token)
        }
    }

    async function checkCode() {
        if (codeCheck.length === 4) {
            setCode(true)
            let codeConfirmed = await fetchCode(codeCheck, token)
            if (!codeConfirmed) {
                // console.log('Я отработал если код неверен!')
                return true
            } else 
                return false
        } else return true
    }

    function checkEmailConfirmed() {
        if (emailPass) {
            checkEmail()
            checkPass()
        }
    }

    async function checkCodeConfirmed(exit = () => {}) {
        if (code) {
            checkTermsPrivacy()
            let checkError = await checkCode()
            setCodeError(checkError)
            // console.log('Проверка checkError: ' + checkError)
            // console.log('Проверка кода: ' + is_error_code)
            if (!checkError && !is_error_email && code) {
                // console.log('Ты зарегестрирован!')
                setIsAuth(true)
                exit()
            }
        }
    }

    return (
        // <UserToken.Provider value={{token, setToken}}>
        <div className='SignUpByEmail'>
            {emailPass === true
                ?
                    <>
                        <div className='SignUpByEmailInput'>
                            <p className="text-14 regular">Электронная почта</p>
                            <input type="text" className='text-17 semibold' value={emailCheck} onChange={event => setEmailCheck(event.target.value)}/>
                            {is_error_email
                                ?
                                <span className="text-14 medium error">Неверный формат электронной почты</span>
                                :
                                <></>
                            }
                        </div>
                        <div className='SignUpByEmailInput'>
                            <p className="text-14 regular">Пароль</p>
                            <input type="password" className='text-17 semibold' value={passCheck} onChange={event => setPassCheck(event.target.value)}/>
                            {is_error_pass
                                ?
                                <span className="text-14 medium error">Пароль должен содержать только латинсикие буквы алфавита, хотя бы одну заглавную букву, одну цифру и один символ</span>
                                :
                                <></>
                            }
                        </div>
                        <div className='SignUpByEmailInput'>
                            <p className="text-14 regular">Повторите пароль</p>
                            <input type="password" className='text-17 semibold' value={passRepeat} onChange={event => setPassRepeat(event.target.value)}/>
                            {is_error_pass_repeat
                                ?
                                <span className="text-14 medium error">Пароли должны совпадать</span>
                                :
                                <></>
                            }
                        </div>
                        <div className='SignUpByEmailInput'>
                            <p className="text-14 regular"></p>
                            <CreateChallengeSwitch id='isTerms' docUrl='/terms/Consent_to_distribution.html' title='Пользовательское соглашение' turn={handleChangeTerms}/>
                            <CreateChallengeSwitch id='isPrivacy' docUrl='/terms/Personal_Data_Processing_and_Privacy_Policy.html' title='Политика конфиденциальности' turn={handleChangePrivacy}/>
                            {!isTerms || !isPrivacy
                                ?
                                <span className="text-14 medium notice">Для продолжения вам необходимо согласиться с<br/> условиями пользования площадки</span>
                                :
                                <></>
                            }
                        </div>
                        <div className='SignUpByEmailState'>
                            <div>
                                <span className='text-14 regular'>Шаг 1 из 2</span>
                            </div>
                            <div>
                                <span className='text-14 regular'>У вас уже есть аккаунт? Войти</span> 
                                <button className='text-17 semibold' onClick={() => checkEmailConfirmed()}>Зарегистрировать</button>
                            </div>
                        </div>
                    </>
                : <></>
            }
            {code === true
                ?
                    <>
                        <div className='SignUpByEmailCode'>
                            <p className="text-14 regular">Код</p>
                            <input type="number" className='text-17 semibold' value={codeCheck} onChange={event => setCodeCheck(event.target.value)}/>
                            {is_error_code
                                ?
                                <span className="text-14 medium error">Неверный код</span>
                                :
                                <></>
                            }
                            <button className="text-14 regular" onClick={() => handleClick()} disabled={isBlocked}>
                                {isBlocked
                                    ? `${countdown} сек осталось до повторного запроса кода`
                                    : 'Отправить код повторно'
                                }
                            </button>
                        </div>
                        <div className='SignUpByEmailState'>
                            <div>
                                <span className='text-14 regular'>Шаг 1 из 2</span>
                            </div>
                            <div>
                                <span className='text-14 regular'>У вас уже есть аккаунт? Войти</span>
                                <button className='text-17 semibold' onClick={() => checkCodeConfirmed()}>Отправить код</button>
                            </div>
                        </div>
                    </>
                : <></>
            }
        </div>
        // </UserToken.Provider>
    );
};

export default SignUpByEmail;