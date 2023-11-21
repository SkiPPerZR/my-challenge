import React, { ChangeEventHandler, FC, useEffect, useState } from 'react';
import './CheckboxCategory.scss'
import { ICategory } from '../../../interfaces/IResponse';

interface CheckboxCategoryProps {
    category: ICategory;
    turn: Function;
}

const CheckboxCategory:FC<CheckboxCategoryProps> = ({category, turn}) => {
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
                        htmlFor={category.id}>
                        <div className={styleCircle} />
                    </label>
                    <input id={category.id} type="checkbox" onChange={event => turn(event.target.value)}/>
                </div>
            </div>
        </div>
    )
};

export default CheckboxCategory;