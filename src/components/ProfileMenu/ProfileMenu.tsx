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
import { useNavigate } from 'react-router-dom';
import useModal from '../../shared/hooks/useModal';
import Settings from '../Settings/Settings';

interface ProfileMenuProps {
    user_name: string;
    user_num: number;
    isOpenMenu: boolean;
    toggleMenu: () => void;
  }

const ProfileMenu:FC<ProfileMenuProps> = ({isOpenMenu, toggleMenu, user_num, user_name}) => {
    const navigate = useNavigate();

    const navigateToProfile = () => {
      navigate('/profile');
    }

    const {isOpen, toggle} = useModal();

    return (
        <>
            {isOpenMenu && (
                <div className="ProfileMenu-overlay" onClick={toggleMenu}>
                    <div onClick={(e) => e.stopPropagation()} className="ProfileMenu">
                        <div className="ProfileMenuName">
                            <span className='title-18 semibold'>{user_name}</span>
                            <span className='text-14 regular'>#{user_num}</span>
                        </div>
                        <div className="ProfileMenuItems">
                            <ProfileItem icon={profile} title='Профиль' nav={navigateToProfile}/>
                            <ProfileItem icon={premium} title='Премиум'/>
                            <ProfileItem icon={gift} title='Подарить золото'/>
                            <ProfileItem icon={settings} title='Настройки' toggle={toggle}/>
                            <ProfileItem icon={archive} title='Архив'/>
                            <ProfileItem icon={help} title='Помощь'/>
                            <ProfileItem icon={log_out} title='Выйти из профиля'/>
                        </div>
                        <Settings toggle={toggle} isOpen={isOpen}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileMenu;