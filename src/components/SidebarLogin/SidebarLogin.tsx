import React from 'react';
import './SidebarLogin.scss'
import SidebarButton from '../../shared/buttons/SidebarButton';
import Contacts from '../contacts/Contacts';
import useModal from '../../shared/hooks/useModal';

import games from '../../img/SidebarLg/GamesLg.svg'
import games_hover from '../../img/SidebarLg/GamesLgHover.svg'
import blog from '../../img/SidebarLg/BlogLg.svg'
import blog_hover from '../../img/SidebarLg/BlogLgHover.svg'
import other from '../../img/SidebarLg/OtherLg.svg'
import other_hover from '../../img/SidebarLg/OtherLgHover.svg'
import sport from '../../img/SidebarLg/SportLg.svg'
import sport_hover from '../../img/SidebarLg/SportLgHover.svg'
import tabletop from '../../img/SidebarLg/TabletopLg.svg'
import tabletop_hover from '../../img/SidebarLg/TabletopLgHover.svg'
import toEveryone from '../../img/SidebarLg/ToEveryoneLg.svg'
import toEveryone_hover from '../../img/SidebarLg/ToEveryoneLgHover.svg'
import telegram from '../../img/Telegram.svg'
import twitch from '../../img/Twitch.svg'
import vk from '../../img/VK-menu-logo.svg'


const SidebarLogin = () => {
    // const [choosedBut, setChoosedButton] = React.useState<number|null>(null);
    const {isOpen, toggle} = useModal();

    // const buttonsData = [
    //     {id:0, icon:games, activeIcon: games_hover, text: 'Видеоигры'},
    //     {id:1, icon:sport, activeIcon: sport_hover, text: 'Спорт'},
    //     {id:2, icon:tabletop, activeIcon: tabletop_hover, text: 'Настольные игры'},
    //     {id:3, icon:blog, activeIcon: blog_hover, text: 'Блогеры'},
    //     {id:4, icon:toEveryone, activeIcon: toEveryone_hover, text: 'Вызов каждому'},
    //     {id:5, icon:other, activeIcon: other_hover, text: 'Другое'} 
    // ]
    return (
        <div className='SidebarLogin'>
            <div className='logo'></div>
            {/* {buttonsData.map(el=>
                <SidebarButton key={el.id} icon={el.icon} activeIcon={el.activeIcon} text={el.text} onClick={(event)=>setChoosedButton(el.id)} active={el.id===choosedBut}/>
            )} */}
            <div className='SidebarLoginContacts'>
                <button className='title-18' onClick={toggle}>Контакты</button>
                <hr color="#102B32"/>
                <ul className='SidebarLoginContactsSocial'>
                    <li><a href="####"><img src={telegram} alt="Telegram" /></a></li>
                    <li><a href="@@@@"><img src={twitch} alt="Twitch" /></a></li>
                    <li><a href="$$$$"><img src={vk} alt="VK" /></a></li>
                </ul>
            </div>
            <Contacts isOpen={isOpen} toggle={toggle}/>
        </div>
    );
};

export default SidebarLogin;