import React, { FC, useState } from 'react';
import './ImgInput.scss'

import icon from '../../../img/logo.svg'

// interface ImgInputProps {
    
// }

const ImgInput = () => {
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();
    const fileReader = new FileReader();

    // fileReader.onloadend = () => {
    //     setImageURL(fileReader.result);
    // };
    const handleOnChange = (e: any) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length) {
        const file = e.target.files[0];
        setImage(file);
        fileReader.readAsDataURL(file);
        }
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length) {
        setImage(e.dataTransfer.files[0]);
        fileReader.readAsDataURL(e.dataTransfer.files[0]);
        }
    };

    const handleDragEmpty = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div className="ImgInput">
            <div
                className="ImgInputAvatar"
                onDrop={handleDrop}
                onDragEnter={handleDragEmpty}
                onDragOver={handleDragEmpty}
                // style={{backgroundImage: `url(${imageURL ? imageURL : icon})`}}
            >
                <label
                    htmlFor="file-loader-button"
                    className='file-uploader__custom-button'    
                ></label>
                <input
                    id='file-loader-button'
                    type="file"
                    className='file-uploader__upload-button'
                    onChange={handleOnChange}
                />
            </div>
            <span className='text-14 regular'>Добавить фото</span>
            <div className="file-uploader__file-name">{image ? image : ""}</div>
        </div>
    );
};

export default ImgInput;