import React from 'react';
import Calender from './Calender';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardList from '../../components/AccidentCardList';
import AccidentCardList from '../../components/AccidentCardList';

//사고 조회 페이지
function Accident() {
  return (
    <div className="wrapper">
    <Header/>
   <section className="main_visual">
    <h2 className="top_title">사고 조회</h2>
    <Calender/>
    <AccidentCardList/>
    </section>
    <Footer/>
    </div>
  );
}


// const SearchBar = () => {
//   return (
//     <div class="input-group">
//   <div class="form-outline">
//     <input type="search" id="form1" class="form-control" />
//     <label class="form-label" for="form1">Search</label>
//   </div>
//   <button type="button" class="btn btn-primary">
//     <i class="fas fa-search"></i>
//   </button>
// </div>
//   )
// }

export default Accident;