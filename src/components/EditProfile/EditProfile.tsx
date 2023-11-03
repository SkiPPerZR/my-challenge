import React, { FC } from 'react'
import './EditProfile.scss'

import close from '../../img/close.svg'
import defIcon from '../../img/iconSignUp.svg'

interface EditProfileProps {
    toggleEdit: () => void;
    isOpenEdit: boolean;
    toggleStatus: () => void;
}

const EditProfile:FC<EditProfileProps> = ({toggleEdit,isOpenEdit,toggleStatus}) => {
    return(
        <>
            {isOpenEdit&&(
                <div className="EditProfile-overlay" onClick={toggleEdit} onMouseDown={toggleStatus}>
                    <div className="EditProfile-box" onClick={(e)=>e.stopPropagation()}>
                        <div className="EditProfileTitle">
                            <img src={defIcon} alt="Иконка" />
                            <h2 className="title-25 semibold">Редактирование профиля</h2>
                            <button onClick={toggleEdit} onMouseDown={toggleStatus}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                        <form action="">
                        </form>
                    </div>
                </div>
            )}        
        </>
    );
};

export default EditProfile;