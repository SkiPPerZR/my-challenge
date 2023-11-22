import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RestoreAccountByEmail.scss'
import eye from '../../img/Eye.svg'
import eyeSlash from '../../img/Eye-slash.svg'
import { AuthContext, TokenContext } from '../../context';
import PostService from '../../api/PostService';

interface RestoreAccountByEmailProps {
    toggle: () => void;
    reChoose: Function;
}

const RestoreAccountByEmail:FC<RestoreAccountByEmailProps> = ({toggle, reChoose}) => {
    const [code, setCode] = useState(false);
    const [emailPass, setEmailPass] = useState(true);

    const [emailCheck, setEmailCheck] = useState('');
    const [is_error_email, setEmailError] = useState(false);
    
    const [codeCheck, setCodeCheck] = useState('');
    const [is_error_code, setCodeError] = useState(false);

    const [isBlocked, setIsBlocked] = useState(false);
    const [countdown, setCountdown] = useState(0);

    const {isToken, setIsToken} = useContext(TokenContext);

    async function fetchRestoreEmail(email : string) {
        let token = await PostService.restoreAccessByEmail(email);
        let newToken = token
        sessionStorage.setItem('isToken', newToken)
        sessionStorage.setItem('isAuth', 'true')
        setIsToken(newToken)
    }

    async function fetchCode(code : string, token : string) {
        let message = await PostService.sendEmailCode(code, token);
        // console.log('В отправке кода Token: '+token)
        if (message === token) {
            return true
        } else {
            return false
        }
    }

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

    const handleClick = () => {
        if (!isBlocked) {
            setIsBlocked(true);
            setCountdown(30);
            setTimeout(() => {
                setIsBlocked(false);
            }, 30000);
            checkEmail()
        }
    };

    function checkEmail() {
        setEmailCheck(emailCheck)
        const re = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if (!re.test(String(emailCheck).toLowerCase())) {
            setEmailError(true)
            setEmailPass(false)
        } else {
            setEmailError(false)
            fetchRestoreEmail(emailCheck)
            setEmailPass(true)
        }
    }

    async function checkCode() {
        if (codeCheck.length === 4) {
            setCode(true)
            let codeConfirmed = await fetchCode(codeCheck, isToken)
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
        }
    }

    async function checkCodeConfirmed() {
        if (code) {
            let checkError = await checkCode()
            setCodeError(checkError)
            // console.log('Проверка checkError: ' + checkError)
            // console.log('Проверка кода: ' + is_error_code)
            if (!checkError && !is_error_email && code) {
                console.log('Ты зарегестрирован!')
                //UserDate()
            }
        }
    }

    return (
        <div className='RestoreAccountByEmail'>
            {emailPass === true
                ?
                    <>
                        <div className='RestoreAccountByEmailInput'>
                            <p className="text-14 regular">Электронная почта</p>
                            <input type="text" className='text-17 semibold' value={emailCheck} onChange={event => setEmailCheck(event.target.value)}/>
                            {is_error_email
                                ?
                                <span className="text-14 medium error">Неверный формат электронной почты</span>
                                :
                                <></>
                            }
                        </div>
                        <div className='RestoreAccountByEmailState'>
                            <div>
                                <span className='text-14 regular' onClick={()=>reChoose()}>У вас уже есть аккаунт? Войти</span> 
                                <button className='text-17 semibold' onClick={() => checkEmailConfirmed()}>Восстановить</button>
                            </div>
                        </div>
                    </>
                : <></>
            }
            {code === true
                ?
                    <>
                        <div className='RestoreAccountByEmailCode'>
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
                        <div className='RestoreAccountByEmailState'>
                            <div>
                                <span className='text-14 regular' onClick={()=>reChoose()}>У вас уже есть аккаунт? Войти</span> 
                                <button className='text-17 semibold' onClick={() => checkCodeConfirmed()}>Отправить код</button>
                            </div>
                        </div>
                    </>
                : <></>
            }
        </div>
    );
};

export default RestoreAccountByEmail;