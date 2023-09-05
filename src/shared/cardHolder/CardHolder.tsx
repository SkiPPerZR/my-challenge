import React from 'react';
import './CardHolder.scss'

const CardHolder = () => {
    return (
        <div className='CardHolder'>
            <div>
                <span className='CardHolderIcon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8 8.7499C21.46 8.7499 22 8.2099 22 7.5499C22 5.2599 20.14 3.3999 17.85 3.3999H6.14C3.85 3.3999 2 5.2499 2 7.5399V7.5499C2 8.2099 2.54 8.7499 3.2 8.7499H20.8Z" fill="#102B32"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 16.46V11.45C2 10.79 2.54 10.25 3.2 10.25H20.8C21.46 10.25 22 10.79 22 11.45V16.45C22 18.74 20.14 20.6 17.85 20.6H6.14C3.85 20.6 2 18.75 2 16.46ZM6 17.25H8C8.41 17.25 8.75 16.91 8.75 16.5C8.75 16.09 8.41 15.75 8 15.75H6C5.59 15.75 5.25 16.09 5.25 16.5C5.25 16.91 5.59 17.25 6 17.25ZM10.5 17.25H14.5C14.91 17.25 15.25 16.91 15.25 16.5C15.25 16.09 14.91 15.75 14.5 15.75H10.5C10.09 15.75 9.75 16.09 9.75 16.5C9.75 16.91 10.09 17.25 10.5 17.25Z" fill="#102B32"/>
                    </svg>
                </span>
                <span className='CardHolderNumber title-18 semibold'>···· 1234</span>
            </div>
            <span className='CardHolderDate text-14 regular'>10/30</span>
        </div>
    );
};

export default CardHolder;