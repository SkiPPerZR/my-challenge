import React, { FC, useState } from 'react'
import './Settings.scss'

import SettingsItem, { ItemTheme } from '../../shared/settingsItem/SettingsItem';

import close from '../../img/close.svg'
import settings from '../../img/Settings.svg'
import info from '../../img/Settings/Profile.svg'
import phone from '../../img/Settings/Call.svg'
import email from '../../img/Settings/email.svg'
import blogger from '../../img/Settings/Bloger.svg'
import del from '../../img/Settings/Del.svg'
import useModal from '../../shared/hooks/useModal';
import DeleteProfile from '../DeleteProfile/DeleteProfile';
import { number } from 'yargs';
import EditProfile from '../EditProfile/EditProfile';

interface SettingsProps{
    setOpenSetting: () => void;
}

const Settings:FC<SettingsProps> = ({setOpenSetting}) => {
    const {isOpen, toggle} = useModal();

    const [editProfile, setEditProfile] = useState(false);
    const [number, setNumber] = useState(false);
    const [emailPass, setEmailPass] = useState(false);
    const [blogVer, setBlogVer] = useState(false);
    const [deleteProf, setDeleteProf] = useState(false);

    const [coverSettings, setCoverSettings] = useState(false)

    function closeSetItem(switcher: number) {
        setCoverSettings(true)
        if (switcher == 1) {
            setEditProfile(true)
        } else if (switcher == 2) {
            setNumber(true)
        } else if (switcher == 3) {
            setEmailPass(true)
        } else if (switcher == 4) {
            setBlogVer(true)
        } else if (switcher == 5) {
            console.log('Я переключил состояние кнопки удалить')
            setDeleteProf(true)
        } else {
            setEditProfile(false)
            setNumber(false)
            setEmailPass(false)
            setBlogVer(false)
            setDeleteProf(false)
        }
    }

    return (
        <>
            {coverSettings 
                ?
                    <>
                        {isOpen && <DeleteProfile setDeleteProf={toggle} close={()=>setCoverSettings(false)}/>}
                        {editProfile && <EditProfile name='Редактирование профиля' setEditProfile={()=>setEditProfile(false)}/>}
                    </>
                :   
                    <div className="Settings-overlay" onClick={setOpenSetting}>
                        <div className="Settings-box" onClick={(e) => e.stopPropagation()}>
                            <div className="SettingsClose">
                                <button onClick={setOpenSetting}>
                                    <img src={close} alt="Закрыть" />
                                </button>
                            </div>
                            <div className="SettingsTitle">
                                <img src={settings} alt="Настройки" />
                                <h2 className="title-25 semibold">Настройки</h2>
                            </div>
                            <div className="SettingsItems">
                                <SettingsItem name='Информация о пользователе' icon={info} theme={ItemTheme.standart} func={()=>{}}/>
                                <SettingsItem name='Номер телефона' icon={phone} theme={ItemTheme.standart} func={()=>{}}/>
                                <SettingsItem name='Почта и пароль' icon={email} theme={ItemTheme.standart} func={()=>{}}/>
                                <SettingsItem name='Верификация для блогеров' icon={blogger} theme={ItemTheme.blogger} func={()=>{}}/>
                                <SettingsItem name='Удалить аккаунт' icon={del} theme={ItemTheme.delete} func={toggle}/>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};
export default Settings;