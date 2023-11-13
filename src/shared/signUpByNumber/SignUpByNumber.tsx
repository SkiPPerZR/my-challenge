import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpByNumber.scss'
import PostService from '../../api/PostService';
import { AuthContext } from '../../context';
import CreateChallengeSwitch from '../buttons/CreateChallengeSwitch';

interface SignUpByNumberProps {
    toggle: () => void;
}

// test number: 9046487401 code 6028

// text number: 9001110933 code ****
const SignUpByNumber:FC<SignUpByNumberProps> = ({toggle}) => {
    const [code, setCode] = useState(false);
    const [phonePass, setPhonePass] = useState(true)

    const [phoneCheck, setPhoneCheck] = useState('');
    const [is_error_phone, setPhoneError] = useState(false);
    const [isNotice, setIsNotice] = useState();

    const [codeCheck, setCodeCheck] = useState('');
    const [is_error_code, setCodeError] = useState(false);

    const [isTerms, setIsTerms] = useState(false)
    const [isPrivacy, setIsPrivacy] = useState(false)

    const [isBlocked, setIsBlocked] = useState(false);
    const [countdown, setCountdown] = useState(0);

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [isToken, setIsToken] = useState<any>();

    const [phone, setPhone] = useState<string>('');

    async function fetchPhone(e: string) {
        let token : String = await PostService.sendPhone(e);
        // if (token === 'Данный телефон уже есть в системе') {
        //     setIsNotice(isNotice)
        // }
        setIsToken(token)
    }

    async function fetchCode(code : string, token : string) {
        let message = await PostService.sendPhoneCode(code, token);
        if (message === isToken) {
            return true
        } else {
            return false
        }
    }

    async function fetchPolicy(isTerms : String, isPrivacy: String, token : String) {
        let checkAgreePolicy = await PostService.sendAgreement(isTerms, isPrivacy, token);
        if (checkAgreePolicy === isToken) {
            // console.log('Политики подтверждены')
            return true
        } else {
            // console.log('Политики не подтверджены')
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
            // TODO: Разобраться с повторным запросом кода для телефона
            // checkPhone()
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
        if (phoneCheck.length != 10) { 
            setCode(false)
            setPhoneError(true)
        }
        if (isTerms === false || isPrivacy === false) {
            setCode(false)
        } else {
            setCode(true)
            setPhoneError(false)
            setPhonePass(false)
            fetchPhone('+7' + phoneCheck)
        }
    }

    async function checkCode() {
        if (codeCheck.length === 4) {
            setCode(true)
            let codeConfirmed = await fetchCode(codeCheck, isToken)
            if (!codeConfirmed) {
                console.log('Я отработал если код неверен!')
                return true
            } else 
                return false
        } else return true
    }

    function checkTermsPrivacy() {
        if (isTerms === true && isPrivacy === true) {
            let terms = '1'
            let privacy = '1'
            // console.log('Policy'+ isToken)
            // let token = 'fad05019408802c1f0dbfa13244e952bf011b5d6ea0b482b2267ccdaa9c2dcd048d18bb46e04d256b2ea9f4bbf2ea0b45ac9405e64b0874b5a5212d4afaf9985';
            fetchPolicy(terms, privacy, isToken)
        }
    }

    function checkPhoneConfirmed() {
        if (phonePass) {
            checkPhone()
        }
    }

    async function checkCodeConfirmed(exit = () => {}) {
        checkTermsPrivacy()
        if (code) {
            let checkError = await checkCode()
            setCodeError(checkError)
            // console.log('Проверка checkError: ' + checkError)
            // console.log('Проверка кода: ' + is_error_code)
            if (!checkError && !is_error_phone && code) {
                // console.log('Ты зарегестрирован!')
                setIsAuth(true)
                exit()
            }
        }
    }

    return (
        <div className='SignUpByNumber'>
            {phonePass === true
                ?
                    <>
                    <div className='SignUpByNumberInput'>
                        <p className="text-14 regular">Телефон</p>
                        <input type="number" className='text-17 semibold' value={phoneCheck} onChange={event => setPhoneCheck(event.target.value)}/>
                        {is_error_phone
                            ?
                            <span className="text-14 medium error">Ошибка: Неверный формат номера, введите номер без +7 \ 8</span>
                            :
                            <></>
                        }
                        {/* {isNotice != null
                            ?
                            <span className="text-14 medium notice">{isNotice}</span>
                            :
                            <></>
                        } */}
                    </div>
                    <div className='SignUpByNumberInput'>
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
                    </>
                :   <></>
            }
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
                    <button className="text-14 regular" onClick={() => handleClick()} disabled={isBlocked}>
                        {isBlocked
                            ? `${countdown} сек осталось до повторного запроса кода`
                            : 'Отправить код повторно'
                        }
                    </button>
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
                    {!code
                        ? <button className='text-17 semibold' onClick={() => checkPhoneConfirmed()}>Зарегистрировать</button>
                        : <button className='text-17 semibold' onClick={() => checkCodeConfirmed()}>Отправить код</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SignUpByNumber;