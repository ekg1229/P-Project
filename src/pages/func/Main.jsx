import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Main.css';

//메인 페이지
function Main() {
  return (
  <div className="wrapper">
    <Header/>
   <section className="main_visual">
    Main.jsx 실행 화면
    </section>
    <Footer/>
    </div>
  );
}

export default Main;