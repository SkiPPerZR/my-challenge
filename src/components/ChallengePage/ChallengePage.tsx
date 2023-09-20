import React from 'react';

const ChallengePage = () => {
    return (
        <div className='ChallengePage'>
            <div className='ChallengePageInfo'>
                <span>Информация о челлендже</span>
                <h2>Жим штанги 250кг на 3 раза</h2>
                <div className='ChallengePageInfoStat'>
                    <div className='ChallengePageInfoStatMembers'>
                        <span>2/2</span>
                        <img src="" alt="" />
                        <p>Участников</p>
                    </div>
                    <div className='ChallengePageInfoStatBank'>
                        <img src="" alt="" />
                        <span>800</span>
                        <img src="" alt="" />
                        <p>Банк</p>
                    </div>
                    <div className='ChallengePageInfoStatBet'>
                        <span>400</span>
                        <img src="" alt="" />
                        <p>Размер пари</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengePage;