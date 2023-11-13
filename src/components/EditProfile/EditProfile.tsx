import React, { FC } from 'react'
import './EditProfile.scss'

import close from '../../img/close.svg'
import defIcon from '../../img/iconSignUp.svg'
import FormInput from '../../shared/inputs/FormInput/FormInput';
import ImgInput from '../../shared/inputs/ImgInput/ImgInput';
import DefaultButton from '../../shared/buttons/DefaultButton';

interface EditProfileProps {
    name: string;
    toggleEdit: () => void;
    isOpenEdit: boolean;
    toggleStatus: () => void;
}

const EditProfile:FC<EditProfileProps> = ({toggleEdit,isOpenEdit,toggleStatus,name}) => {
    return(
        <>
            {isOpenEdit&&(
                <div className="EditProfile-overlay" onClick={toggleEdit} onMouseDown={toggleStatus}>
                    <div className="EditProfile-box" onClick={(e)=>e.stopPropagation()} onMouseDown={(e)=>e.stopPropagation()}>
                        <div className="EditProfileClose">
                            <button onClick={toggleEdit} onMouseDown={toggleStatus}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                        <div className="EditProfileTitle">
                            <img src={defIcon} alt="Иконка" />
                            <h2 className="title-25 semibold">{name}</h2>
                        </div>
                        <form action="">
                            <ImgInput />
                            <FormInput label='Имя Фамилия' id='Name'/>
                            <FormInput label='Город' id='Name'/>
                            <FormInput label='Контактный номер' id='Name'/>
                            <FormInput label='VK' id='Name'/>
                            <FormInput label='Steam' id='Name'/>
                            <FormInput label='Discord' id='Name'/>
                            <FormInput label='Telegram' id='Name'/>
                            <DefaultButton children='Редактировать профиль' paddingWidth={145}/>
                        </form>
                    </div>
                </div>
            )}        
        </>
    );
};

export default EditProfile;