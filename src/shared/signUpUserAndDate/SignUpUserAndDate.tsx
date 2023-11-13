import React, { useContext, useEffect, useState } from 'react';
import './SignUpUserAndDate.scss'
import { UserToken } from '../../context';
import PostService from '../../api/PostService';

const SignUpUserAndDate = () => {
    const {token, setToken} = useContext(UserToken);

    const [dateCheck, setCheckDate] = useState();
    const [is_error_date, setErrorDate] = useState(false);

    const [nicknameCheck, setNickname] = useState();
    const [is_error_nickname, setErrorNickname] = useState(false);

    const [date, setDate] = useState('');

    async function fetchNickAndName(Nickname : String, ProfileDate: String, token : String) {
        let UserToken = await PostService.sendNickAndDateProfile(Nickname, ProfileDate, token);
        // console.log('В отправке данных профиля Token: '+token)
        setToken(UserToken)
    }

    useEffect(() => {
        //TODO: Проверка на верность даты и никнейма;
    }, [dateCheck, nicknameCheck])

    function checkNick() {
        const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
        //TODO: Проверка никнейма;
    }

    //TODO: Проверка на валидность даты;
    // const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const inputDate = event.target.value;
    //     setDate(inputDate);

    //     const dateRegex = "\d{2}/\d{2}/\d{4}"

    //     // Проведи проверку ввода даты
    //     const currentDate = new Date();
    //     const inputYear = new Date(inputDate).getFullYear();
    //     const minAge = 14;
    //     const minDate = new Date();
    //     minDate.setFullYear(minDate.getFullYear() - minAge);

    //     if (currentDate < minDate) {
    //         // Дата меньше минимального возраста
    //         // выполнение действий по обработке ошибки
    //     } else {
    //         // Валидная дата, выполнение нужных действий
    //     }
    // };
    return (
        <UserToken.Provider value={{token, setToken}}>
            <div className="SignUpUserAndDate">
                <div className="SignUpUserAndDateGroup">
                    <div className='SignUpUserAndDateGroupInput'>
                        <p className="text-14 regular">Ник пользователя</p>
                        <input type="text" className='text-17 semibold' placeholder="Пример: Samantha_Diver"/>
                    </div>
                    <div className='SignUpUserAndDateGroupInput'>
                        <p className="text-14 regular">Дата рождения</p>
                        <input type="date" className='text-17 semibold' placeholder="DD.MM.YYYY" required/>
                    </div>
                </div>
                <span className="text-14 medium notice">
                    {is_error_nickname
                        ? `Ник должен быть длинной от 3 до 16 символов, может содержать символы _ и -`
                        : <></>
                    }
                </span>
                <span className="text-14 medium notice">
                    {is_error_date
                        ? `Вы должны быть старше 14 лет`
                        : <></>
                    }
                </span>
                <div className='SignUpUserAndDateState'>
                    <div>
                        <span className='text-14 regular'>Шаг 2 из 2</span>
                    </div>
                    <div>
                        <button className='text-17 semibold'>Назад</button>
                        <button className='text-17 semibold'>Создать аккаунт</button>
                    </div>
                </div>
            </div>
        </UserToken.Provider>
    );
};

export default SignUpUserAndDate;