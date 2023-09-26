import React, { useState } from 'react'
import './SignUp.scss'

import icon from '../../img/iconSignUp.svg'
import close from '../../img/close.svg'
import { useNavigate } from 'react-router-dom';

interface SignUpProps {
    isOpen: boolean;
    toggle: () => void;
}

export default function SignUp(props: SignUpProps) {
    const [code, setCode] = useState(false);
    const [phoneCheck, setPhoneCheck] = useState('');
    const [is_error_phone, setPhoneError] = useState(false);
    const [codeCheck, setCodeCheck] = useState('');
    const [is_error_code, setCodeError] = useState(false);

    const navigate = useNavigate();

    function checkPhone() {
        if (phoneCheck.length === 11) {
            setCode(true)
            setPhoneError(false)
        }
        else setPhoneError(true)
    }

    function checkCode() {
        if (codeCheck.length === 4) {
            setCode(true)
            setCodeError(false)
        }
        else setCodeError(true)
    }

    function checkData(exit = () => {}) {
        if (code)
            checkCode()
        checkPhone()
        console.log("Проверка условия: " + [!is_error_code && !is_error_phone && code])
        if (!is_error_code && !is_error_phone && code) {
            navigate('/', {state:{login:1}})
            exit()
        }
    }

    return (
        <>
            {props.isOpen && (
                <div className='SignUp_overlay' onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className='SignUp_box'>
                        <div className="SignUpTitle">
                            <img src={icon} alt="Регистрация" />
                            <h2 className="title-25 semibold">Регистрация</h2>
                            <button onClick={props.toggle}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                        <div className='SignUpInput'>
                            <p className="text-14 regular">Телефон</p>
                            <input type="number" className='text-17 semibold' value={phoneCheck} onChange={event => setPhoneCheck(event.target.value)}/>
                            {is_error_phone
                                ?
                                <span className="text-14 medium error">Ошибка: Неверный формат номера</span>
                                :
                                <></>
                            }
                        </div>
                        {code === true
                            ?
                            <div className='SignUpCode'>
                                <p className="text-14 regular">Код</p>
                                <input type="number" className='text-17 semibold' value={codeCheck} onChange={event => setCodeCheck(event.target.value)}/>
                                {is_error_code
                                    ?
                                    <span className="text-14 medium error">Ошибка: Неверный код</span>
                                    :
                                    <></>
                                }
                                <span className="text-14 regular">Отправить код повторно</span>
                            </div>
                            :
                            <></>
                        }
                        <div className='SignUpState'>
                            <div>
                                <span className='text-14 regular'>Шаг {code ? '2': '1'} из 2</span>
                            </div>
                            <div>
                                <span className='text-14 regular'>У вас уже есть аккаунт? Войти</span>
                                <button className='text-17 semibold' onClick={() => checkData(() => props.toggle())}>Отправить код</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};