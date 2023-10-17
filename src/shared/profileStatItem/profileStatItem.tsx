import React, { FC } from 'react'
import './ProfileStatItem.scss'

interface ProfileStatItemProps {
    nameStat: string;
    statValue: number;
}

const ProfileStatItem:FC<ProfileStatItemProps> = ({nameStat, statValue}) => {
    return (
        <div className='ProfileStatItem'>
            <span className='title-18 semibold'>{nameStat}</span>
            <span className='text-36 semibold'>{statValue}</span>
        </div>
    )
}

export default ProfileStatItem;