import React, { FC } from 'react'
import './SocialSignUp.scss'

interface SocialSignUpProps {
    icon: string;
}

const SocialSignUp:FC<SocialSignUpProps> = ({icon}) => {
    return (
        <div className='SocialSignUp'>
            <img src={icon} alt="Social" />
        </div>
    );
};

export default SocialSignUp;