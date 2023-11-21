import React from 'react-dom'
import './Profile.scss'

import { useContext, useEffect, useState } from 'react'
import ProfileStatItem from '../../shared/profileStatItem/profileStatItem'
import ProfileInfoItem from '../../shared/profileInfoItem/ProfileInfoItem'
import AchivementItem from '../../shared/achivementItem/AchivementItem'
import SeeAll from '../../shared/buttons/SeeAll'

import avatar from 'public/img/test-profile-icon.png'
import premium from 'public/img/Profile/Premium.svg'
import achivement from 'public/img/Achivements/ambassador.svg'
import { TokenContext } from '../../context'
import PostService from '../../api/PostService'
import { ISetting } from '../../interfaces/ISettings'

function Profile() {
    const { isToken, setIsToken } = useContext(TokenContext);

    const [profData, setProfData] = useState<ISetting>({
        nick: '',
        date_of_birth: '',
        fio: '',
        city: '',
        vk: '',
        steam: '',
        discord: '',
        category: [],
        category_sub: [],
        token: ''
    });
    const [vk, setVk] = useState('');
    const [steam, setSteam] = useState('');
    const [discord, setDiscord] = useState('');
    const [dob, setDof] = useState('');
    const [city, setCity] = useState('');


    async function fetchProfileData(token: string) {
        const profileData = await PostService.getProfileData(token);
        setProfData(profileData);
        // additingData()
    }

    // TODO: доделать редактирование даты;
    // function additingData(){
    //     const raw = profData.date_of_birth.replace(/-/g, '.')
    //     const parts = raw.split('.');
    //     const newDob = `${parts[2]}.${parts[1]}.${parts[0]}`;
    //     // console.log(raw)
    //     setDof(newDob)
    // }

    useEffect(() => {
        fetchProfileData(isToken);
    }, [])


    return (
        <div className="Profile">
            <div className="ProfileStat">
                <h3 className='text-14 regular'>Профиль и статистика</h3>
                <div className="ProfileStatUserName">
                    <div className="ProfileStatUserNameAvatar">
                        {/* Todo: do avatar css styles */}
                        <img src={avatar} alt="" />
                    </div>
                    <span className="text-18 light">{profData ? profData.fio : <></>}</span>
                    <img src={premium} alt="" />
                </div>
                <ProfileStatItem nameStat='Всего побед' statValue={32} />
                <ProfileStatItem nameStat='Участий в Челленджах' statValue={50} />
                <ProfileStatItem nameStat='Всего выиграно золота' statValue={150100} />
                {/* Todo: Пофиксить чтобы пример: 1,5, округление до 0,1 после 100 не нужно*/}
            </div>
            <div className="ProfileUserInfo">
                <h3 className='text-14 regular'>Информация о пользователе</h3>
                <ProfileInfoItem name='Дата рождения' info_content={profData.date_of_birth.replace(/-/g, '.')} />
                <ProfileInfoItem name='Телефон' info_content='API' />
                <ProfileInfoItem name='Город' info_content={profData.city} />
                <div className="ProfileUserInfoSocial">
                    <ProfileInfoItem name='Telegram' info_content={profData.vk.replace(/^https:\/\/vk\.com\//, "")} />
                    <ProfileInfoItem name='VK' info_content={profData.vk.replace(/^https:\/\/vk\.com\//, "")} />
                </div>
                <div className="ProfileUserInfoSocial">
                    <ProfileInfoItem name='Steam' info_content={profData.steam.replace(/^https:\/\/steamcommunity\.com\/id\//, "")} />
                    <ProfileInfoItem name='Discord' info_content={profData.discord.replace(/^https:\/\/discordapp\.com\/users\//, "")} />
                </div>
            </div>
            <div className="ProfileAchievements">
                <h3 className='text-14 regular'>Достижения</h3>
                <AchivementItem title='Амбассадор' text='Пригласить 5 новых пользователей' icon={achivement} state={0} />
                {/* TODO Получаю значение как есть в достижении, перобразовать state в проценты + те которые выполнил 100% пользователь ставяться наверх списка */}
                {/* TODO Добавить информационный попап(прописать текст и оформление) + модульное решение */}
                <div className="ProfileAchievementsOthers">
                    <div className='ProfileAchievementsOthersColumn'>
                        <AchivementItem title='Добро пожаловать' text='Номер телефона подтвержден' icon={achivement} />
                        <AchivementItem title='Меценат' text='Подарить 10 золота другому пользователю' icon={achivement} state={0} />
                        <AchivementItem title='Чемпион' text='Победил 2 раза подряд' icon={achivement} state={0} />
                    </div>
                    <div className='ProfileAchievementsOthersColumn'>
                        <AchivementItem title='Член сообщества' text='Заполнить все данные профиля' icon={achivement} />
                        <AchivementItem title='Челленджер' text='Стал участником 1 челленджа' icon={achivement} state={0} />
                        <AchivementItem title='Создатель' text='Создать 5 челленджей' icon={achivement} state={0} />
                    </div>
                </div>
                <SeeAll />
            </div>
        </div>
    );
}

export default Profile;