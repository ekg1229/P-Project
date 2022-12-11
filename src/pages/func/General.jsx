import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Calender from './Calender';
import GeneralCard from '../../components/GeneralCard';

//일반 조회 페이지
function General() {
  return (
    <div className="wrapper">
    <Header/>
   <section className="main_visual">
    <h2 className="top_title">일반 조회</h2>
    <Calender/>
    <GeneralCard/>
    </section>
    <Footer/>
    </div>
  );
}

export default General;