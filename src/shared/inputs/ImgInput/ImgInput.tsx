import React, { FC, useContext, useState } from 'react';
import './ImgInput.scss'

import icon from '../../../img/logo.svg'
import { ImageContext, TokenContext } from '../../../context';
import { resolve } from 'path';

const ImgInput = () => {
    const {isToken, setIsToken} = useContext(TokenContext);
    const {image, setImage} = useContext(ImageContext);

    // const [file, setFile] = useState<File | undefined>(undefined)

    // const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     event.preventDefault();
    //     if (event.target.files && event.target.files.length > 0) {
    //         const file = event.target.files[0];
    //         setImage(file);
    //         }
    // };

    class CustomCanvas {
        private _img: HTMLCanvasElement;
        constructor() {
            let img = document.getElementById('file-loader-button') as HTMLCanvasElement;
            this._img = img;
            let cxt = document.createElement('canvas');
            cxt.width = img.clientWidth;
            cxt.height = img.clientHeight;
            let context = cxt.getContext('2d');
            //@ts-ignore
            context.drawImage(img, 0, 0);
        }
        public async getImage(): Promise<Blob> {
            //@ts-ignore
            return new Promise<Blob>(resolve => this._img.toBlob(resolve, 'image/png'))
        }
    }

    class UploadFileRequest {
        private get _domain(): string {
            return 'https://form.upon.ru/api/';
        }
        private get _fileUpload(): string {
            return 'user_update_profile_avatar.php';
        }
        private _img: CustomCanvas;
        constructor() {
            this._img = new CustomCanvas();
        }
        public async upload(): Promise<Response> {
            let options: RequestInit = {
                method: 'POST',
                body: await this.createBody()
            }

            let response = await fetch(`${this._domain}/${this._fileUpload}`, options)
            // if (response.status == 200) {
            //     let responseBody = await response.json()
            //     // this._id = responseBody.id;
            // }
            // console.log('Response:');
            // console.log(response);
            return response;
        }
        private async createBody() {
            const formData = new FormData();
            let image = await this._img.getImage();
            formData.append('avatar', image, 'avatar.png');
            formData.append('token', isToken);
            return formData;
        }
    }

    let uploadFileRequest = new UploadFileRequest();
    async function upload() {
        await uploadFileRequest.upload();
    }

    return (
        <div className="ImgInput">
            <div
                className="ImgInputAvatar"
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
                    value={icon}
                />
            </div>
            <span className='text-14 regular' onClick={upload}>Добавить фото</span>
            <div className="file-uploader__file-name"></div>
        </div>
    );
};

export default ImgInput;