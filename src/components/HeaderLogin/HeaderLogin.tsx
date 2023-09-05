import React from 'react';
import {useNavigate} from 'react-router-dom'
import './HeaderLogin.scss'


import HeaderSelector from '../../shared/selectors/HeaderSelector';
import SearchInput from '../../shared/inputs/SearchInput/SearchInput';
import LoginButton from '../../shared/buttons/LoginButton';
import SinqUpButton from '../../shared/buttons/SinqUpButton';

const HeaderLogin = () => {

    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate('/main');
    }
  

    return (
        <header className='HeaderLogin'>
            <nav className='HeaderLoginSort'>
                <HeaderSelector children='Все челенджи'/>
                <HeaderSelector children='Мои челенджи'/>
            </nav>
            <SearchInput width={600}/>
            {/* <nav className='HeaderActionGroup'>
                <HeaderButton children='Создать челлендж'/>
                <BalanceState balance='213 124,23' toggle={toggle}/>
                <NotificationButton/>
                <UserProfileButton/>
            </nav>
            <PurchaseSale isOpen={isOpen} toggle={toggle}/> */}
            <div className='HeaderLoginLogin'>
                <LoginButton children='Вход' onClick={navigateToMain}/>
                <SinqUpButton children='Регистрация'/>
            </div>
        </header>
    );
};

export default HeaderLogin;