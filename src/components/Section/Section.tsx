import React, {FC, useState} from 'react';
import './Section.scss'

interface MarkersProps {
    marker_name: string;
}

interface SectionProps {
    icon: any;
    name: string;
    count: number;
    filters: MarkersProps[];
}

const Section:FC<SectionProps> = ({icon,name,count,filters}) => {
    const [markers, setMarkers] = useState([]);

    return (
        <div className='Section'>
            <div className='SectionTitle'>
                <img src={icon} alt="Icon" />
                <span>{name}</span>
                <div className='SectionTitleCount'>
                    <span><span>{count}</span> челленджей</span>
                </div>
            </div>
            <div className='SectionFilters'>
                <button className='SectionFiltersButton'></button>
            </div>
        </div>
    );
};

export default Section;