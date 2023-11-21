import React, { FC } from 'react'
import './EditProfile.scss'

import close from 'public/img/close.svg'
import defIcon from 'public/img/iconSignUp.svg'
import FormInput from '../../shared/inputs/FormInput/FormInput';
import ImgInput from '../../shared/inputs/ImgInput/ImgInput';
import DefaultButton, { ButtonVariant } from '../../shared/buttons/DefaultButton';

interface EditProfileProps {
    name: string;
    setEditProfile: () => void;
}

const EditProfile: FC<EditProfileProps> = ({ setEditProfile, name }) => (
    <div className="EditProfile-overlay" onMouseDown={setEditProfile}>
        <div className="EditProfile-box" onMouseDown={(e) => e.stopPropagation()}>
            <div className="EditProfileClose">
                <button onClick={setEditProfile}>
                    <img src={close} alt="Закрыть" />
                </button>
            </div>
            <div className="EditProfileTitle">
                <img src={defIcon} alt="Иконка" />
                <h2 className="title-25 semibold">{name}</h2>
            </div>
            <form action="">
                {/* <ImgInput /> */}
                <FormInput label='Имя Фамилия' id='Name' />
                <FormInput label='Город' id='Name' />
                <FormInput label='Контактный номер' id='Name' />
                <FormInput label='VK' id='Name' />
                <FormInput label='Steam' id='Name' />
                <FormInput label='Discord' id='Name' />
                <FormInput label='Telegram' id='Name' />
                <DefaultButton theme={ButtonVariant.standart} children='Редактировать профиль' paddingWidth={145} onClick={setEditProfile} />
            </form>
        </div>
    </div>
);

export default EditProfile;