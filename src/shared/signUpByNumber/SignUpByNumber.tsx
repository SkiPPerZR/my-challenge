import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpByNumber.scss'

interface SignUpByNumberProps {
    toggle: () => void;
}


const SignUpByNumber:FC<SignUpByNumberProps> = ({toggle}) => {
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
        if (!is_error_code && !is_error_phone && code) {
            navigate('/', {state:{login:1}})
            exit()
        }
    }

    return (
        <div className='SignUpByNumber'>
            <div className='SignUpByNumberInput'>
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
                <div className='SignUpByNumberCode'>
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
            <div className='SignUpByNumberState'>
                <div>
                    <span className='text-14 regular'>Шаг {code ? '2': '1'} из 2</span>
                </div>
                <div>
                    <span className='text-14 regular'>У вас уже есть аккаунт? Войти</span>
                    <button className='text-17 semibold' onClick={() => checkData(() => toggle())}>Отправить код</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpByNumber;