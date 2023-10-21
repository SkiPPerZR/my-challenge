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


interface HeaderProps {
    login: number;
}

const Header:FC<HeaderProps> = ({login}) => {
    const {isOpen, toggle} = useModal();
    const [toggleStatus, setToggleStatus] = useState(false)

    return (
        <header className='Header'>
            <nav className='HeaderSort'>
                <HeaderSelector children='Все челенджи'/>
                <HeaderSelector children='Мои челенджи'/>
            </nav>
            <SearchInput width={600}/>
            {
                login === 1 
                ?
                <>
                    <nav className='HeaderActionGroup'>
                        <HeaderButton children='Создать челлендж'/>
                        <BalanceState balance='213 124,23' toggle={toggle} toggleStatus={() => setToggleStatus(true)}/>
                        <NotificationButton/>
                        <UserProfileButton toggle={toggle} toggleStatus={() => setToggleStatus(false)}/>
                    </nav>
                    <>
                        {toggleStatus 
                            ? <PurchaseSale isOpen={isOpen} toggle={toggle}/>
                            : <ProfileMenu user_name='IvanZolo2004' user_num={12345} isOpenMenu={isOpen} toggleMenu={toggle}/>
                        }
                    </>
                </>
                :
                <></>
            }
            {
                login === 0
                ?
                <>
                    <div className='HeaderActionGroup'>
                        <LoginButton children='Вход' toggle={toggle} toggleStatus={() => setToggleStatus(false)}/>
                        <SignUpButton children='Регистрация' toggle={toggle} toggleStatus={() => setToggleStatus(true)}/>
                    </div>
                    <>
                        {toggleStatus 
                            ? <SignUp isOpen={isOpen} toggle={toggle} />
                            : <LogIn isOpen={isOpen} toggle={toggle} />
                        }
                    </>
                </>
                :
                <></>
            }
        </header>
    );
};

export default Header;