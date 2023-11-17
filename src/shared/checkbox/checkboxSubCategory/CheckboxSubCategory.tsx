import React, { FC, useEffect, useState } from 'react';
import './CheckboxSubCategory.scss';
import { ICategorySub } from '../../../interfaces/IResponse';

interface CheckboxSubCategoryProps {
    categorySub: ICategorySub;
    turn: Function;
    onClick: Function;
}

const CheckboxSubCategory:FC<CheckboxSubCategoryProps> = ({categorySub,turn, onClick}) => {
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
    if (!categorySub) return null
    return (
        <div 
            className={styleSwitch}
            // @ts-ignore
            onClick={onClick}
            onMouseDown={buttonHandler}
            >
            <label htmlFor='CheckBoxSub' className='title-18 regular'>{categorySub.name}</label>
            <input id='CheckBoxSub' type="checkbox" onChange={event => turn(event.target.value)}/>
        </div>
    );
};

export default CheckboxSubCategory;