import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInByEmail.scss'
import eye from '../../img/Eye.svg'
import eyeSlash from '../../img/Eye-slash.svg'
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
    const [showPassword, setShowPassword] = useState(false);
    
    const [codeCheck, setCodeCheck] = useState('');
    const [is_error_code, setCodeError] = useState(false);

    const [isBlocked, setIsBlocked] = useState(false);
    const [countdown, setCountdown] = useState(0);

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [isToken, setIsToken] = useState<any>('');

    const navigate = useNavigate();

    async function fetchLogin(email : string, password : string) {
        let message = await PostService.emailLogin(email, password);
        // console.log('В отправке почты и пароля Token: '+message.token)
        sessionStorage.setItem('isToken', message.token);
        setIsToken(message.token)
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

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
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
        if (passCheck === '') {
            setEmailError(true)
            setPassError(true)
         } else {
            setEmailError(false)
            setPassError(false)
            fetchLogin(emailCheck, passCheck)
        }
    }


    function checkEmailConfirmed() {
        checkEmail()
        checkPass()
        if (!is_error_email) {
            console.log('Ты вошел!')
            setIsAuth(true)
            toggle()
        }
    }

    return (
        <div className='LogInByEmail'>
            <div className='LogInByEmailInput'>
                <p className="text-14 regular">Электронная почта</p>
                <input type="text" className='text-17 semibold' value={emailCheck} onChange={event => setEmailCheck(event.target.value)}/>
                {is_error_email
                    ?
                    <span className="text-14 medium error">Неверный формат электронной почты</span>
                    :
                    <></>
                }
            </div>
            <div className='LogInByEmailInput'>
                <p className="text-14 regular">Пароль</p>
                <div className='LogInByEmailInputGroup'>
                    <input type={showPassword ? 'text' : 'password'} className='text-17 semibold' value={passCheck} onChange={event => setPassCheck(event.target.value)}/>
                    <button onClick={handleShowPassword}>
                        {showPassword
                            ? <img src={eye} alt="" />
                            : <img src={eyeSlash} alt="" />
                        }
                    </button>
                </div>
                {is_error_pass
                    ?
                    <span className="text-14 medium error">Пароль не верный</span>
                    :
                    <></>
                }
            </div>
            <div className='LogInByEmailState'>
                <div>
                    <span className='text-14 regular'>У вас нет аккаунта? Зарегистрируйтесь</span> 
                    <button className='text-17 semibold' onClick={() => checkEmailConfirmed()}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default LogInByEmail;