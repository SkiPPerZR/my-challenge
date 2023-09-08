import React, {FC, useState} from 'react';
import './Section.scss'
import Card, {CardVariant} from '../../shared/card/Card';

interface MarkersProps {
    marker_name: string;
}

interface SectionProps {
    icon: any;
    name: string;
    count: number;
    // filters: MarkersProps[];
}

const Section:FC<SectionProps> = ({icon,name,count}) => {
    const [markers, setMarkers] = useState([]);

    return (
        <div className='Section'>
            <div className='SectionHeader'>
                <div className='SectionHeaderTitle'>
                    <img src={icon} alt="Icon" />
                    <span className='text-18 semibold'>{name}</span>
                    <div className='SectionHeaderTitleCount'>
                        <span className='text-14 regular'>{count} челленджей</span>
                    </div>
                </div>
                <div className='SectionHeaderFilters'>
                    <button className='SectionHeaderFiltersButton text-14 regular'>Все</button>
                    <button className='SectionHeaderFiltersButton text-14 regular'>Dota 2</button>
                    <button className='SectionHeaderFiltersButton text-14 regular'>Counter-Strike</button>
                    <button className='SectionHeaderFiltersButton text-14 regular'>League of legends</button>
                    <button className='SectionHeaderFiltersButton text-14 regular'>Valorant</button>
                    <button className='SectionHeaderFiltersButton text-14 regular'>Minecraft</button>
                </div>
                <div className='SectionHeaderContent'>
                    <span className='text-18 regular'>Посмотреть всe</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.90625 19.9201L15.4263 13.4001C16.1963 12.6301 16.1963 11.3701 15.4263 10.6001L8.90625 4.08008" stroke="#102B32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className='SectionChallenges'>
                <Card variant={CardVariant.blogger}/>
                <Card variant={CardVariant.premium}/>
                <Card variant={CardVariant.based}/>
                <Card variant={CardVariant.standart}/>
            </div>
        </div>
    );
};

export default Section;