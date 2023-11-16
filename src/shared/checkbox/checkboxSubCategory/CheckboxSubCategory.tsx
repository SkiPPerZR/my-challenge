import React, { FC, useEffect, useState } from 'react';
import './CheckboxSubCategory.scss';
import { ICategorySub } from '../../../interfaces/IResponse';

interface CheckboxSubCategoryProps {
    categorySub: ICategorySub;
    turn: Function;
}

const CheckboxSubCategory:FC<CheckboxSubCategoryProps> = ({categorySub,turn}) => {
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
            <label htmlFor='CheckBoxSub' className='title-18 regular'>{categorySub.name}</label>
            <input id='CheckBoxSub' type="checkbox" onChange={event => turn(event.target.value)}/>
        </div>
    );
};

export default CheckboxSubCategory;