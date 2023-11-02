import React, { FC } from 'react';
import './DeleteProfile.scss'

import close from '../../img/close.svg'

interface DeleteProfileProps {
    toggleDel: () => void;
    isOpenDel: boolean;
}

const DeleteProfile:FC<DeleteProfileProps> = ({toggleDel,isOpenDel}) => {
    return (
        <>
            {isOpenDel&&(
                <div className='DeleteProfile-overlay' onClick={toggleDel}>
                    <div className="DeleteProfile-box" onClick={(e)=>e.stopPropagation()}>
                    <div className="DeleteProfileTitle">
                            <img src={close} alt="Удаление" />
                            <h2 className="title-25 semibold">Удаление аккаунта</h2>
                            <button onClick={toggleDel}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                    </div>
                    
                </div>
            )}
        </>
    );
};

export default DeleteProfile;