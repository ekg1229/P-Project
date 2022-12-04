import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Calender from './Calender';

//일반 조회 페이지
function General() {
  return (
    <div className="wrapper">
    <Header/>
   <section className="main_visual">
    <Calender/>
    </section>
    <Footer/>
    </div>
  );
}

export default General;