import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './pages/main/Main'
import Login from './pages/login/Login';
import Terms from './pages/terms/Terms'
import Test from './pages/test/test'
import Profile from './pages/profile/Profile'

import './styles/blank.scss'
import './styles/fonts.scss'
import './styles/main.scss'
import Challenge from './pages/challenge/Challenge';
import { AuthContext, ProfileData, TokenContext, ImageContext } from './context';
import Policy from './pages/policy/Policy';
import Agree from './pages/agree/Agree';
import { ISetting } from './interfaces/ISettings';

function Router() {
    const [isAuth, setIsAuth] = useState(false);
    const [isToken, setIsToken] = useState('');
    const [data, setData] = useState<ISetting>({
        nick : '',
        date_of_birth : '',
        fio : '',
        city : '',
        vk: '',
        steam: '',
        discord: '',
        category: [],
        category_sub: [],
        token : ''
    });
    const [image, setImage] = useState<File | undefined>(undefined);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <TokenContext.Provider value={{isToken, setIsToken}}>
                <ProfileData.Provider value={{ data, setData }}>
                    <ImageContext.Provider value={{ image, setImage }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Main/>} />
                                <Route path="/test" element={<Test/>} />
                                <Route path="/error" element={<Login/>} />
                                <Route path="/terms" element={<Terms/>} />
                                <Route path="/challenge" element={<Challenge/>} />
                                <Route path="/profile" element={<Profile/>} />
                                <Route path="/terms/Personal_Data_Processing_and_Privacy_Policy.html" element={<Policy/>} />
                                <Route path="/terms/Consent_to_distribution.html" element={<Agree/>} />
                            </Routes>
                        </BrowserRouter>
                    </ImageContext.Provider>
                </ProfileData.Provider>
            </TokenContext.Provider>
        </AuthContext.Provider>
    );
}

export default Router;
