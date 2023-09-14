import React, { useState } from 'react';
import './TermsPolicy.scss'
import {Document, Page} from 'react-pdf'


const TermsPolicy = () => {

    return (
        <div className='TermsPolicy'>
            <div className='TermsPolicyButtons'>
                <button className='text-11 bold'>Политика обработки персональных<br/> данных и конфиденциальности</button>
                <button className='text-11 bold'>Согласие на распорстранение<br/> персональных данных</button>
            </div>
            <div className='TermsPolicyText'>
                <Document file='../../img/Consent_to_distribution.pdf'>
                    <Page pageNumber={1}/>
                </Document>
            </div>
        </div>
    );
};

export default TermsPolicy;