import React, {FC} from 'react';
import './SearchInput.scss'

interface SearchInputProps {
    width: number;
}

const SearchInput:FC<SearchInputProps> = ({width}) => {
    return (
        <div className='search-field'>
            <input  style={{width}} className="search-field__input text-17 semibold" type="search" name='search' id='search' placeholder='поиск...' />
            <span className='search-field__aicon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.02 11.01C20.02 15.9861 15.9861 20.02 11.01 20.02C6.03391 20.02 2 15.9861 2 11.01C2 6.03391 6.03391 2 11.01 2C15.9861 2 20.02 6.03391 20.02 11.01Z" fill="#102B32" fill-opacity="0.6"/>
                    <path d="M20.0201 18C20.9601 18 21.6601 18.34 21.9901 18.95C22.3101 19.56 22.2101 20.33 21.6801 21.1C21.0201 22.09 20.3401 22.28 19.9001 22.28C19.8301 22.28 19.7701 22.28 19.7101 22.27C19.3001 22.22 18.5501 21.93 18.1201 20.63C17.9001 19.96 17.9801 19.29 18.3401 18.79C18.7001 18.29 19.3101 18 20.0201 18Z" fill="#102B32" fill-opacity="0.6"/>
                </svg>
            </span>
            <span className='search-field__aicon active__aicon'>
                <svg className="hover" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.02 11.01C20.02 15.9861 15.9861 20.02 11.01 20.02C6.03391 20.02 2 15.9861 2 11.01C2 6.03391 6.03391 2 11.01 2C15.9861 2 20.02 6.03391 20.02 11.01Z" fill="#1E8CAF" fill-opacity="1"/>
                    <path d="M20.0201 18C20.9601 18 21.6601 18.34 21.9901 18.95C22.3101 19.56 22.2101 20.33 21.6801 21.1C21.0201 22.09 20.3401 22.28 19.9001 22.28C19.8301 22.28 19.7701 22.28 19.7101 22.27C19.3001 22.22 18.5501 21.93 18.1201 20.63C17.9001 19.96 17.9801 19.29 18.3401 18.79C18.7001 18.29 19.3101 18 20.0201 18Z" fill="#1E8CAF" fill-opacity="0.6"/>
                </svg>
            </span>
        </div>
    );
};

export default SearchInput;