import React, { FC } from 'react'
import './ProfileInfoItem.scss'

interface ProfileInfoItemProps {
    name: string;
    info_content: string;
}

const ProfileInfoItem:FC<ProfileInfoItemProps> = ({name, info_content}) => (
    <div className='ProfileInfoItem'>
        <span className="title-18 semibold">{name}</span>
        <span className="title-18 regular">{info_content}</span>
    </div>
);

export default ProfileInfoItem;