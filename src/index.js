import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import user pages
import SignIn from './pages/user/SignIn'; //로그인 페이지
import SignUp from './pages/user/SignUp'; //회원가입 페이지
import ForgotPw from './pages/user/ForgotPw'; //아이디/비밀번호 찾기 페이지
import CheckInfo from './pages/user/CheckInfo'; //개인정보 확인 페이지
import EditPw from './pages/user/EditPw'; //비밀번호 변경 페이지
import EditInfo from './pages/user/EditInfo'; //개인정보 수정 페이지
import UserInfo from './pages/user/UserInfo'; //내 정보 페이지

//import func pages
import Main from './pages/func/Main'; //메인 페이지
import General from './pages/func/General'; //일반 조회 페이지
import Accident from './pages/func/Accident'; //사고 조회 페이지

//import error pages
import Page400 from './pages/error/Page400'; //400 페이지
import Page404 from './pages/error/Page404'; //404 페이지
import Page419 from './pages/error/Page419'; //419 페이지
import Page500 from './pages/error/Page500'; //500 페이지

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="signin" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="forgotpw" element={<ForgotPw/>}/>
      <Route path="checkinfo" element={<CheckInfo/>}/>
      <Route path="editpw" element={<EditPw/>}/>
      <Route path="editinfo" element={<EditInfo/>}/>
      <Route path="userinfo" element={<UserInfo/>}/>

      <Route path="main" element={<Main/>}/>
      <Route path="general" element={<General/>}/>
      <Route path="accident" element={<Accident/>}/>

      <Route path="page400" element={<Page400/>}/>
      <Route path="page404" element={<Page404/>}/>
      <Route path="page419" element={<Page419/>}/>
      <Route path="page500" element={<Page500/>}/>
    </Routes>
  </BrowserRouter>
);