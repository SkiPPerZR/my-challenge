import React from 'react';
import './Video.scss'

const Video = () => {
    return (
        <div className='Video'>
            <iframe 
                width="100%"
                height="575"
                src="https://www.youtube.com/embed/NcHyE_N1QDI?si=yPRJ3VbiZMdWBiYg"
                title="YouTube video player"
                frameBorder={0}
                allow=" autoplay; clipboard-write; encrypted-media; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;