import React, { FC, createContext, useContext, useEffect, useState } from 'react';
import './SignUpUserAndDate.scss'
import PostService from '../../api/PostService';
import { ProfileData, TokenContext } from '../../context';

interface SignUpUserAndDateProps {
    returnToChooseSignUp: () => void;
    chooseAfterReg: () => void;
}

const SignUpUserAndDate:FC<SignUpUserAndDateProps> = ({returnToChooseSignUp, chooseAfterReg}) => {
    const { data, setData } = useContext(ProfileData);

    const [dateCheck, setCheckDate] = useState('');
    const [is_error_date, setErrorDate] = useState(false);
    const currentDay: string = new Date().toISOString().split('T')[0];

    const [nicknameCheck, setNickname] = useState('');
    const [is_error_nickname, setErrorNickname] = useState(false);

    const handleField1Change = (nick: string, date_of_birth: string) => {
        setData((prevData: any) => ({
          ...prevData,
          nick: nick,
          date_of_birth: date_of_birth,
        }));
      };

    function checkNick() {
        setNickname(nicknameCheck)
        // console.log("Проверка ввода Ника: " + nicknameCheck)
        const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
        if (!usernameRegex.test(String(nicknameCheck))) {
            setErrorNickname(true)
            console.log("Ошибка ника")
        } else {
            setErrorNickname(false)
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
            console.log("Ошибка даты")
            setErrorDate(true)
        } else {
            setErrorDate(false)
        }
    };

    function sendNickDate () {
        checkNick()
        checkDate()
        if (!is_error_date && !is_error_nickname) {
            console.log('Ты зарегестрирован!')
            chooseAfterReg()
            handleField1Change(nicknameCheck,dateCheck)
            // fetchNickAndName(nicknameCheck, dateCheck, isToken)
        } else if (is_error_date || is_error_nickname){
            console.log('Ты не зарегестрирован лошара!')
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
                {is_error_nickname && is_error_date
                    ?   
                        <>Ник должен быть длинной от 3 до 16 символов, <br/> может содержать символы _ и -<br/><br/>Вы должны быть старше 14 лет</>
                    :  
                        <>
                            {is_error_nickname
                                ? <>Ник должен быть длинной от 3 до 16 символов, <br/> может содержать символы _ и -<br/><br/></>
                                : <></>
                            }
                            {is_error_date
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