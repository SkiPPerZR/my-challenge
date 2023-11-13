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
import { AuthContext} from './context';
import Policy from './pages/policy/Policy';
import Agree from './pages/agree/Agree';

function Router() {
  const [isAuth, setIsAuth] = useState(false);
  return (
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
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
      </AuthContext.Provider>
  );
}

export default Router;
