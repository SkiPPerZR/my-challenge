import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import TermsPolicy from '../../components/TermsPolicy/TermsPolicy';
import { AuthContext } from '../../context';
import { useParams } from 'react-router-dom';

type Params = {
    value: any;
  };

const Terms: React.FC = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const { value } = useParams<Params>();
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