import React, {FC, useEffect} from 'react';
import './ChallengePage.scss'

import ChallengeInfo from '../ChallengeInfo/ChallengeInfo';
import RequirementItem from '../../shared/requirementItem/RequirementItem';

import date from '../../img/ChallengeRequirement/Date.svg'
import timer from '../../img/ChallengeRequirement/Timer.svg'
import likes from '../../img/ChallengeRequirement/Like-dislike.svg'
import warning from '../../img/ChallengeRequirement/Warning.svg'
import spot from '../../img/ChallengeRequirement/Pin.svg'
import { ICardInfo } from '../../interfaces/ICardInfo';
import PostService from '../../api/PostService';


const ChallengePage = () => {

    // const [cardsInfo, setCardsInfo] = useState<ICardInfo[]>([]);

    // useEffect( ()=> {
    //     fetchCards()
    // }, [])

    // async function fetchCards() {
    //     let cardList : ICardInfo[] = await PostService.getChallengeInfo();
    //     setCardsInfo(cardList);
    // }

    return (
        <div className='ChallengePage'>
            <ChallengeInfo/>
            <div className='ChallengePageRequirement'>
                <h4 className='text-14 regular'>2131 просмотров страницы</h4>
                <RequirementItem icon={date} title='Дата проведения' content='14.07-21.07'/>
                <RequirementItem icon={timer} title='Время на выполнение' content='1 день'/>
                <RequirementItem icon={likes} title='Проверка займет' content='10 день'/>
                <RequirementItem icon={warning} title='Конечный результат' content='Видео с выполненным упражнением'/>
                <RequirementItem icon={spot} title='Место' content='Не важно'/>
                <RequirementItem icon={warning} title='Условия челленджа' content='Записать видео, где ты 3 раза делаешь стоя жим штангой 250кг.
В видео ты должен сказать свой ник, чтобы я мог убедиться, что это точно ты!
Так же обязательно показать блины, чтобы я убедился, что вес — верный!'/>
            </div>
            <div className='ChallengePageChat'>
                <h2 className='title-25 medium'>Чат в разработке...</h2>
            </div>
        </div>
    );
};

export default ChallengePage;