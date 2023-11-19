import React, { FC } from 'react';
import './SettingsItem.scss'

export enum ItemTheme {
    standart = 'SettingsItemDefault',
    blogger = 'SettingsItemBlogger',
    delete = 'SettingsItemDelete'
}

interface SettingsItemProps {
    name: string;
    icon: string;
    theme: ItemTheme;
    func: Function;
}

const SettingsItem:FC<SettingsItemProps> = ({name,icon,theme,func}) => {
    return (
        <div className={theme} onClick={()=>func()}>
            <div className="ItemContent">
                <img src={icon} alt="Иконка" />
                <span className='title-18 regular'>{name}</span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15326 5.52973C9.44616 5.23684 9.92103 5.23684 10.2139 5.52973L15.1039 10.4197C15.9743 11.2901 15.9743 12.71 15.1039 13.5804L10.2139 18.4704C9.92103 18.7633 9.44616 18.7633 9.15326 18.4704C8.86037 18.1775 8.86037 17.7026 9.15326 17.4097L14.0433 12.5197C14.3279 12.2351 14.3279 11.765 14.0433 11.4804L9.15326 6.59039C8.86037 6.2975 8.86037 5.82262 9.15326 5.52973Z" fill="#102B32"/>
            </svg>
        </div>
    );
};

export default SettingsItem;