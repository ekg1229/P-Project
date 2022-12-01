import React from 'react';
import Calender from './Calender';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//사고 조회 페이지
function Accident() {
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

export default Accident;