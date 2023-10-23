import React, { FC } from 'react'
import './ProfileStatItem.scss'

interface ProfileStatItemProps {
    nameStat: string;
    statValue: number;
}

const ProfileStatItem:FC<ProfileStatItemProps> = ({nameStat, statValue}) => {
    let thousands = Math.round(statValue/1000)

    return (
        <div className='ProfileStatItem'>
            <span className='title-18 semibold'>{nameStat}</span>
            {statValue <= 1000
                ?   <span className='text-36 semibold'>{statValue}</span>
                :   <span className='text-36 semibold'>{thousands}к</span>
            }
        </div>
    )
}

export default ProfileStatItem;