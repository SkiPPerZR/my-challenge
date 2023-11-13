import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './LogInByEmail.scss'
import { AuthContext } from '../../context';
import PostService from '../../api/PostService';

interface LogInByEmailProps {
    toggle: () => void;
}

const LogInByEmail:FC<LogInByEmailProps> = ({toggle}) => {
    const [emailCheck, setEmailCheck] = useState('');
    const [is_error_email, setEmailError] = useState(false);
    const [passCheck, setPassCheck] = useState('');
    const [is_error_pass, setPassError] = useState(false);

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [isToken, setIsToken] = useState<any>('');

    const navigate = useNavigate();

    async function fetchEmail(email : string, password : string) {
        let token = await PostService.emailSignUp(email, password);
        setIsToken(token)
    }

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
        } else {
            setEmailError(false)
            setPassError(false)
            fetchEmail(emailCheck, passCheck)
        }
    }

    function checkData(exit = () => {}) {
        if (!is_error_email && !is_error_pass) {
            setIsAuth(true)
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
            <div className='SignUpByEmailState'>
                <div>
                    <span className='text-14 regular'>Шаг 1 из 2</span>
                </div>
                <div>
                    <span className='text-14 regular'>У вас уже есть аккаунт? Войти</span>
                    <button className='text-17 semibold' onClick={() => checkData(() => toggle)}>Отправить код</button>
                </div>
            </div>
        </div>
    );
};

export default LogInByEmail;