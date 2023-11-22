import React, { FC, useContext, useState } from 'react'
import './RestoreAccount.scss'

import icon from '../../img/iconSignUp.svg'
import close from '../../img/close.svg'
import help from '../../img/Help.svg'
import email from '../../img/email-signUp.svg'

import { useNavigate } from 'react-router-dom';
import ChooseSignUp, { ChooseVariant } from '../../shared/chooseSignUp/ChooseSignUp';
// import RestoreAccountByEmail from '../../shared/RestoreAccountByEmail/RestoreAccountByEmail'
// import RestoreAccountByNumber from '../../shared/RestoreAccountByNumber/RestoreAccountByNumber'
import PostService from '../../api/PostService'
import { ProfileData } from '../../context'
import RestoreAccountByEmail from '../../shared/restoreAccountByEmail/RestoreAccountByEmail'

interface RestoreAccountProps {
    isOpenRestoreAccount: Function;
    loginOff: Function;
}

const RestoreAccount:FC<RestoreAccountProps> = ({isOpenRestoreAccount, loginOff}) => {
    const {data, setData} = useContext(ProfileData);
    const [chooseRestoreAccount, setChooseRestoreAccount] = useState(false);
    const [RestoreAccountVar, setRestoreAccountVar] = useState(false);

    const reChooseFunc = () => {
        isOpenRestoreAccount(false)
        // reChoose(true)
    }

    const closeSideBar = () => {
        if (chooseRestoreAccount === true) {
            setChooseRestoreAccount(false)
            isOpenRestoreAccount(false)
        }
        isOpenRestoreAccount(false)
    }

    return (
        <div className='RestoreAccount_overlay' onMouseDown={closeSideBar}>
            <div onMouseDown={(e) => e.stopPropagation()} className='RestoreAccount_box'>
                <div className="RestoreAccountClose">
                    <button onClick={closeSideBar}>
                        <img src={close} alt="Закрыть" />
                    </button>
                </div>
                <div className="RestoreAccountTitle">
                    <img src={icon} alt="Восстановление аккаунта" />
                    <h2 className="title-25 semibold">Восстановление аккаунта</h2>
                </div> 
                {chooseRestoreAccount
                    ?
                    <>
                        {RestoreAccountVar
                            ?
                                // <RestoreAccountByNumber toggle={closeSideBar} reChoose={reChooseFunc}/>
                                <></>
                            :
                                <RestoreAccountByEmail toggle={closeSideBar} reChoose={reChooseFunc}/>
                        }
                    </>
                    :
                    <>
                        <div className='RestoreAccountChoose'>
                            <ChooseSignUp theme={ChooseVariant.standart} icon={email} name='Восстановление по почте' choose={() => setChooseRestoreAccount(true)} type={() => setRestoreAccountVar(false)}/>
                            <ChooseSignUp theme={ChooseVariant.standart} icon={help} name='Восстановление через поддержку' choose={() => setChooseRestoreAccount(true)} type={() => setRestoreAccountVar(true)}/>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default RestoreAccount;