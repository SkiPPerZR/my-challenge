import React, {FC} from 'react';
import './ChallengesList.scss'
import Card from '../../shared/card/Card';
import { ICard } from '../../interfaces/ICard';
import { CardVariant } from '../../shared/card/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';


interface ChallengeListProps {
    cards: ICard[];
}

const ChallengesList:FC<ChallengeListProps> = ({cards}) => {
    return (
        <Swiper mousewheel={true} scrollbar={{hide: false, dragSize: 14,}} slidesPerView={5} spaceBetween={20} pagination={{clickable: true,}} modules={[Pagination, Scrollbar, Mousewheel]} className="ChallengesList">
            {/* {cards.map(card => {
                return <SwiperSlide className="ChallengesListItem"><Card key={card.token} variant={CardVariant.standart} card={card} /></SwiperSlide>
             })} */}
            <SwiperSlide className="ChallengesListItem"><Card variant={CardVariant.standart} cardLook={false}/></SwiperSlide>
            <SwiperSlide className="ChallengesListItem"><Card variant={CardVariant.standart} cardLook={false}/></SwiperSlide>
            <SwiperSlide className="ChallengesListItem"><Card variant={CardVariant.standart} cardLook={false}/></SwiperSlide>
            <SwiperSlide className="ChallengesListItem"><Card variant={CardVariant.standart} cardLook={false}/></SwiperSlide>
            <SwiperSlide className="ChallengesListItem"><Card variant={CardVariant.standart} cardLook={false}/></SwiperSlide>
            <SwiperSlide className="ChallengesListItem"><Card variant={CardVariant.standart} cardLook={false}/></SwiperSlide>
        </Swiper>
    );
};

export default ChallengesList;
