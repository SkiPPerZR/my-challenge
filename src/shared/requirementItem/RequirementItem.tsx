import React, { FC } from 'react';
import './RequirementItem.scss'

interface RequirementItemProps {
    icon: string;
    title: string;
    content: string;
}

const RequirementItem:FC<RequirementItemProps> = ({icon, title, content}) => {
    return (
        <div className='RequirementItem'>
            <div>
                <img src={icon} alt="" />
                <h4 className='title-18 semibold'>{title}</h4>
            </div>
            <span className='title-18 regular'>{content}</span>
        </div>
    );
};

export default RequirementItem;