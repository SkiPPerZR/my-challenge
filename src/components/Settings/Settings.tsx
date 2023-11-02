import React, { FC } from 'react'
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

interface SettingsProps{
    toggleSet: () => void;
    isOpenSet: boolean;
}

const Settings:FC<SettingsProps> = ({toggleSet, isOpenSet}) => {
    const {isOpen, toggle} = useModal();
    return (
        <>
            {isOpenSet && (
                <div className="Settings-overlay" onClick={toggleSet}>
                    <div className="Settings-box" onClick={(e)=>e.stopPropagation()}>
                        <div className="SettingsTitle">
                            <img src={settings} alt="Настройки" />
                            <h2 className="title-25 semibold">Настройки</h2>
                            <button onClick={toggleSet}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                        <div className="SettingsItems">
                            <SettingsItem name='Информация о пользователе' icon={info} theme={ItemTheme.standart}/>
                            <SettingsItem name='Номер телефона' icon={phone} theme={ItemTheme.standart}/>
                            <SettingsItem name='Почта и пароль' icon={email} theme={ItemTheme.standart}/>
                            <SettingsItem name='Верификация для блогеров' icon={blogger} theme={ItemTheme.blogger}/>
                            <SettingsItem name='Удалить аккаунт' icon={del} theme={ItemTheme.delete} func={toggle}/>
                            <DeleteProfile toggleDel={toggle} isOpenDel={isOpen}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Settings;