import React, { FC, useContext, useEffect, useState } from 'react';
import './Header.scss'

import useModal from '../../shared/hooks/useModal';

import HeaderSelector from '../../shared/selectors/HeaderSelector';
import SearchInput from '../../shared/inputs/SearchInput/SearchInput';
import HeaderButton from '../../shared/buttons/HeaderButton';
import BalanceState from '../../shared/balanceState/BalanceState';
import NotificationButton from '../../shared/buttons/NotificationButton';
import UserProfileButton from '../../shared/buttons/UserProfileButton';
import PurchaseSale from '../PurchaseSale/PurchaseSale';
import LoginButton from '../../shared/buttons/LoginButton';
import SignUpButton from '../../shared/buttons/SignUpButton';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import CreateNewChallengeModal from '../CreateNewChallengeModal/CreateNewChallengeModal'
import CreateNewChallengeSideBar from '../CreateNewChallengeSideBar/CreateNewChallengeSideBar'
import PostService from '../../api/PostService';
import { ProfileData, TokenContext } from '../../context';
import { ISetting } from '../../interfaces/ISettings';
import RestoreAccount from '../RestoreAccount/RestoreAccount';


interface HeaderProps {
    login: boolean;
}

const Header:FC<HeaderProps> = ({login}) => {
    const {isOpen, toggle} = useModal();

    const {isToken, setIsToken} = useContext(TokenContext);
    const {data, setData} = useContext(ProfileData)
    const [profData, setProfData] = useState<ISetting | null>(null);

    const [openRestoreAccout, setOpenRestoreAccout] = useState(false)
    const [openProfileStatus, setOpenProfileStatus] = useState(false);
    const [openSignUpStatus, setOpenSignUpStatus] = useState(false);
    const [openLogInStatus, setOpenLogInStatus] = useState(false);
    const [openPurchStatus, setOpenPurchStatus] = useState(false);
    const [openMiniModal, setOpenMiniModal] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);

    async function fetchProfileData(token: string) {
        let profileData = await PostService.getProfileData(token);
        // console.log('Инфа о пользователе при открытии меню: ' + JSON.stringify(profileData))
        setProfData(profileData);
    }

    function openProfileMenu() {
        const temporaryToken = sessionStorage.getItem('isToken');
        setIsToken(temporaryToken)
        console.log('Токен при открытии меню: ' + temporaryToken)
        if (temporaryToken) 
            fetchProfileData(temporaryToken)
        setOpenProfileStatus(true)
    }

    useEffect(()=>{
        // if (login) {
        //     // setProfData(data)
            
        //     console.log('Обработка данных юзера: '+JSON.stringify(profData))
        // } else {
        //     console.log('Обработка данных юзера: '+JSON.stringify(profData))
        // }
    }, [])

    return (
        <header className='Header'>
            <nav className='HeaderSort'>
                <HeaderSelector children='Все челенджи'/>
                <HeaderSelector children='Мои челенджи'/>
            </nav>
            <SearchInput width={600}/>
            {
                login
                ?
                <>
                    <nav className='HeaderActionGroup'>
                        <HeaderButton children='Создать челлендж' setOpenMiniModal={setOpenMiniModal}/>
                        <BalanceState balance='213 124,23' toggle={toggle} toggleStatus={() => setOpenPurchStatus(true)}/>
                        <NotificationButton/>
                        <UserProfileButton toggle={toggle} toggleStatus={openProfileMenu}/>
                    </nav>
                    {openProfileStatus && <ProfileMenu profData={profData} setOpenProfileStatus={()=>setOpenProfileStatus(false)}/>}
                    {openPurchStatus && <PurchaseSale setOpenPurchStatus={setOpenPurchStatus}/>}
                    {openMiniModal && <CreateNewChallengeModal setOpenMiniModal={setOpenMiniModal} setOpenSideBar={setOpenSideBar} />}
                    {openSideBar && <CreateNewChallengeSideBar setOpenSideBar={setOpenSideBar}/>}
                </>
                :
                <>
                    <div className='HeaderActionGroup'>
                        <LoginButton children='Вход' toggle={toggle} toggleStatus={setOpenLogInStatus}/>
                        <SignUpButton children='Регистрация' toggle={toggle} toggleStatus={setOpenSignUpStatus}/>
                    </div>
                    {openSignUpStatus && <SignUp isOpenSignUp={setOpenSignUpStatus} reChoose={setOpenLogInStatus}/>}
                    {openLogInStatus && <LogIn isOpenLogIn={setOpenLogInStatus} reChoose={setOpenSignUpStatus} forgotForm={setOpenRestoreAccout}/>}
                    {openRestoreAccout && <RestoreAccount isOpenRestoreAccount={setOpenRestoreAccout} loginOff={setOpenLogInStatus}/>}
                </>
            }

        </header>
    );
};

export default Header;