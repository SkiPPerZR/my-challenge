import React, { useState } from 'react';
import './TermsPolicy.scss'


const TermsPolicy = () => {
    const [terms, setTerms] = useState(0);

    const urlDocx = [
        './docx/Personal_Data_Processing_and_Privacy_Policy.html',
        './docx/Consent_to_distribution.html',
        './docx/User_Agreement.html',
    ]

    return (
        <div className='TermsPolicy'>
            <div className='TermsPolicyButtons'>
                <button onClick={(e) => setTerms(0)} className='text-11 bold'>Политика обработки персональных<br/> данных и конфиденциальности</button>
                <button onClick={(e) => setTerms(1)} className='text-11 bold'>Согласие на распорстранение<br/> персональных данных</button>
                <button onClick={(e) => setTerms(2)} className='text-11 bold'>Пользовательское соглашение</button>
            </div>
            <div className='TermsPolicyText'>
                <iframe width="100%" height="100%" src={urlDocx[terms]}>
                </iframe>
            </div>
        </div>
    );
};

export default TermsPolicy;