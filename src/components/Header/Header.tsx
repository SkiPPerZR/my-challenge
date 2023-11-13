import React, { FC, useState } from 'react';
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


interface HeaderProps {
    login: boolean;
}

const Header:FC<HeaderProps> = ({login}) => {
    const {isOpen, toggle} = useModal();
    const [openSignUpStatus, setOpenSignUpStatus] = useState(false)
    const [openLogInStatus, setOpenLogInStatus] = useState(false)
    const [openPurchStatus, setOpenPurchStatus] = useState(false)
    const [openMiniModal, setOpenMiniModal] = useState(false)
    const [openSideBar, setOpenSideBar] = useState(false)

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
                        <UserProfileButton toggle={toggle} toggleStatus={() => setOpenPurchStatus(false)}/>
                    </nav>
                    <>
                        <ProfileMenu user_name='IvanZolo2004' user_num={12345} isOpenMenu={isOpen} toggleMenu={toggle}/>
                        {openPurchStatus && <PurchaseSale setOpenPurchStatus={setOpenPurchStatus}/>}
                        {openMiniModal && <CreateNewChallengeModal setOpenMiniModal={setOpenMiniModal} setOpenSideBar={setOpenSideBar} />}
                        {openSideBar && <CreateNewChallengeSideBar setOpenSideBar={setOpenSideBar}/>}
                    </>
                </>
                :
                <>
                    <div className='HeaderActionGroup'>
                        <LoginButton children='Вход' toggle={toggle} toggleStatus={setOpenLogInStatus}/>
                        <SignUpButton children='Регистрация' toggle={toggle} toggleStatus={setOpenSignUpStatus}/>
                    </div>
                        {openSignUpStatus && <SignUp isOpenSignUp={setOpenSignUpStatus}/>}
                        {openLogInStatus && <LogIn isOpenLogIn={setOpenLogInStatus}/>}
                </>
            }

        </header>
    );
};

export default Header;