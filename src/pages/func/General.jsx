import React, {useState, useEffect} from 'react';
import { Row } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Calender from '../../components/Calender';
import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import GeneralTable from '../../components/GeneralTable';

//일반 조회 페이지
function General() {
  const [imei, setImei] = useState([]);
  const [data, setData] = useState([]);
  const [searchdata, setSearchdata] = useState([]);


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
      console.log(err);
    })
  };

  const covData = (data) =>{
    let rst = `${data.slice (0,4)}${data.slice (4,6)}${data.slice (6,8)}`;
    return parseInt(rst);
  }
  const covPicker =(el)=>{
    let ele = el
    ele.replace(" ", '')
    let data =  ele.toString().split(". ")
    data[2]= ("0"+data[2]).slice(0,data[2].length)
    if(data[2].length==3){
      data[2]=data[2].slice(1,3)
    }
    for(let x = 0 ; x < data.length ; x ++){
      data[x].replace(" ", '')
      if(data.length<2){
        data[x]=`${"0"+data[x]}`
      }
    }
    let rst = data[0]+data[1]+data[2]
    return parseInt(rst.replace(" ",""))
  }

  const filterdata = (start, end) => {
    if (start && end){
      let intst=covPicker(start);
      let inted=covPicker(end);
      console.log(end)
      console.log(inted)
      console.log(covData(data[0].time) <= inted)
      let rst = [];
      for(let x = 0 ; x < data.length ; x ++){
        if(intst <= covData(data[x].time) && covData(data[x].time) <= inted){
          rst.push(data[x])
        }
      }
      setSearchdata(JSON.parse(JSON.stringify(rst)));
    }
    else{
      setSearchdata(data);
    }
  }

  const handleImei = (imei) => {
    axios.post('/api/blockchain/findBlock', {
      imei: imei
    },
    {
      headers: {
        withCredentials: true,
      }
    })
    .then((res) => {
      setData(res.data);
      filterdata()
      console.log(searchdata)
    })
    .catch((err) => {
    })
  }

  useEffect(() => {
    setAuthorizationToken();
    getImei();
  }, []);

  function time_cal(time){ //시간 형변환
    let result = time.slice(0,4)+'-'+time.slice(4,6)+'-'+time.slice(6,8)+' '+time.slice(8,10)+':'+time.slice(10,12); 
    return result;
  }
  
  return (
    <div className="wrapper">
      <Header/>
      <section className="main_visual">
        <div className="main_page_wrapper">
          <h1 className="text-white top_title">일반 조회</h1>
          <div class="container text-center">
          <Calender filterdata={filterdata}/>
            <Row>
              <div className='col-8'>
              <h2 className="top_title" style={{color: "white"}}> 기록</h2>
              {/* <GeneralTable /> */}
              {searchdata.length === 0? <p className='d-flex align-items-center justify-content-center' style={{color: "white"}}>데이터 없음</p> :
                <div id="element-list">
                  <ul id='list' className='fw-bold'>
                    {searchdata.map((item)=>{return item.state == 0? 
                      <li key={item.imei}>
                          {time_cal(item.time)}
                          <GeneralTable time={time_cal(item.time)} sensors={item.data['sensors']}/>
                      </li>
                      :
                      <li class="text-danger" key={item.imei}>{time_cal(item.time)} <GeneralTable time={time_cal(item.time)} sensors={item.data['sensors']}/></li>
                    })}
                  </ul>
                </div> 
              }
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
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default General;