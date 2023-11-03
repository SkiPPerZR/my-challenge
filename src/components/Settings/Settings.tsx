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
    toggleSet: () => void;
    isOpenSet: boolean;
}

const Settings:FC<SettingsProps> = ({toggleSet, isOpenSet}) => {
    const {isOpen, toggle} = useModal();
    const [toggleStatus, setToggleStatus] = useState<number>(0);
    const status = (toggleStatus: number) => {
        setToggleStatus(toggleStatus)
    }
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
                            <SettingsItem name='Информация о пользователе' icon={info} theme={ItemTheme.standart} func={toggle} toggle={() => status(2)}/>
                            <SettingsItem name='Номер телефона' icon={phone} theme={ItemTheme.standart}/>
                            <SettingsItem name='Почта и пароль' icon={email} theme={ItemTheme.standart}/>
                            <SettingsItem name='Верификация для блогеров' icon={blogger} theme={ItemTheme.blogger}/>
                            <SettingsItem name='Удалить аккаунт' icon={del} theme={ItemTheme.delete} func={toggle} toggle={() => status(1)}/>
                        </div>
                        {toggleStatus === 1
                            ? <DeleteProfile toggleDel={toggle} isOpenDel={isOpen} toggleStatus={() => status(0)}/>
                            : <></>
                        }
                        {toggleStatus === 2
                            ? <EditProfile toggleEdit={toggle} isOpenEdit={isOpen} toggleStatus={() => status(0)}/>
                            : <></>
                        }
                        {/* {toggleStatus == 3
                            ? <></>
                            : 
                        }
                        {toggleStatus == 4
                            ? <></>
                            : 
                        } */}
                    </div>
                </div>
            )}
        </>
    );
};
export default Settings;