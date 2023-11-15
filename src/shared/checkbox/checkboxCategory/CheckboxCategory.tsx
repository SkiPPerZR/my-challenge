import React, { FC, useEffect, useState } from 'react';
import './CheckboxCategory.scss'
import { ICategory } from '../../../interfaces/ICategory';

interface CheckboxCategoryProps {
    title: string;
    key: string;
    turn: Function;
}

const CheckboxCategory:FC<CheckboxCategoryProps> = ({title, turn, key}) => {
    const [active, setActive] = useState(false)
    const [styleSwitch, setStyleSwitch] = useState<string>('CheckboxCategoryContainer')
    const [styleCircle, setStyleCircle] = useState<string>('CheckboxCategory__circle')

    useEffect(() => {
        buttonHandler()
    }, [])

    const buttonHandler = (): void => {
        setActive(!active)
        if (active) {
            setStyleSwitch('CheckboxCategoryContainer check__active')
            setStyleCircle('CheckboxCategory__circle cir__active')
        }
        else{
            setStyleSwitch('CheckboxCategoryContainer')
            setStyleCircle('CheckboxCategory__circle')
        }
    }

    return (
        <div className='CheckboxCategory'>
            <div className={styleSwitch}>
                <span className='title-18 semibold'>{title}</span>
                <div className="CheckboxCategoryContainerSwitch">
                    <label htmlFor={key} onMouseDown={buttonHandler}>
                        <div className={styleCircle}></div>
                    </label>
                    <input id={key} type="checkbox" onChange={event => turn(event.target.value)}/>
                </div>
            </div>
        </div>
    )
};

export default CheckboxCategory;