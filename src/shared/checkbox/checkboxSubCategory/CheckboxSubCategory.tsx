import React, { FC, useEffect, useState } from 'react';
import './CheckboxSubCategory.scss'

interface CheckboxSubCategoryProps {
    title: string;
    id: string;
    turn: Function;
}

const CheckboxSubCategory:FC<CheckboxSubCategoryProps> = ({title,id,turn}) => {
    const [active, setActive] = useState(false)
    const [styleSwitch, setStyleSwitch] = useState<string>('CheckboxSubCategory')

    useEffect(() => {
        buttonHandler()
    }, [])

    const buttonHandler = (): void => {
        setActive(!active)
        if (active) {
            setStyleSwitch('CheckboxSubCategory check_sub__active')
        }
        else{
            setStyleSwitch('CheckboxSubCategory')
        }
    }

    return (
        <div className={styleSwitch} onMouseDown={buttonHandler}>
            <label htmlFor={id} className='title-18 regular'>{title}</label>
            <input id={id} type="checkbox" onChange={event => turn(event.target.value)}/>
        </div>
    );
};

export default CheckboxSubCategory;