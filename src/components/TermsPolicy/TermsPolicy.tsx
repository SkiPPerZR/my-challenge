import React, { FC, useState } from 'react';
import './TermsPolicy.scss'

interface TermsPolicyProps {
    docId: number | undefined ;
}

const TermsPolicy:FC<TermsPolicyProps> = ({docId}) => {
    const [terms, setTerms] = useState<number>(0);

    const urlDocx = [
        './terms/Personal_Data_Processing_and_Privacy_Policy.html',
        './terms/User_Agreement.html',
        './terms/Consent_to_distribution.html',
    ]

    // function urlTerms(docId: number | undefined) {
    //     console.log("Функция работает: " + docId)
    //     if (docId === 0) {
    //         console.log("Значение docId: " + docId + "сработало")
    //         setTerms(0)
    //     } else if (docId === 1) {
    //         console.log("Значение docId: " + docId + "сработало")
    //         setTerms(1)
    //     } else if (docId === 2) {
    //         console.log("Значение docId: " + docId + "сработало")
    //         setTerms(2)
    //     } else {
    //         console.log("Значение docId: " + docId + "не сработало")
    //         setTerms(0)
    //     }
    // }

    return (
        <div className='TermsPolicy'>
            <div className='TermsPolicyButtons'>
                <button  onMouseDown={() => setTerms(0)} className='text-11 bold'>Политика обработки персональных<br/> данных и конфиденциальности</button>
                <button  onMouseDown={() => setTerms(1)} className='text-11 bold'>Согласие на распорстранение<br/> персональных данных</button>
                <button  onMouseDown={() => setTerms(2)} className='text-11 bold'>Пользовательское соглашение</button>
            </div>
            <div className='TermsPolicyText'>
                <iframe width="100%" height="100%" src={urlDocx[terms]} />
            </div>
        </div>
    );
};

export default TermsPolicy;