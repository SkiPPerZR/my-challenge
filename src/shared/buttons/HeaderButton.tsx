import React, {FC} from 'react';
import './HeaderButton.scss'

interface HeaderButtonProps {
    children: any;
}

const HeaderButton:FC<HeaderButtonProps> = ({children}) => {
    return (
        <button className='btn text-17 semibold'>
            <div className='btn-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M13.9125 8.72002H10.8225V1.52002C10.8225 -0.15998 9.91245 -0.499981 8.80245 0.760019L8.00245 1.67002L1.23245 9.37002C0.302453 10.42 0.692453 11.28 2.09245 11.28H5.18245V18.48C5.18245 20.16 6.09245 20.5 7.20245 19.24L8.00245 18.33L14.7725 10.63C15.7025 9.58002 15.3125 8.72002 13.9125 8.72002Z" fill="white"/>
                </svg>
            </div>
            {children}
        </button>
    );
};

export default HeaderButton;