import React, { FC } from 'react'
import './ProfileStatItem.scss'

interface ProfileStatItemProps {
    nameStat: string;
    statValue: number;
}

<<<<<<< HEAD
const ProfileStatItem:FC<ProfileStatItem> = ({nameStat, statValue}) => {
    let thousands = Math.round(statValue/1000)

=======
const ProfileStatItem:FC<ProfileStatItemProps> = ({nameStat, statValue}) => {
>>>>>>> ebd5396afb9bd09dd1f12fb02c48622616d16341
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