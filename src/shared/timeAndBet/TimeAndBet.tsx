import React from 'react';
import './TimeAndBet.scss'

import gold from '../../img/Gold-2.svg'

const TimeAndBet = () => {
    return (
        <div className='TimeAndBet'>
            <div className='TimeAndBetTimer'>
                <span className='text-17 semibold'>23 часа</span>
                <p className='text-14 regular'>Осталось времени</p>
            </div>
            <div className='TimeAndBetPrise'>
                <div>
                    <span className='text-17 semibold'>760</span>
                    <img src={gold} alt="Золото" />
                </div>
                <p className='text-14 regular'>Выигрыш</p>
            </div>             
        </div>
    );
};

export default TimeAndBet;