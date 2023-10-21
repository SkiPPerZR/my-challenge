import React from 'react-dom'
import './Profile.scss'

import ProfileStatItem from '../../shared/profileStatItem/ProfileStatItem'
import ProfileInfoItem from '../../shared/profileInfoItem/ProfileInfoItem'
import AchivementItem from '../../shared/achivementItem/AchivementItem'
import SeeAll from '../../shared/buttons/SeeAll'

import avatar from '../../img/test-profile-icon.png'
import premium from '../../img/Profile/Premium.svg'
import achivement from '../../img/Achivements/ambassador.svg'

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
                <ProfileStatItem nameStat='Всего выиграно золота' statValue={114000} />
            </div>
            <div className="ProfileUserInfo">
                <h3 className='text-14 regular'>Информация о пользователе</h3>
                <ProfileInfoItem name='Дата рождения' info_content='15.09.2004'/>
                <ProfileInfoItem name='Телефон' info_content='+79110378609'/>
                <ProfileInfoItem name='Город' info_content='Санкт-Петербург'/>
                <div className="ProfileUserInfoSocial">
                    <ProfileInfoItem name='Telegram' info_content='sdpfk123'/>
                    <ProfileInfoItem name='VK' info_content='sdpfk123'/>
                </div>
                <div className="ProfileUserInfoSocial">
                    <ProfileInfoItem name='Steam' info_content='sdpfk123'/>
                    <ProfileInfoItem name='Discord' info_content='sdpfk123'/>
                </div>
            </div>
            <div className="ProfileAchievements">
                <h3 className='text-14 regular'>Достижения</h3>
                <AchivementItem title='Амбассадор' text='Пригласить 5 новых пользователей' icon={achivement} state={0}/>
                <div className="ProfileAchievementsOthers">
                    <div className='ProfileAchievementsOthersColumn'>
                        <AchivementItem title='Добро пожаловать' text='Номер телефона подтвержден' icon={achivement}/>
                        <AchivementItem title='Меценат' text='Подарить 10 золота другому пользователю' icon={achivement} state={0}/>
                        <AchivementItem title='Чемпион' text='Победил 2 раза подряд' icon={achivement} state={0}/>
                    </div>
                    <div className='ProfileAchievementsOthersColumn'>
                        <AchivementItem title='Член сообщества' text='Заполнить все данные профиля' icon={achivement}/>
                        <AchivementItem title='Челленджер' text='Стал участником 1 челленджа' icon={achivement} state={0}/>
                        <AchivementItem title='Создатель' text='Создать 5 челленджей' icon={achivement} state={0}/>
                    </div>
                </div>
                <SeeAll/>
            </div>
        </div>
    );
};

export default Profile;