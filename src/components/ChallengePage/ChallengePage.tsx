import React, { useEffect, useState } from 'react';
import './ChallengePage.scss'

import { useLocation } from 'react-router-dom';
import ChallengeInfo from '../ChallengeInfo/ChallengeInfo';
import { ICardInfo } from '../../interfaces/ICardInfo';
import PostService from '../../api/PostService';
import ChallengeRequirement from '../ChallengeRequirement/ChallengeRequirement';
import NotLogin from '../NotLogin/notLogin';


function ChallengePage() {
    const location = useLocation();

    // const [info, setInfo] = useState<ICardInfo>();

    // async function fetchInfo() {
    //     let token : String = location.state.token
    //     let cardInfo : ICardInfo = await PostService.getChallengeInfo(token);
    //     setInfo(cardInfo);
    // }

    // useEffect(() => {
    //     fetchInfo()
    // }, [])

    // if (!info) return <NotLogin/> // info ===null or undefiend or {}
    return (
        <div className='ChallengePage'>
            {/* <ChallengeInfo info={info}/> */}
            <ChallengeInfo />
            <ChallengeRequirement />
            <div className='ChallengePageChat'>
                <h2 className='title-25 medium'>Чат в разработке...</h2>
            </div>
        </div>
    );
}

export default ChallengePage;