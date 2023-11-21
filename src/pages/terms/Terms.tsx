import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import TermsPolicy from '../../components/TermsPolicy/TermsPolicy';
import { AuthContext } from '../../context';

type Params = {
    value: any;
  };

const Terms: React.FC = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const { value } = useParams<Params>();

    function Auth() {
        const newAuth = sessionStorage.getItem('isAuth')
        if (newAuth === 'true') {
            setIsAuth(true)
        } else if (newAuth === 'false'){
            setIsAuth(false)
        }
    }

    useEffect(()=>{
        Auth()
    }, [isAuth])

    return (
        <div className='Main'>
            <Sidebar backbutton={1}/>
            <div className='Container'>
                <Header login={isAuth}/>
                <TermsPolicy docId={value}/>
            </div>
        </div>
    );
};

export default Terms;