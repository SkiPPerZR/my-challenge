import React, { FC, useEffect, useState } from 'react';
import './Favorites.scss'

import close from '../../img/close.svg'
import { ICard } from '../../interfaces/ICard';
import Card, { CardVariant } from '../../shared/card/Card';
import PostService from '../../api/PostService';


interface FavoritesProps {
    toggle: () => void;
    isOpen: boolean;
}

const Favorites:FC<FavoritesProps> = ({toggle, isOpen}) => {
    const [cards, setCards] = useState<ICard[]>([]);

    // useEffect( ()=> {
    //     fetchCards()
    // }, [])

    // async function fetchCards() {
    //     let cardList : ICard[] = await PostService.getChallengeList('recommend');
    //     setCards(cardList);
    // }

    return (
        <>
            {isOpen&&(
                <div className="Favorites-overlay" onClick={toggle}>
                    <div className="Favorites" onClick={(e) => e.stopPropagation()}>
                        <div className='FavoritesTitle'>
                            <h1 className='text-36 medium'>Избранное</h1>
                            <button onClick={toggle}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                        <div className="FavoritesContainer">
                            {/* {cards.map(card => {
                                return <Card key={card.token} variant={CardVariant.standart} card={card} cardLook={true}/>
                            })} */}
                            <Card variant={CardVariant.standart} cardLook/>
                            <Card variant={CardVariant.standart} cardLook/>
                            <Card variant={CardVariant.standart} cardLook/>
                            <Card variant={CardVariant.standart} cardLook/>
                            <Card variant={CardVariant.standart} cardLook/>
                            <Card variant={CardVariant.standart} cardLook/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Favorites;