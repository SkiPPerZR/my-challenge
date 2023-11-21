import React, { FC, useContext, useReducer, useState } from 'react';
import './SignUpUserAndDate.scss'
import PostService from '../../api/PostService';
import { AuthContext, ProfileData, TokenContext } from '../../context';

interface SignUpUserAndDateProps {
    returnToChooseSignUp: () => void;
    chooseAfterReg: () => void;
}

const SignUpUserAndDate:FC<SignUpUserAndDateProps> = ({returnToChooseSignUp, chooseAfterReg}) => {
    const { data, setData } = useContext(ProfileData);
    const {isToken, setIsToken} = useContext(TokenContext);
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [dateCheck, setCheckDate] = useState('');
    // const [errorDate, setErrorDate] = useState(false);
    let checkStatusDate : boolean = false;
    const currentDay: string = new Date().toISOString().split('T')[0];

    const [nicknameCheck, setNickname] = useState('');
    // const [errorNickname, setErrorNickname] = useState(false);
    let checkStatusNickname : boolean = false;

    function checkNick() {
        setNickname(nicknameCheck)
        // console.log("Проверка ввода Ника: " + nicknameCheck)
        const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
        if (!usernameRegex.test(String(nicknameCheck))) {
            // setErrorNickname(true)
            checkStatusNickname = true;
            console.log(`Ошибка ника${  checkStatusNickname}`)
        } else {
            checkStatusNickname = false;
        }
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckDate(event.target.value);
    };

    const checkDate = () => {
        const inputDate = dateCheck;
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 14);
        const minDateFormatted = `${minDate.getFullYear()}-${(minDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${minDate.getDate().toString().padStart(2, '0')}`;
        const isDateValid = inputDate >= minDateFormatted;

        if (isDateValid) {
            // setErrorDate(true)
            checkStatusDate = true;
            console.log(`Ошибка даты${  checkStatusDate}`)
        } else {
            // setErrorDate(false)
            checkStatusDate = false;
        }
    };

    const handleField1Change = (nick: string, date: string) => {
        setData((prevData: any) => ({
            ...prevData,
            nick,
            date_of_birth: date,
        }));
    };

    function sendNickDate () {
        checkNick()
        checkDate()
        // console.log('значение проверки ника: ' + errorNickname)
        // console.log('значение проверки даты: ' + errorDate)
        if (checkStatusDate === false && checkStatusNickname === false) {
            console.log('Ты зарегестрирован!')
            chooseAfterReg()
            handleField1Change(nicknameCheck,dateCheck)
        } else if (checkStatusDate === true || checkStatusNickname === true){
            console.log('Ты не зарегестрирован!')
        }
    }

    return (
        <div className="SignUpUserAndDate">
            <div className="SignUpUserAndDateGroup">
                <div className='SignUpUserAndDateGroupInput'>
                    <p className="text-14 regular">Ник пользователя</p>
                    <input type="text" className='text-17 semibold' placeholder="Пример: Samantha_Diver" value={nicknameCheck} onChange={event => setNickname(event.target.value)}/>
                </div>
                <div className='SignUpUserAndDateGroupInput'>
                    <p className="text-14 regular">Дата рождения</p>
                    <input type="date" className='text-17 semibold' required max={currentDay} value={dateCheck} onChange={handleDateChange}/>
                </div>
            </div>
            <span className="text-14 medium notice">
                {!checkStatusNickname && !checkStatusDate
                    ?   
                    <>Ник должен быть длинной от 3 до 16 символов, <br/> может содержать символы _ и -<br/><br/>Вы должны быть старше 14 лет</>
                    :  
                    <>
                        {!checkStatusNickname
                            ? <>Ник должен быть длинной от 3 до 16 символов, <br/> может содержать символы _ и -<br/><br/></>
                            : <></>
                        }
                        {!checkStatusDate
                            ? <div className='plusIndent'>Вы должны быть старше 14 лет</div>
                            : <></>
                        }
                    </>
                }
            </span>
            <div className='SignUpUserAndDateState'>
                <div>
                    <span className='text-14 regular'>Шаг 2 из 2</span>
                </div>
                <div>
                    <button className='text-17 semibold' onClick={()=>returnToChooseSignUp()}>Назад</button>
                    <button className='text-17 semibold' onClick={()=>sendNickDate()}>Создать аккаунт</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpUserAndDate;