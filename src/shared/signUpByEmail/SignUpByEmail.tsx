import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpByEmail.scss'

interface SignUpByEmailProps {
    toggle: () => void;
}


const SignUpByEmail:FC<SignUpByEmailProps> = ({toggle}) => {
    const [code, setCode] = useState(false);
    const [emailCheck, setEmailCheck] = useState('');
    const [is_error_email, setEmailError] = useState(false);
    const [codeCheck, setCodeCheck] = useState('');
    const [is_error_code, setCodeError] = useState(false);

    const navigate = useNavigate();

    function checkEmail() {
        setEmailCheck(emailCheck)
        const re = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if (!re.test(String(emailCheck).toLowerCase())) {
            setEmailError(true)
        } else {
            setCode(true)
            setEmailError(false)
        }
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
            checkEmail()
        if (!is_error_code && !is_error_email && code) {
            navigate('/', {state:{login:1}})
            exit()
        }
    }

    return (
        <div className='SignUpByEmail'>
            <div className='SignUpByEmailInput'>
                <p className="text-14 regular">Электронная почта</p>
                <input type="text" className='text-17 semibold' value={emailCheck} onChange={event => setEmailCheck(event.target.value)}/>
                {is_error_email
                    ?
                    <span className="text-14 medium error">Ошибка: Неверный формат электронной почты</span>
                    :
                    <></>
                }
            </div>
            {code === true
                ?
                <div className='SignUpByEmailCode'>
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
            <div className='SignUpByEmailState'>
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

export default SignUpByEmail;