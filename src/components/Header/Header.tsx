import React from 'react';
import './Header.scss'

import useModal from '../../shared/hooks/useModal';

import HeaderSelector from '../../shared/selectors/HeaderSelector';
import SearchInput from '../../shared/inputs/SearchInput/SearchInput';
import HeaderButton from '../../shared/buttons/HeaderButton';
import BalanceState from '../../shared/balanceState/BalanceState';
import NotificationButton from '../../shared/buttons/NotificationButton';
import UserProfileButton from '../../shared/buttons/UserProfileButton';
import PurchaseSale from '../PurchaseSale/PurchaseSale';

const Header = () => {
    const {isOpen, toggle} = useModal();
    return (
        <header className='Header'>
            <nav className='HeaderSort'>
                <HeaderSelector children='Все челенджи'/>
                <HeaderSelector children='Мои челенджи'/>
            </nav>
            <SearchInput width={600}/>
            <nav className='HeaderActionGroup'>
                <HeaderButton children='Создать челлендж'/>
                <BalanceState balance='213 124,23' toggle={toggle}/>
                <NotificationButton/>
                <UserProfileButton/>
            </nav>
            <PurchaseSale isOpen={isOpen} toggle={toggle}/>
        </header>
    );
};

export default Header;