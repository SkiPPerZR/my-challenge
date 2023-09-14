import React, { FC } from 'react';
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
import SinqUpButton from '../../shared/buttons/SinqUpButton';
import { useNavigate } from 'react-router-dom';


interface HeaderProps {
    login: number;
}

const Header:FC<HeaderProps> = ({login}) => {
    const {isOpen, toggle} = useModal();

    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate('/main');
    }

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
                        <BalanceState balance='213 124,23' toggle={toggle}/>
                        <NotificationButton/>
                        <UserProfileButton/>
                    </nav>
                    <PurchaseSale isOpen={isOpen} toggle={toggle}/>
                </>
                :
                    
                    <div className='HeaderActionGroup'>
                        <LoginButton children='Вход' onClick={navigateToMain}/>
                        <SinqUpButton children='Регистрация'/>
                    </div>
            }
        </header>
    );
};

export default Header;