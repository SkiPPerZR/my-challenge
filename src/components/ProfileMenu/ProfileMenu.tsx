import React, {FC, useContext, useState} from 'react';
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
import { AuthContext } from '../../context';
import { ISetting } from '../../interfaces/ISettings';

interface ProfileMenuProps {
    profData: ISetting | null;
    setOpenProfileStatus: Function;
  }

const ProfileMenu:FC<ProfileMenuProps> = ({setOpenProfileStatus, profData}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [coverProfMenu, setCoverProfMenu] = useState(true);
    const [openSettings, setOpenSetting] = useState(false);

    const navigate = useNavigate();
    const navigateToProfile = () => {
      navigate('/profile');
    }
    const navigateToMain = () => {
        navigate('/');
      }
    const {isOpen, toggle} = useModal();

    const closeSideBar = () => {
        setOpenProfileStatus(false)
      }

    const navSettingsBar = () => {
        setCoverProfMenu(false)
        setOpenSetting(true)
    }

    const exitAuth = () => {
        setIsAuth(false)
        sessionStorage.setItem('isAuth', 'false')
        navigateToMain()
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <>
            {coverProfMenu
                ?
                    <div className="ProfileMenu-overlay" onClick={closeSideBar}>
                        <div onClick={(e) => e.stopPropagation()} className="ProfileMenu">
                            <div className="ProfileMenuName">
                                <span className='title-18 semibold'>{profData ? profData.nick : <></>}</span>
                                <span className='text-14 regular'>#1234 API</span>
                            </div>
                            <div className="ProfileMenuItems">
                                <ProfileItem icon={profile} title='Профиль' nav={navigateToProfile}/>
                                <ProfileItem icon={premium} title='Премиум'/>
                                <ProfileItem icon={gift} title='Подарить золото'/>
                                <ProfileItem icon={settings} title='Настройки' nav={navSettingsBar}/>
                                <ProfileItem icon={archive} title='Архив'/>
                                <ProfileItem icon={help} title='Помощь'/>
                                <ProfileItem icon={log_out} title='Выйти из профиля' nav={exitAuth}/>
                            </div>
                            
                        </div>
                    </div>
                :   
                    <>
                        {openSettings && <Settings setOpenSetting={()=>setOpenSetting(false)}/>}
                    </>
            }
        </>
    );
};

export default ProfileMenu;