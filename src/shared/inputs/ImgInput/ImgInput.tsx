import React, { FC, useContext, useEffect, useState } from 'react';
import './ImgInput.scss'

import { resolve } from 'path';
import axios from 'axios';
import icon from 'public/img/logo.svg'
import { ImageContext, TokenContext } from '../../../context';
import PostService from '../../../api/PostService';

function ImgInput() {
    const { isToken, setIsToken } = useContext(TokenContext);
    const { image, setImage } = useContext(ImageContext);

    const [avatar, setAvatar] = useState(null);

    // const handleImageUpload = (event: any) => {
    //     const file = event.target.files[0];
    //     setAvatar(file);
    // }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        console.log('отработал222')
        if (avatar) {
            await PostService.setImage(avatar, isToken)
        }

    }
    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        setAvatar(file);
        console.log('отработал')
    }

    // function OnSubmit(event: any) {
    //     console.log('отработал')
    //     handleSubmit(event)
    //     handleImage(event)
    // }

    // useEffect(()=>{
    //     sendAvatar(avatar)
    // },[avatar])

    return (
        <div className="ImgInput">
            <div
                className="ImgInputAvatar"
            // style={{backgroundImage: `url(${imageURL ? imageURL : icon})`}}
            >
                {/* <label
                    htmlFor="file-loader-button"
                    className='file-uploader__custom-button'
                    onChange={handleSubmit}    
                ></label>
                <input
                    id='file-loader-button'
                    type="file"
                    className='file-uploader__upload-button'
                    // value={icon}
                    onChange={handleImageUpload}
                /> */}
                <label
                    htmlFor="file-loader-button"
                    className='file-uploader__custom-button' />
                <input
                    id='file-loader-button'
                    type="file"
                    className='file-uploader__upload-button'
                    onChange={handleImageUpload}
                // value={icon}
                />
            </div>
            <span className='text-14 regular' onClick={handleSubmit}>Добавить фото</span>
            <div className="file-uploader__file-name" />
        </div>
    );
}

export default ImgInput;