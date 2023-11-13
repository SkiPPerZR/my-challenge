import React, {FC} from 'react'
import './ChallengeRequirement.scss'

import RequirementItem from '../../shared/requirementItem/RequirementItem';

import date from '../../img/ChallengeRequirement/Date.svg'
import timer from '../../img/ChallengeRequirement/Timer.svg'
import likes from '../../img/ChallengeRequirement/Like-dislike.svg'
import warning from '../../img/ChallengeRequirement/Warning.svg'
import spot from '../../img/ChallengeRequirement/Pin.svg'
import { ICardInfo } from '../../interfaces/ICardInfo';

interface ChallengeRequirementProps {
    info?: ICardInfo;
}

const ChallengeRequirement:FC<ChallengeRequirementProps> = ({info}) => {

    // let data_all = info.start_dt + ' — ' + info.end_dt
    // let time_co = info.time_condition + ' ' + info.time_condition_type
    // let time_re = info.time_result + ' ' + info.time_result_type

    return (
        <div className='ChallengeRequirement'>
            <h4 className='text-14 regular'>2131 просмотров страницы</h4>
            <RequirementItem icon={date} title='Дата проведения' content='2022.03.02 - 2022.03.12'/>
            <RequirementItem icon={timer} title='Время на выполнение' content='2 дня'/>
            <RequirementItem icon={likes} title='Проверка займет' content='3 часа'/>
            <RequirementItem icon={warning} title='Конечный результат' content='Забить 10 голов'/>
            <RequirementItem icon={spot} title='Место' content='Онлайн'/>
            <RequirementItem icon={warning} title='Условия челленджа' content='Забить в течение 5 минут 10 голов используя только правую ногу.'/>
        </div>
    );
};
export default ChallengeRequirement;