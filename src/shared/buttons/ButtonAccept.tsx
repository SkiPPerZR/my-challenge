import React from 'react';
import './ButtonAccept.scss'

function ButtonAccept() {
    return (
        <div className='ButtonAccept'>
            <div className='ButtonAccept__container'>
                <button className='text-17 semibold'>Отправить результат</button>
                <div className='line-v' />
                <button className='text-17 semibold'>Сдаться</button>
            </div>
        </div>
    );
}

export default ButtonAccept;