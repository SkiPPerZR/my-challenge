import React, { FC, useEffect, useState } from 'react';
import './CheckboxCategory.scss'
import { ICategory } from '../../../interfaces/IResponse';

interface CheckboxCategoryProps {
    category: ICategory;
    turn: ()=>void;
    value: any;
    onClick: ()=>void;
}

const CheckboxCategory:FC<CheckboxCategoryProps> = ({category, turn, onClick, value}) => {
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

    if (!category) return null
    return (
        <div className='CheckboxCategory'>
            <div className={styleSwitch}>
                <span className='title-18 semibold'>{category.name}</span>
                <div className="CheckboxCategoryContainerSwitch">
                    <label 
                        htmlFor={category.id}
                        onClick={onClick}
                        onMouseDown={buttonHandler}>
                        <div className={styleCircle}></div>
                    </label>
                    <input id={category.id} value={value} type="checkbox" onChange={turn}/>
                </div>
            </div>
        </div>
    )
};

export default CheckboxCategory;