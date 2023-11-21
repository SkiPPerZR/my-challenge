import React, {FC} from 'react';
import './ProfileItem.scss'

interface ProfileItemProps {
    icon: string;
    title: string;
    nav?: () => void;
    closeMenu?: () => void;
}

const ProfileItem:FC<ProfileItemProps> = ({icon, title, nav, closeMenu}) => {
    return (
        <button className='ProfileItem' onClick={nav} onMouseDown={closeMenu}>
            <img src={icon} alt="" />
            <span className='text-17 semibold'>{title}</span>
        </button>
    );
};

export default ProfileItem;