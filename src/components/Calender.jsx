import {DatePicker}from 'antd';
import {useState} from 'react';
import moment from 'moment';
// import DatePicker from 'react-datepicker';
import '../styles/Calender.css';
const {RangePicker} = DatePicker;

const btnStyle = {
    color: "white",
    background: "#999",
    margin:"0 0 0 0.5rem",
    padding: ".2rem .75rem",
    border: "1px solid #999",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
  };
 const DateFilterData = [
    {
      id: 1,
      value: "전체",
    },
    {
      id: 2,
      value: "오늘",
    },
    {
      id: 3,
      value: "3일",
    },
    {
      id: 4,
      value: "1주일",
    },
    {
      id: 5,
      value: "1개월",
    },
    {
      id: 6,
      value: "3개월",
    },
  ];

const BetweenDate=()=>{
  return(
    <div></div>
  )
}
// const Calender=()=>{{
//     const [btnClicked, setBtnClicked]=useState("3일");
//     const [startDate, setStartDate]=useState(new Date());
//     const [endDate, setEndDate]=useState(new Date().getTime() + 3*24*60*1000)

//   return(
//     <div>
//         <DatePicker
//           selected={startDate}
//           dateFormat="yyyy-MM-dd"
//           onChange={(date) => setStartDate(date)}
//           placeholderText="클릭해주세요."
//         />
//          <BetweenDate> ~ </BetweenDate>
//          <DatePicker
//           selected={endDate}
//           dateFormat="yyyy-MM-dd"
//           onChange={(date) => setEndDate(date)}
//           placeholderText="클릭해주세요."
//         />
//     </div>
//   )
// }}
// export default Calender
function Button(){
    return <button style={btnStyle}>조회</button>
}

const Calender = () => {
    const [dates, setDates]=useState([])
    console.log(dates)
  return (
    <div style={{margin:"15px", textAlign:'center'}}>
        <RangePicker
        onChange={(values)=>{
            setDates(values.map(item=>{
                return moment(item).format('YYYY-DD-MM')
            }))
        }}
        />
        <Button/>
    </div>
  );
}

export default Calender