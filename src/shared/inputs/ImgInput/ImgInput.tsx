import React, { FC, useContext, useEffect, useState } from 'react';
import './ImgInput.scss'

import icon from '../../../img/logo.svg'
import { ImageContext, TokenContext } from '../../../context';
import { resolve } from 'path';
import axios from 'axios';
import PostService from '../../../api/PostService';

const ImgInput = () => {
    const {isToken, setIsToken} = useContext(TokenContext);
    const {image, setImage} = useContext(ImageContext);

    const [avatar, setAvatar] = useState(null);

    // const handleImageUpload = (event: any) => {
    //     const file = event.target.files[0];
    //     setAvatar(file);
    // }

    const handleSubmit = async (event : any) =>{       
        event.preventDefault() 
        const file = event.target.files[0];
        setAvatar(file);
        if (avatar) {
            await PostService.setImage(avatar, isToken)
        }
    }

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
                        className='file-uploader__custom-button'
                        onChange={handleSubmit}></label>
                    <input
                        id='file-loader-button'
                        type="file"
                        className='file-uploader__upload-button'
                        // value={icon}
                        />
            </div>
            <span className='text-14 regular' >Добавить фото</span>
            <div className="file-uploader__file-name"></div>
        </div>
    );
};

export default ImgInput;