import React, {FC} from 'react';
import './ProfileMenu.scss'
import ProfileItem from '../../shared/profileItem/ProfileItem';

import profile from '../../img/Profile/Profile.svg'
import premium from '../../img/Profile/Premium.svg'
import gift from '../../img/Profile/Gift.svg'
import settings from '../../img/Profile/Settings.svg'
import archive from '../../img/Profile/Archive.svg'
import help from '../../img/Profile/Help.svg'
import log_out from '../../img/Profile/Log-out.svg'

interface ProfileMenuProps {
    user_name: string;
    user_num: number;
    isOpen: boolean;
    toggle: () => void;
  }

const ProfileMenu:FC<ProfileMenuProps> = ({isOpen, toggle, user_num, user_name}) => {
    return (
        <>
            {isOpen && (
                <div className="ProfileMenu-overlay" onClick={toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="ProfileMenu">
                        <div className="ProfileMenuName">
                            <span className='title-18 semibold'>{user_name}</span>
                            <span className='text-14 regular'>#{user_num}</span>
                        </div>
                        <div className="ProfileMenuItems">
                            <ProfileItem icon={profile} title='Профиль'/>
                            <ProfileItem icon={premium} title='Премиум'/>
                            <ProfileItem icon={gift} title='Подарить золото'/>
                            <ProfileItem icon={settings} title='Настройки'/>
                            <ProfileItem icon={archive} title='Архив'/>
                            <ProfileItem icon={help} title='Помощь'/>
                            <ProfileItem icon={log_out} title='Выйти из профиля'/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileMenu;