import React, { FC } from 'react'
import './SocialSignUp.scss'

interface SocialSignUpProps {
    icon: string;
    func?: () => void;
}

const SocialSignUp:FC<SocialSignUpProps> = ({icon, func}) => {
    return (
        <div className='SocialSignUp' onClick={func}>
            <img src={icon} alt="Social" />
        </div>
    );
};

export default SocialSignUp;