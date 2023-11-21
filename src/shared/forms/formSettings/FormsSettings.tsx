import React, { FC, useContext, useEffect, useState } from 'react';
import './FormsSettings.scss'
import ImgInput from '../../inputs/ImgInput/ImgInput';
import PostService from '../../../api/PostService';
import { ProfileData, TokenContext } from '../../../context';
import { ICityItem } from '../../../interfaces/ICity';

interface FormsSettingsProps {
    onClick: Function;
}

const FormsSettings:FC<FormsSettingsProps> = ({onClick}) => {
    const { data, setData } = useContext(ProfileData);
    const {isToken, setIsToken} = useContext(TokenContext);

    const [cities, setCities] = useState<ICityItem[]>([]);
    const [liSwitch, setLiSwitch] = useState<string>('FormsSettingsFormInputCitiesList');
    const [visible, setVisible] = useState(false);

    const [isName, setIsName] = useState('')
    const [isCity, setIsCity] = useState('')
    const [isVK, setIsVK] = useState('')
    const [isSteam, setIsSteam] = useState('')
    const [isDiscord, setIsDiscord] = useState('')
    const [isDiscordError, setIsDiscordError] = useState(false)

    async function fetchCities(letter: string) {
        const citiesList = await PostService.getCities(isToken,letter)
        setCities(citiesList.city)
    }

    const handleField1Change = (fio: string, city: string, vk: string, steam: string, discord: string, token: string) => {
        setData((prevData: any) => ({
            ...prevData,
            fio,
            city,
            vk,
            steam,
            discord,
            token
        }));
    };

    useEffect(() => {
        buttonHandler()
    }, [isCity])

    const buttonHandler = (): void => {
        setVisible(!visible)
        if (visible || isCity === '') {
            setLiSwitch('FormsSettingsFormInputCitiesList CitiesVisible')
        }
        else{
            setLiSwitch('FormsSettingsFormInputCitiesList')
        }
    }

    function citiesUpdate(event: any) {
        const input = event.target.value;
        setIsCity(input);
        fetchCities(isCity);
    } 

    function sendProfileData() {
        handleField1Change(isName,isCity,isVK,isSteam,isDiscord,isToken);
        onClick();
    }

    return (
        <div className='FormsSettings'>
            <form className='FormsSettingsForm' action="">
                <ImgInput />
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Имя и Фамилия</label>
                    <input type='text' className='text-17 semibold' value={isName} onChange={event => setIsName(event.target.value)} />
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Город</label>
                    <input type='text' className='text-17 semibold' value={isCity} onChange={citiesUpdate} />
                    <div className={liSwitch}>
                        {cities.map(cities => (
                            <li className='text-14 regular' onClick={buttonHandler} onMouseDown={()=>setIsCity(cities.name)}>{cities.name}</li>
                        ))}
                    </div>
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>VK</label>
                    <input type='text' className='text-17 semibold' value={isVK} onChange={event => setIsVK(event.target.value)} />
                    <span className="text-14 medium notice">Укажите VK Id</span>
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Steam</label>
                    <input type='text' className='text-17 semibold' value={isSteam} onChange={event => setIsSteam(event.target.value)} />
                    <span className="text-14 medium notice">Укажите Steam Id</span>
                </div>
                <div className='FormsSettingsFormInput'>
                    <label className='text-14 regular'>Discord</label>
                    <input type='number' className='text-17 semibold' value={isDiscord} onChange={event => setIsDiscord(event.target.value)} />
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