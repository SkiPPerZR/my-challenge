import './InputFile.scss'
import React, { useState } from 'react';
import add from 'public/img/CreateNewChallenge/Add.svg'



const InputFile: React.FC = () => {
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);

        const file = e.dataTransfer.files[0];
        // Здесь можно выполнить необходимые действия с загруженным файлом
    };

    return (
        <div
            // className={ isDragOver ? 'drag-over' : 'input'}
            className='input'
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <img src={add} alt="img" className='intut__img' />
        </div>
    );
};

export default InputFile;
