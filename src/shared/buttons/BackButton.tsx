import React, {FC} from 'react';
import "./BackButton.scss"

interface BackButtonProps {
    link: string;
}

const BackButton:FC<BackButtonProps> = ({link}) => {
    return (
        <a className='BackButton' href={link}>
            <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0038 19.92L8.48375 13.4C7.71375 12.63 7.71375 11.37 8.48375 10.6L15.0038 4.07996" stroke="#102B32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className='title-11 bold'>Назад</span>
            </button>
        </a>
    );
};

export default BackButton;