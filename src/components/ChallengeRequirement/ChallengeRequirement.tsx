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
    info: ICardInfo;
}

const ChallengeRequirement:FC<ChallengeRequirementProps> = ({info}) => {

    let data_all = info.start_dt + ' — ' + info.end_dt
    let time_co = info.time_condition + ' ' + info.time_condition_type
    let time_re = info.time_result + ' ' + info.time_result_type

    return (
        <div className='ChallengeRequirement'>
            <h4 className='text-14 regular'>2131 просмотров страницы</h4>
            <RequirementItem icon={date} title='Дата проведения' content={data_all}/>
            <RequirementItem icon={timer} title='Время на выполнение' content={time_co}/>
            <RequirementItem icon={likes} title='Проверка займет' content={time_re}/>
            <RequirementItem icon={warning} title='Конечный результат' content={info.final_result}/>
            <RequirementItem icon={spot} title='Место' content={info.is_online === '1' ? 'Онлайн' : info.city}/>
            <RequirementItem icon={warning} title='Условия челленджа' content={info.condition_execution}/>
        </div>
    );
};
export default ChallengeRequirement;