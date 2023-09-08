import React from 'react';
import Card, { CardVariant} from '../../shared/card/Card';
import CardProps from '../../shared/card/Card'

interface ChallengeListProps<T> {
    children: (item: T) => React.ReactNode;
    items: Array<T>;
}

export function ChallengeList<T>({items, children} : ChallengeListProps<T>){
    return (
        <div className='ChallengeList'>
            {items.map((item) => 
                <Card variant={CardVariant.standart} cards={CardProps.item}/>
            )}
        </div>
    );
};

export default ChallengeList;