import React, { FC, useContext, useState } from 'react';
import './ExitWindow.scss'

import closeIcon from '../../img/close.svg'
import DefaultButton, { ButtonVariant } from '../../shared/buttons/DefaultButton';
import PostService from '../../api/PostService';
import { TokenContext } from '../../context';
import { useNavigate } from 'react-router';

interface ExitWindowProps {
    setExitWind: () => void;
    close: ()=>void;
}

const ExitWindow:FC<ExitWindowProps> = ({setExitWind, close}) => {
    const {isToken, setIsToken} = useContext(TokenContext)
    const [exitWindow, setExitWindow] = useState(false)

    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate('/');
      }

    function closeWindow() {
        setExitWind()
        close()
    }

    function LogOut() {
        setExitWind();
        close()
        sessionStorage.setItem('isAuth', 'false')
        sessionStorage.setItem('isToken', '')
        navigateToMain()
        // eslint-disable-next-line no-restricted-globals
        location.reload()
      }

    return (
        <div className='ExitWindow-overlay' onMouseDown={()=>closeWindow()}>
            <div className="ExitWindow-box" onMouseDown={(e)=>e.stopPropagation()}>
                <div className="ExitWindowClose">
                    <button onClick={()=>closeWindow()}>
                        <img src={closeIcon} alt="Закрыть" />
                    </button>
                </div>
                <div className="ExitWindowTitle">
                    <svg width="40" height="40" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5198 11.7L27.6398 4.84C25.6998 3.72 23.2998 3.72 21.3398 4.84L9.47984 11.7C7.53984 12.82 6.33984 14.9 6.33984 17.16V30.84C6.33984 33.08 7.53984 35.16 9.47984 36.3L21.3598 43.16C23.2998 44.28 25.6998 44.28 27.6598 43.16L39.5398 36.3C41.4798 35.18 42.6798 33.1 42.6798 30.84V17.16C42.6598 14.9 41.4598 12.84 39.5198 11.7ZM22.9998 15.5C22.9998 14.68 23.6798 14 24.4998 14C25.3198 14 25.9998 14.68 25.9998 15.5V26C25.9998 26.82 25.3198 27.5 24.4998 27.5C23.6798 27.5 22.9998 26.82 22.9998 26V15.5ZM26.3398 33.26C26.2398 33.5 26.0998 33.72 25.9198 33.92C25.5398 34.3 25.0398 34.5 24.4998 34.5C24.2398 34.5 23.9798 34.44 23.7398 34.34C23.4798 34.24 23.2798 34.1 23.0798 33.92C22.8998 33.72 22.7598 33.5 22.6398 33.26C22.5398 33.02 22.4998 32.76 22.4998 32.5C22.4998 31.98 22.6998 31.46 23.0798 31.08C23.2798 30.9 23.4798 30.76 23.7398 30.66C24.4798 30.34 25.3598 30.52 25.9198 31.08C26.0998 31.28 26.2398 31.48 26.3398 31.74C26.4398 31.98 26.4998 32.24 26.4998 32.5C26.4998 32.76 26.4398 33.02 26.3398 33.26Z" fill="#F99D12"/>
                    </svg>
                    <h2 className="title-25 semibold">Выйти из аккаунта</h2>
                </div>
                <div className="ExitWindowContent">
                    <div className="ExitWindowContentChoose">
                        <DefaultButton theme={ButtonVariant.standart} children='Остаться' paddingWidth={60} onClick={()=>closeWindow}/>
                        <DefaultButton theme={ButtonVariant.backRevers} children='Выйти из профиля' paddingWidth={30} onClick={()=>LogOut}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExitWindow;