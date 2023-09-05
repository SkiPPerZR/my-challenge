import React, {FC} from 'react';
import './HeaderSelector.scss'


interface HeaderSelectorProps {
    children: any;
}

const HeaderSelector:FC<HeaderSelectorProps> = 
    ({children}) => {
    return (
        <button className='selector text-18 medium'>
            {children}
        </button>
    );
};

export default HeaderSelector;