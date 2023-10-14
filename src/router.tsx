import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './pages/main/Main'
import Login from './pages/login/Login';
import Terms from './pages/terms/Terms'
import Test from './pages/test/test'

import './styles/blank.scss'
import './styles/fonts.scss'
import './styles/main.scss'
import Challenge from './pages/challenge/Challenge';



function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/main'} element={<Main/>}></Route>
        <Route path={'/'} element={<Test/>}></Route>
        <Route path={'/error'} element={<Login/>}></Route>
        <Route path={'/terms'} element={<Terms/>}></Route>
        <Route path={'/challenge'} element={<Challenge/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
