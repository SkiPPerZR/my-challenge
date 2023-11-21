import React, { FC, useContext, useState } from 'react';
import './DeleteProfile.scss'

import closeIcon from 'public/img/close.svg'
import DefaultButton, { ButtonVariant } from '../../shared/buttons/DefaultButton';
import PostService from '../../api/PostService';
import { TokenContext } from '../../context';

interface DeleteProfileProps {
    setDeleteProf: () => void;
    close: () => void;
}

const DeleteProfile: FC<DeleteProfileProps> = ({ setDeleteProf, close }) => {
    const { isToken, setIsToken } = useContext(TokenContext)
    const [deleteProfile, setDeleteProfile] = useState(false)

    async function fetchDeleteAccount(token: string) {
        await PostService.deleteAccount(token)
        setDeleteProfile(true)
    }

    function closeWindow() {
        setDeleteProf()
        close()
    }

    function deleteAccout() {
        fetchDeleteAccount(isToken);
        setTimeout(() => {
            setDeleteProf();
            close()
            sessionStorage.setItem('isAuth', 'false')
            sessionStorage.setItem('isToken', '')
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        }, 10000);
    }

    return (
        <div className='DeleteProfile-overlay' onMouseDown={() => closeWindow()}>
            <div className="DeleteProfile-box" onMouseDown={(e) => e.stopPropagation()}>
                <div className="DeleteProfileClose">
                    <button onClick={() => closeWindow()}>
                        <img src={closeIcon} alt="Закрыть" />
                    </button>
                </div>
                <div className="DeleteProfileTitle">
                    <svg width="40" height="40" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8281 2C7.31812 2 2.82812 6.49 2.82812 12C2.82812 17.51 7.31812 22 12.8281 22C18.3381 22 22.8281 17.51 22.8281 12C22.8281 6.49 18.3381 2 12.8281 2ZM16.1881 14.3C16.4781 14.59 16.4781 15.07 16.1881 15.36C16.0381 15.51 15.8481 15.58 15.6581 15.58C15.4681 15.58 15.2781 15.51 15.1281 15.36L12.8281 13.06L10.5281 15.36C10.3781 15.51 10.1881 15.58 9.99813 15.58C9.80813 15.58 9.61813 15.51 9.46813 15.36C9.17813 15.07 9.17813 14.59 9.46813 14.3L11.7681 12L9.46813 9.7C9.17813 9.41 9.17813 8.93 9.46813 8.64C9.75813 8.35 10.2381 8.35 10.5281 8.64L12.8281 10.94L15.1281 8.64C15.4181 8.35 15.8981 8.35 16.1881 8.64C16.4781 8.93 16.4781 9.41 16.1881 9.7L13.8881 12L16.1881 14.3Z" fill="#102B32" />
                    </svg>
                    <h2 className="title-25 semibold">Удаление аккаунта</h2>
                </div>
                <div className="DeleteProfileContent">
                    <span className='text-28 light'>
                        {deleteProfile
                            ? <>Ваш аккаунт успешно удален.<br />В течение года вы можете его восстановить.</>
                            : <>Вы действительно хотите удалить аккаунт? Ваш аккаунт будет в базе еще 1 год и вы можете вернуться.</>
                        }
                    </span>
                    <div className="DeleteProfileContentChoose">
                        <DefaultButton theme={ButtonVariant.standart} children='Остаться' paddingWidth={60} onClick={() => closeWindow} />
                        <DefaultButton theme={ButtonVariant.revers} children='Удалить аккаунт' paddingWidth={30} onClick={() => deleteAccout} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProfile;