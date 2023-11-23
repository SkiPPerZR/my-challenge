import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInByNumber.scss'
import PostService from '../../api/PostService';
import { AuthContext, TokenContext } from '../../context';

interface LogInByNumberProps {
    toggle: () => void;
    reChoose: Function;
}


const LogInByNumber:FC<LogInByNumberProps> = ({toggle, reChoose}) => {
    const [code, setCode] = useState(false);
    const [phonePass, setPhonePass] = useState(true)

    const [phoneCheck, setPhoneCheck] = useState('');
    const [is_error_phone, setPhoneError] = useState(false);

    const [codeCheck, setCodeCheck] = useState('');
    const [is_error_code, setCodeError] = useState(false);
    const [is_error_phone_base, setErrorPhoneBase] = useState(false)

    const [isBlocked, setIsBlocked] = useState(false);
    const [countdown, setCountdown] = useState(0);
    
    const {isToken, setIsToken} = useContext(TokenContext);
    const {isAuth, setIsAuth} = useContext(AuthContext);

    async function fetchPhoneLogin(e: string) {
        const token = await PostService.sendPhoneLogin(e);
        if (token !== '401' && token) {
            const newToken = token
            sessionStorage.setItem('isToken', newToken)
            sessionStorage.setItem('isAuth', 'true')
            setIsToken(token)
        } else {
            setErrorPhoneBase(true)
        }
        
    }

    async function fetchCodeLogin(code : string, token : string) {
        const message = await PostService.sendPhoneCodeLogin(code, token);
        if (message === isToken) {
            return true
        } 
        return false
        
    }

    async function fetchCodeAgain(token : string) {
        const message = await PostService.sendPhoneCodeAgain(token);
        if (message === isToken) {
            return true
        } 
        return false
        
    }

    const handleClick = () => {
        if (!isBlocked) {
            setIsBlocked(true);
            setCountdown(30);
            setTimeout(() => {
                setIsBlocked(false);
            }, 30000);
            fetchCodeAgain(isToken)
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
    }, [isBlocked])

    function checkPhone() {
        // console.log('Я вызвался!' + phoneCheck.length)
        let cleanNumber = phoneCheck.replace(/[^0-9-]/g, '');
        const re = /^[78]9\d{9}$/
        if (!re.test(cleanNumber) || cleanNumber.length > 11 || cleanNumber.length < 10) {
            // console.log('Я вызвался снова!') 
            setPhoneError(true)
        } else if (is_error_phone_base === true) {
            setPhonePass(true)
        } else {
            cleanNumber = `+7${  cleanNumber.slice(1)}`;
            setPhoneError(false)
            setPhonePass(false)
            setCode(true)
            fetchPhoneLogin(cleanNumber)
            // console.log('Я вызвался!' + cleanNumber)
        }
    }

    async function checkCode() {
        if (codeCheck.length === 4) {
            setCode(true)
            const codeConfirmed = await fetchCodeLogin(codeCheck, isToken)
            if (!codeConfirmed) {
                // console.log('Я отработал если код неверен!')
                return true
            } return false
        } return true
    }

    function checkPhoneConfirmed() {
        if (phonePass) {
            checkPhone()
        }
    }

    async function checkCodeConfirmed() {
        if (code) {
            const checkError = await checkCode()
            setCodeError(checkError)
            // console.log('Проверка checkError: ' + checkError)
            // console.log('Проверка кода: ' + is_error_code)
            if (!checkError && !is_error_phone && code) {
                console.log('Ты вошел!')
                // eslint-disable-next-line no-restricted-globals
                location.reload()
                console.log(`isAuth: ${isAuth}`)
                toggle()
            }
        }
    }

    return (
        <div className='LogInByNumber'>
            {phonePass
                ?
                <>
                    <div className='LogInByNumberInput'>
                        <p className="text-14 regular">Телефон</p>
                        <input type="number" className='text-17 semibold' placeholder='+7/8' value={phoneCheck} onChange={event => setPhoneCheck(event.target.value)}/>
                        {is_error_phone
                            ?
                            <span className="text-14 medium error">Ошибка: Неверный формат номера введите с +7 / 8 и код должен начинаться с цифры 9</span>
                            :
                            <></>
                        }
                        {is_error_phone_base
                            ?
                            <span className="text-14 medium error">Ошибка: Неверный формат номера введите с +7 / 8 и код должен начинаться с цифры 9</span>
                            :
                            <></>
                        }
                    </div>
                    <div className='LogInByNumberState'>
                        <div>
                            <span className='text-14 regular' onClick={()=>reChoose()}>У вас нет аккаунта? Зарегистрируйтесь</span>
                            <button className='text-17 semibold' onClick={() => checkPhoneConfirmed()}>Вход</button>
                        </div>
                    </div>
                </>
                :  
                <></>
            }
            {code
                ?
                <>
                    <div className='LogInByNumberCode'>
                        <p className="text-14 regular">Код</p>
                        <input type="number" className='text-17 semibold' value={codeCheck} onChange={event => setCodeCheck(event.target.value)}/>
                        {is_error_code
                            ?
                            <span className="text-14 medium error">Ошибка: Неверный код</span>
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
                    <div className='LogInByNumberState'>
                        <div>
                            <span className='text-14 regular' onClick={()=>reChoose()}>У вас нет аккаунта? Зарегистрируйтесь</span> 
                            <button className='text-17 semibold' onClick={() => checkCodeConfirmed()}>Отправить код</button>
                        </div>
                    </div>
                </>
                :
                <></>
            }
        </div>
    );
};

export default LogInByNumber;