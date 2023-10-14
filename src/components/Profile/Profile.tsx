import React from 'react-dom'
import './Profile.scss'

import ProfileStatItem from '../../shared/profileStatItem/profileStatItem'

import avatar from '../../img/test-profile-icon.png'
import premium from '../../img/Profile/Premium.svg'

const Profile = () => {
    return (
        <div className="Profile">
            <div className="ProfileStat">
                <h3 className='text-14 regular'>Профиль и статистика</h3>
                <div className="ProfileStatUserName">
                    <div className="ProfileStatUserNameAvatar">
                        <img src={avatar} alt="" />
                    </div>
                    <span className="text-18 light">IvanZolo2004</span>
                    <img src={premium} alt="" />
                </div>
                <ProfileStatItem nameStat='Всего побед' statValue={32} />
                <ProfileStatItem nameStat='Участий в Челленджах' statValue={50} />
                <ProfileStatItem nameStat='Всего выиграно золота' statValue={11400} />
            </div>
            <div className="ProfileUserInfo">
                <h3 className='text-14 regular'>Профиль и статистика</h3>
            </div>
        </div>
    );
};

export default Profile;