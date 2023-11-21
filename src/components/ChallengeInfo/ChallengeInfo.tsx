import React,{FC} from 'react';
import './ChallengeInfo.scss'
import TimeAndBet from '../../shared/timeAndBet/TimeAndBet';
import ButtonAccept from '../../shared/buttons/ButtonAccept';
import Video from '../../shared/video/Video';

import people from '../../img/People-Or.svg'
import bank from '../../img/Bank.svg'
import gold from '../../img/Gold-2.svg'

import { ICardInfo } from '../../interfaces/ICardInfo';

interface ChallengeInfoProps {
    info?: ICardInfo;
}

const ChallengeInfo:FC<ChallengeInfoProps> = ({info}) => (
    <div className='ChallengeInfo'>
        <div className='ChallengeInfoCard'>
            <span className='text-14 regular'>Информация о челлендже</span>
            <h2 className='title-25 semibold'>Забить мяч 10 раз</h2>
            <div className='ChallengeInfoCardStat'>
                <div className='ChallengeInfoCardStatMembers'>
                    <div>
                        <span className='title-18 semibold'>10/12</span>
                        <img src={people} alt="Люди" />
                    </div>
                    <p className='text-14 regular'>Участников</p>
                </div>
                <div className='ChallengeInfoCardStatBank'>
                    <div>
                        <img src={bank} alt="Банк" />
                        <span className='title-18 semibold'>10000</span>
                        <img src={gold} alt="Золото" />
                    </div>
                    <p className='text-14 regular'>Банк</p>
                </div>
                <div className='ChallengeInfoCardStatBet'>
                    <div>
                        <span className='title-18 semibold'>740</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM8 3.09923V2H10V3.05782C11.2759 3.22835 12.3731 3.76381 13.2245 4.5L11.5102 6.18C11.0204 5.76 10.2857 5.28 9.12245 5.28C7.59184 5.28 6.30612 6.18 5.7551 7.44C5.72072 7.47369 5.70565 7.52631 5.6882 7.58722C5.67457 7.63477 5.6595 7.68739 5.63265 7.74C5.5102 8.1 5.44898 8.52 5.44898 8.94C5.44898 9.36 5.5102 9.78 5.63265 10.14C6.12245 11.64 7.53061 12.66 9.12245 12.66C10.0408 12.66 10.7755 12.42 11.2653 12.06C12.0612 11.52 12.4286 10.68 12.4898 10.14H9.12245V8H14.8776C14.8853 8.04572 14.8931 8.09015 14.9008 8.13387C14.9533 8.43435 15 8.70096 15 9.12C15 10.98 14.3265 12.54 13.1633 13.56C12.362 14.2961 11.2741 14.7914 10 14.9474V16H8V14.9008C6.09505 14.5594 4.49588 13.3623 3.67347 11.7C3.2449 10.86 3 9.96 3 9C3 8.04 3.2449 7.14 3.67347 6.3C4.49588 4.6377 6.09505 3.44059 8 3.09923Z" fill="#F99D12"/>
                        </svg>
                    </div>
                    <p className='text-14 regular'>Размер пари</p>
                </div>
            </div>
        </div>
        <TimeAndBet/>
        <ButtonAccept/>
        <Video/>
    </div>
);

export default ChallengeInfo;