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
import { AuthContext, ProfileData, TokenContext } from './context';
import Policy from './pages/policy/Policy';
import Agree from './pages/agree/Agree';

function Router() {
  const [isAuth, setIsAuth] = useState(false);
  const [isToken, setIsToken] = useState('');
  const [data, setData] = useState({ nick: '', date_of_birth: '', name: '', surname: '', vk: '', steam: '', discord: '', category: [], category_sub: [], token: ''});

//   {
//     "nick": "Иван",
//     "date_of_birth": "1987-12-15",    
//     "city": "Москва",
//     "tg": "myTg",
//     "vk": "vkPage",
//     "steam": "-",  
//     "discord": "",
//     "category": [
//         "3"
//     ],
//     "category_sub": [
//         "7",
//         "13",
//         "10",
//         "12"
//     ],
//     "token": "9ae1e07223f2fd4c814c75028cb5cbf1dc57d367b0f35526cd0d369cac26a6f8255b3c8d007341008ead407def020b3498b7370ede2dfb995a3666e86e41f947"
// }
  return (
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <TokenContext.Provider value={{isToken, setIsToken}}>
          <ProfileData.Provider value={{ data, setData }}>
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
          </ProfileData.Provider>
        </TokenContext.Provider>
      </AuthContext.Provider>
  );
}

export default Router;
