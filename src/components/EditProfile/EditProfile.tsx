import React, { FC, useContext, useEffect, useState } from 'react'
import './EditProfile.scss'

import close from '../../img/close.svg'
import defIcon from '../../img/iconSignUp.svg'
import ImgInput from '../../shared/inputs/ImgInput/ImgInput';
import { ICityItem } from '../../interfaces/ICity';
import PostService from '../../api/PostService';
import { ProfileData, ProfileNewData, TokenContext } from '../../context';
import { ICategory, ICategorySub } from '../../interfaces/IResponse';

interface EditProfileProps {
    name: string;
    setEditProfile: () => void;
    closeWindow: () => void;
}

const EditProfile:FC<EditProfileProps> = ({setEditProfile, name, closeWindow}) => {
    const { data, setData } = useContext(ProfileData);
    const {isToken, setIsToken} = useContext(TokenContext);

    const [cities, setCities] = useState<ICityItem[]>([]);
    const [liSwitch, setLiSwitch] = useState<string>('FormsSettingsFormInputCitiesList');
    const [visible, setVisible] = useState(false);

    const [isNick, setIsNick] = useState('');
    const [isDob, setIsDob] = useState('');
    const [isName, setIsName] = useState('');
    const [isCity, setIsCity] = useState('');
    const [isVK, setIsVK] = useState('');
    const [isSteam, setIsSteam] = useState('');
    const [isDiscord, setIsDiscord] = useState('');
    const [isDiscordError, setIsDiscordError] = useState(false);
    const [isCategory, setIsCategory] = useState<ICategory[]>([]);
    const [isCategorySub, setIsCategorySub] = useState<ICategorySub[]>([]);

    async function fetchProfileData(token: string) {
        let profileData = await PostService.getProfileData(token);
        setData(profileData);
    }

    async function fetchProfileDataInfo() {
        await PostService.sendSettingProfile(data);
        console.log('Отправка данных юзера'+JSON.stringify(data))
    }

    async function fetchCities(letter: string) {
        let citiesList = await PostService.getCities(isToken,letter)
        setCities(citiesList.city)
    }

    const handleField1Change = (nick: string, date_of_birth : string, fio: string, city: string, vk: string, steam: string, category: ICategory[], category_sub: ICategorySub[], discord: string, token: string) => {
        setData((prevData: any) => ({
            ...prevData,
            nick : nick,
            date_of_birth : date_of_birth,
            fio : fio,
            city : city,
            vk: vk,
            steam: steam,
            discord: discord,
            category: category,
            category_sub: category_sub,
            token : token
        }));
      };

    useEffect(() => {
        handleField1Change(isNick,isDob,isName,isCity,isVK,isSteam,isCategory,isCategorySub,isDiscord,isToken);
        // console.log(JSON.stringify(data))
    }, [isName, isVK, isSteam, isDiscord])

    useEffect(()=>{
        buttonHandler()
    },[isCity])

    useEffect(()=>{
        fetchProfileData(isToken);
        setIsNick(data.nick)
        setIsDob(data.date_of_birth)
        setIsCategory(data.category)
        setIsCategorySub(data.category_sub)
    },[])

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
        let input = event.target.value;
        setIsCity(input);
        fetchCities(isCity);
    } 

    function ExitWindow() {
        setEditProfile();
        closeWindow();
    }

    function sendProfileData() {
        fetchProfileDataInfo();
        setEditProfile();
        closeWindow()
    }
    return(
        <div className="EditProfile-overlay" onMouseDown={ExitWindow}>
            <div className="EditProfile" onMouseDown={(e)=>e.stopPropagation()}>
                <div className="EditProfileClose">
                    <button onClick={ExitWindow}>
                        <img src={close} alt="Закрыть" />
                    </button>
                </div>
                <div className="EditProfileTitle">
                    <img src={defIcon} alt="Иконка" />
                    <h2 className="title-25 semibold">{name}</h2>
                </div>
                <ImgInput />
                <div className='EditProfileFormInput'>
                    <label className='text-14 regular'>Имя и Фамилия</label>
                    <input type='text' className='text-17 semibold' value={isName} onChange={event => setIsName(event.target.value)}></input>
                </div>
                <div className='EditProfileFormInput'>
                    <label className='text-14 regular'>Город</label>
                    <input type='text' className='text-17 semibold' value={isCity} onChange={citiesUpdate}></input>
                    <div className={liSwitch}>
                        {cities.map(cities => (
                            <li className='text-14 regular' onClick={buttonHandler} onMouseDown={()=>setIsCity(cities.name)}>{cities.name}</li>
                        ))}
                    </div>
                </div>
                <div className='EditProfileFormInput'>
                    <label className='text-14 regular'>VK</label>
                    <input type='text' className='text-17 semibold' value={isVK} onChange={event => setIsVK(event.target.value)}></input>
                    <span className="text-14 medium notice">Укажите VK Id</span>
                </div>
                <div className='EditProfileFormInput'>
                    <label className='text-14 regular'>Steam</label>
                    <input type='text' className='text-17 semibold' value={isSteam} onChange={event => setIsSteam(event.target.value)}></input>
                    <span className="text-14 medium notice">Укажите Steam Id</span>
                </div>
                <div className='EditProfileFormInput'>
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
                <button className='EditProfileButton text-17 semibold' onClick={() => sendProfileData()}>Обновить</button>
                <span className='text-14 medium notice'>Вы можете заполнить только те поля, которые считаете необходимыми</span>
            </div>
        </div>
    );
};

export default EditProfile;