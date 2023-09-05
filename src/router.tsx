import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './pages/main/Main'
import Login from './pages/login/Login';

import './styles/blank.scss'
import './styles/fonts.scss'
import './styles/main.scss'



function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login/>}></Route>
        <Route path={'/main'} element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
