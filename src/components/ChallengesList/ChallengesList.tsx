import React, {FC} from 'react';
import './ChallengesList.scss'
import Card from '../../shared/card/Card';
import { ICard } from '../../interfaces/ICard';
import { CardVariant } from '../../shared/card/Card';

interface ChallengeListProps {
    cards: ICard[];
}

const ChallengesList:FC<ChallengeListProps> = ({cards}) => {
    return (
        <div className='ChallengesList'>
            {cards.map(card => {
                return <Card key={card.token} variant={CardVariant.standart} card={card}/>
            })}
        </div>
    );
};

export default ChallengesList;
