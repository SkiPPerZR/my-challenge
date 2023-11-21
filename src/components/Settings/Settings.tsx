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
import DeleteProfile from '../DeleteProfile/DeleteProfile';
import EditProfile from '../EditProfile/EditProfile';

interface SettingsProps {
    setOpenSetting: () => void;
    closeMenu: () => void;
}

const Settings: FC<SettingsProps> = ({ setOpenSetting, closeMenu }) => {
    const [editProfile, setEditProfile] = useState(false);
    const [number, setNumber] = useState(false);
    const [emailPass, setEmailPass] = useState(false);
    const [blogVer, setBlogVer] = useState(false);
    const [deleteProf, setDeleteProf] = useState(false);

    const [coverSettings, setCoverSettings] = useState(false)

    function closeSetItem(switcher: number) {
        setCoverSettings(true)
        if (switcher === 1) {
            setEditProfile(true)
        } else if (switcher === 2) {
            setNumber(true)
        } else if (switcher === 3) {
            setEmailPass(true)
        } else if (switcher === 4) {
            setBlogVer(true)
        } else if (switcher === 5) {
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

    function openDelItem() {
        console.log('Я вызвался')
        setCoverSettings(true)
        setDeleteProf(true)
    }

    function closeSettings() {
        setOpenSetting()
        closeMenu()
    }

    return (
        <>
            {coverSettings
                ?
                <>
                    {deleteProf && <DeleteProfile setDeleteProf={() => setDeleteProf(false)} close={() => setCoverSettings(false)} />}
                    {editProfile && <EditProfile name='Редактирование профиля' setEditProfile={() => setEditProfile(false)} />}
                </>
                :
                <div className="Settings-overlay" onClick={closeSettings}>
                    <div className="Settings-box" onClick={(e) => e.stopPropagation()}>
                        <div className="SettingsClose">
                            <button onClick={closeSettings}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                        <div className="SettingsTitle">
                            <img src={settings} alt="Настройки" />
                            <h2 className="title-25 semibold">Настройки</h2>
                        </div>
                        <div className="SettingsItems">
                            <SettingsItem name='Информация о пользователе' icon={info} theme={ItemTheme.standart} func={() => { }} />
                            <SettingsItem name='Номер телефона' icon={phone} theme={ItemTheme.standart} func={() => { }} />
                            <SettingsItem name='Почта и пароль' icon={email} theme={ItemTheme.standart} func={() => { }} />
                            <SettingsItem name='Верификация для блогеров' icon={blogger} theme={ItemTheme.blogger} func={() => { }} />
                            <SettingsItem name='Удалить аккаунт' icon={del} theme={ItemTheme.delete} func={() => openDelItem()} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
export default Settings;