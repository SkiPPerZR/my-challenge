import React from 'react';
import './notLogin.scss'

import NLicon from 'public/img/contacts-icon.svg'

function NotLogin() {
    return (
        <div className='NotLogin'>
            <div>
                <img src={NLicon} alt="Лого" />
                <h1 className='title-48 bold'>Ошибка</h1>
                <span className='text-28 light'>Раздел доступен только для<br /> зарегистрированных пользователей</span>
                <button className='text-17 semibold'>Регистрация</button>
            </div>
        </div>
    );
}

export default NotLogin;