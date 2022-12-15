import React, {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Calender from '../../components/Calender';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccidentCard from '../../components/AccidentCard';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import axios from 'axios';



//사고 조회 페이지
function Accident() {
  const [imei, setImei] = useState([]);
  const [data, setData] = useState([]);
  const [serial, setSerial] = useState("");

  const getImei = () => {
    axios.get('/api/blockchain/imeiList', {
      headers:{
        withCredentials: true,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      setImei(res.data);
    })
    .catch((err) => {
    })
  };

  const handleImei = (imei) => {
    axios.post('/api/blockchain/findAccident', {
      imei: imei
    },
    {
      headers: {
        withCredentials: true,
      }
    })
    .then((res) => {
      setData(res.data);
      setSerial(res.da)
    })
    .catch((err) => {
    })
  }

  useEffect(() => {
    setAuthorizationToken();
    getImei();
  }, []);
  
  
  //최신 순 정렬
  function time_order(a,b){
    const dateA=new Date(a['time'].slice(0,8)).getTime();
    const dateB=new Date(b['time'].slice(0,8)).getTime();
    return dateA < dateB ? 1 : -1;
  }
  data.sort(time_order);
  return (
    <div className="wrapper">
    <Header/>
      <section className="main_visual">
        <div className="main_page_wrapper">
          <h1 className="top_title" style={{color: "white"}}>사고 조회</h1>
          <div class="container text-center">
          <Calender/>
   
            <Row>
            <div className='col-8'>
              <h2 className="top_title" style={{color: "white"}}> 기록</h2>
              {/* <GeneralCard /> */}
              <Container className='d-flex align-items-center justify-content-center'>
                  {data.length === 0? <p style={{color: "white"}}>데이터 없음</p> :
                    <div id="element-list" className='row'>
                      {data.map((card) =>
                        <div className='col-6'>
                          <AccidentCard
                          data={card}
                          key={card.blockHash}
                          sensors={card.data['sensors']}
                          time={card.time}
                          video={card.data['video']}
                          imei={card.imei}
                          />
                        </div>
                        )}
                    </div> 
                  }
              </Container>
              </div>

              <div className='col-4'>
                <h2 style={{color: "white"}}>S/N 리스트</h2>
                <div id="element-list">
                  <ul id="list" style={{fontSize: "1.3rem", fontWeight: "bold"}}>
                    {imei.map((item) => {return <li key={item.user_id} onClick={() => handleImei(item.imei)}>{item.imei}</li>})}
                  </ul>
                </div>
              </div>
            </Row>
          </div>
          {/* <AccidentCardList/> */}
        </div>
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