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
    Nick : '',
    Date : '',
    Fio : '',
    City : '',
    Vk: '',
    Steam: '',
    Discord: '',
    Category: [],
    Category_sub: [],
    Token : ''
  });
  const [image, setImage] = useState<File | undefined>(undefined);

  return (
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <TokenContext.Provider value={{isToken, setIsToken}}>
          <ProfileData.Provider value={{ data, setData }}>
            <ImageContext.Provider value={{ image, setImage }}>
              <BrowserRouter>
                <Routes>
                  <Route path={'/'} element={<Main/>}></Route>
                  <Route path={'/test'} element={<Test/>}></Route>
                  <Route path={'/error'} element={<Login/>}></Route>
                  <Route path={'/terms'} element={<Terms/>}></Route>
                  <Route path={'/challenge'} element={<Challenge/>}></Route>
                  <Route path={'/profile'} element={<Profile/>}></Route>
                  <Route path={'/terms/Personal_Data_Processing_and_Privacy_Policy.html'} element={<Policy/>}></Route>
                  <Route path={'/terms/Consent_to_distribution.html'} element={<Agree/>}></Route>
                </Routes>
              </BrowserRouter>
            </ImageContext.Provider>
          </ProfileData.Provider>
        </TokenContext.Provider>
      </AuthContext.Provider>
  );
}

export default Router;
