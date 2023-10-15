import React, { FC } from 'react'
import './ProfileStatItem.scss'

interface ProfileStatItem {
    nameStat: string;
    statValue: number;
}

const ProfileStatItem:FC<ProfileStatItem> = ({nameStat, statValue}) => {
    return (
        <div className='ProfileStatItem'>
            <span className='title-18 semibold'>{nameStat}</span>
            <span className='text-36 semibold'>{statValue}</span>
        </div>
    )
}

export default ProfileStatItem;