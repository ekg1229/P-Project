import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Main.css';
import MainDesign from './MainDesign';

//메인 페이지
function Main() {
  return (
  <div className="wrapper">
    <Header/>
   <section className="main_visual">
    <MainDesign/>
    </section>
    <Footer/>
    </div>
  );
}

export default Main;