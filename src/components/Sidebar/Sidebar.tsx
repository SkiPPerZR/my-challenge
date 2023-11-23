import React, {FC, useState} from 'react';
import './Sidebar.scss'

import { useNavigate } from 'react-router-dom';
import games from 'public/img/SidebarLg/GamesLg.svg'
import games_hover from 'public/img/SidebarLg/GamesLgHover.svg'
import blog from 'public/img/SidebarLg/BlogLg.svg'
import blog_hover from 'public/img/SidebarLg/BlogLgHover.svg'
import other from 'public/img/SidebarLg/OtherLg.svg'
import other_hover from 'public/img/SidebarLg/OtherLgHover.svg'
import sport from 'public/img/SidebarLg/SportLg.svg'
import sport_hover from 'public/img/SidebarLg/SportLgHover.svg'
import tabletop from 'public/img/SidebarLg/TabletopLg.svg'
import tabletop_hover from 'public/img/SidebarLg/TabletopLgHover.svg'
import toEveryone from 'public/img/SidebarLg/ToEveryoneLg.svg'
import toEveryone_hover from 'public/img/SidebarLg/ToEveryoneLgHover.svg'

import like from 'public/img/SidebarLg/Liked.svg'
import like_hover from 'public/img/SidebarLg/LikedHover.svg'

import premium from 'public/img/Challenge/Premium.svg'
import premium_hover from 'public/img/Challenge/Premium_hover.svg'
import edit from 'public/img/Challenge/Edit.svg'
import edit_hover from 'public/img/Challenge/Edit_hover.svg'
import share from 'public/img/Challenge/Share.svg'
import share_hover from 'public/img/Challenge/Share_hover.svg'
import trash from 'public/img/Challenge/Trash.svg'
import trash_hover from 'public/img/Challenge/Trash_hover.svg'

import telegram from 'public/img/Telegram.svg'
import twitch from 'public/img/Twitch.svg'
import vk from 'public/img/VK-menu-logo.svg'


import SidebarButton from '../../shared/buttons/SidebarButton';
import Contacts from '../contacts/Contacts';
import useModal from '../../shared/hooks/useModal';
import BackButton from '../../shared/buttons/BackButton';


import SidebarUserButton from '../../shared/buttons/SidebarUserButton';
import Favorites from '../Favorites/Favorites';

interface SiderbarProps {
    backbutton: number;
}

const Sidebar:FC<SiderbarProps> = ({backbutton}) => {
    const [choosedBut, setChoosedButton] = React.useState<number|null>(null);
    const [togAct, setTogAct] = useState(false);
    const {isOpen, toggle} = useModal();
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    }

    const buttonsData = [
        {id:0, icon:games, activeIcon: games_hover, text: 'Видеоигры'},
        {id:1, icon:sport, activeIcon: sport_hover, text: 'Спорт'},
        {id:2, icon:tabletop, activeIcon: tabletop_hover, text: 'Настольные игры'},
        {id:3, icon:blog, activeIcon: blog_hover, text: 'Блогеры'},
        {id:4, icon:toEveryone, activeIcon: toEveryone_hover, text: 'Вызов каждому'},
        {id:5, icon:other, activeIcon: other_hover, text: 'Другое'} 
    ]

    const buttonsDataChallenge = [
        {id:0, icon:premium, activeIcon: premium_hover, text: 'Продвинуть челлендж'},
        {id:1, icon:share, activeIcon: share_hover, text: 'Пригласить друзей'},
        {id:2, icon:trash, activeIcon: trash_hover, text: 'Удалить челлендж'},
        {id:3, icon:edit, activeIcon: edit_hover, text: 'Редактировать челлендж'}
    ]

    return (
        <div className='Sidebar'>
            <div className='SidebarWrapper'>
                <div className='SidebarWrapperMenu'>
                    <div className='logo' onClick={navigateToMain} />
                    {backbutton === 1
                        ?
                        <BackButton/>
                        : <div />
                    }
                    {backbutton === 0
                        ? 
                        <>
                            {buttonsData.map(el=>
                                <SidebarButton key={el.id} icon={el.icon} activeIcon={el.activeIcon} text={el.text} onClick={(event)=>setChoosedButton(el.id)} active={el.id===choosedBut}/>
                            )}
                            <div className="SidebarWrapperMenuUser">
                                <SidebarUserButton icon={like} activeIcon={like_hover} text='Избранное' toggle={toggle} onMouseDown={(togAct) => setTogAct(false)}/>
                            </div>
                        </>
                        : <div />
                    }
                    {backbutton === 2
                        ? 
                        buttonsDataChallenge.map(el=>
                            <SidebarButton key={el.id} icon={el.icon} activeIcon={el.activeIcon} text={el.text} onClick={(event)=>setChoosedButton(el.id)} active={el.id===choosedBut}/>
                        )
                        : <div />
                    }
                </div>
                <div className='SidebarWrapperContacts'>
                    <button className='title-18' onClick={toggle} onMouseDown={(togAct) => setTogAct(true)}>О компании</button>
                    <hr color="#102B32"/>
                    <ul className='SidebarWrapperContactsSocial'>
                        <li><a href="####"><img src={telegram} alt="Telegram" /></a></li>
                        <li><a href="@@@@"><img src={twitch} alt="Twitch" /></a></li>
                        <li><a href="$$$$"><img src={vk} alt="VK" /></a></li>
                    </ul>
                </div>
            </div>
            {togAct? <Contacts isOpen={isOpen} toggle={toggle}/> : <Favorites isOpen={isOpen} toggle={toggle}/>}
        </div>
    );
};

export default Sidebar;