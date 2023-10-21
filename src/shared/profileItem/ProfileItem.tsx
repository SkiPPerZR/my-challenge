import React, {FC} from 'react';
import './ProfileItem.scss'

interface ProfileItemProps {
    icon: string;
    title: string;
    nav?: () => void;
    toggle?: () => void;
}

const ProfileItem:FC<ProfileItemProps> = ({icon, title, nav, toggle}) => {
    return (
        <button className='ProfileItem' onClick={nav} onMouseDown={toggle}>
            <img src={icon} alt="" />
            <span className='text-17 semibold'>{title}</span>
        </button>
    );
};

export default ProfileItem;