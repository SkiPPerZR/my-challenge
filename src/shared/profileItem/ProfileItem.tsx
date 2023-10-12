import React, {FC} from 'react';
import './ProfileItem.scss'

interface ProfileItemProps {
    icon: string;
    title: string;
}

const ProfileItem:FC<ProfileItemProps> = ({icon, title}) => {
    return (
        <button className='ProfileItem'>
            <img src={icon} alt="" />
            <span className='text-17 semibold'>{title}</span>
        </button>
    );
};

export default ProfileItem;