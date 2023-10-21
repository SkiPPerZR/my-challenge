import React, { FC } from 'react'
import './Settings.scss'

import close from '../../img/close.svg'

interface SettingsProps{
    toggle: () => void;
    isOpen: boolean;
}

const Settings:FC<SettingsProps> = ({toggle, isOpen}) => {

    return (
        <>
            {isOpen && (
                <div className="Settings-overlay" onClick={toggle}>
                    <div className="Settings-box" onClick={(e)=>e.stopPropagation()}>
                        <div className="SettingsTitle">
                            <img src='' alt="Настройки" />
                            <h2 className="title-25 semibold">Настройки</h2>
                            <button onClick={toggle}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Settings;