import React, { FC, useContext, useState } from 'react';
import './FormsSettings.scss'
import ImgInput from '../../inputs/ImgInput/ImgInput';
import PostService from '../../../api/PostService';
import { ProfileData, TokenContext } from '../../../context';

interface FormsSettingsProps {
    onClick: Function;
}

const FormsSettings:FC<FormsSettingsProps> = ({onClick}) => {
    const { data, setData } = useContext(ProfileData);

    const [isName, setIsName] = useState('')
    const [isSurname, setIsSurname] = useState('')
    const [isCity, setIsCity] = useState('')
    const [isVK, setIsVK] = useState('')
    const [isSteam, setIsSteam] = useState('')
    const [isDiscord, setIsDiscord] = useState('')
    const [isDiscordError, setIsDiscordError] = useState(false)

    const handleField1Change = (name: string, surname: string, city: string, vk: string, steam: string, discord: string) => {
        setData((prevData: any) => ({
          ...prevData,
          name: name,
          surname: surname,
          city: city,
          vk: vk,
          steam: steam,
          discord: discord
        }));
      };

    // async function fetchSettingProfile(Name : String, Surname : String, City : String, Vk: String, Steam: String, Discord: String, token : String) {
    //     await PostService.sendSettingProfile(Name, Surname, City, Vk, Steam, Discord, token);
    // }

    // function checkNumber() {
    //     if (isNumber.length !== 10) {
    //         setIsNumberError(true)
    //     }
    //     setIsNumberError(false)
    // }

    // function checkDiscord() {
    //     if (isDiscord.length !== 18) {
    //         setIsDiscordError(true)
    //     } else {
    //         setIsDiscordError(false)
    //     }
    // }

    function sendProfileData() {
        // checkNumber()
        // checkDiscord()
        // if (isNumberError || isDiscordError) {
            console.log('я дополнил форму')
            // fetchSettingProfile(isName,isSurname,isCity,isNumber,isVK,isSteam,isDiscord,isToken)
            handleField1Change(isName,isSurname,isCity,isVK,isSteam,isDiscord)
            onClick()
        // }
    }

    return (
        <div className='FormsSettings'>
            <form className='FormsSettingsForm' action="">
                <ImgInput />
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Имя</label>
                    <input type='text' className='text-17 semibold' value={isName} onChange={event => setIsName(event.target.value)}></input>
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Фамилия</label>
                    <input type='text' className='text-17 semibold' value={isSurname} onChange={event => setIsSurname(event.target.value)}></input>
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Город</label>
                    <input type='text' className='text-17 semibold' value={isCity} onChange={event => setIsCity(event.target.value)}></input>
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>VK</label>
                    <input type='text' className='text-17 semibold' value={isVK} onChange={event => setIsVK(event.target.value)}></input>
                    <span className="text-14 medium notice">Укажите VK Id</span>
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Steam</label>
                    <input type='text' className='text-17 semibold' value={isSteam} onChange={event => setIsSteam(event.target.value)}></input>
                    <span className="text-14 medium notice">Укажите Steam Id</span>
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Discord</label>
                    <input type='number' className='text-17 semibold' value={isDiscord} onChange={event => setIsDiscord(event.target.value)}></input>
                    <span className="text-14 medium notice">
                        {isDiscordError
                            ?
                                <>Укажите свой Discord Id</>
                            :
                                <>Discord Id состоить из 18 цифр</>
                        }
                    </span>
                </div>
            </form>
            <button className='FormsSettingsButton text-17 semibold' onClick={() => sendProfileData()}>Следующий шаг</button>
            <span className='text-14 medium notice'>Вы можете заполнить только те поля, которые считаете необходимыми</span>
        </div>
    );
};

export default FormsSettings;