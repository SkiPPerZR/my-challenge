import React from 'react';
import './Video.scss'

import img from '../../img/soccer.jpg'

function Video() {
    return (
        <div className='Video'>
            {/* <iframe 
                width="100%"
                height="575"
                src={img}
                title="YouTube video player"
                frameBorder={0}
                allow=" autoplay; clipboard-write; encrypted-media; web-share"
                allowFullScreen
            ></iframe> */}
            <img src={img} alt="Шварц" width="100%"/>
        </div>
    );
}

export default Video;