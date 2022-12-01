import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import user pages
import SignIn from './pages/user/SignIn'; //로그인 페이지
import SignUp from './pages/user/SignUp'; //회원가입 페이지
import ForgotPw from './pages/user/ForgotPw'; //아이디/비밀번호 찾기 페이지
import EditInfo from './pages/user/EditInfo'; //개인정보 수정 페이지
import CheckInfo from './pages/user/CheckInfo'; //개인정보 확인 페이지

//import func pages
import Main from './pages/func/Main'; //메인 페이지
import General from './pages/func/General'; //일반 조회 페이지
import Accident from './pages/func/Accident'; //사고 조회 페이지

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="signin" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="forgotpw" element={<ForgotPw/>}/>
      <Route path="editinfo" element={<EditInfo/>}/>
      <Route path="checkinfo" element={<CheckInfo/>}/>

      <Route path="main" element={<Main/>}/>
      <Route path="general" element={<General/>}/>
      <Route path="accident" element={<Accident/>}/>
    </Routes>
  </BrowserRouter>
);