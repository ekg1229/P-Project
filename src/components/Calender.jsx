import { useState } from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import '../styles/Calender.css';
import DatePicker from "react-datepicker"
import "../styles/react-datepicker.css"
const btnStyle = {
  color: "white",
  background: "#999",
  margin: "0 0 0 0.5rem",
  padding: ".2rem .75rem",
  border: "1px solid #999",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  height: "37px",
};

const Calender = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


   const [stdate, setStdate] = useState("");
   const [eddate, setEddate] = useState("");

   const st_Date = (start) => {
    console.log(new Date(start).toLocaleDateString())
     setStdate(new Date(start).toLocaleDateString());
   }

   const end_Date = (end) => {
    console.log(new Date(end).toLocaleDateString())
     setEddate(new Date(end).toLocaleDateString());
   }

  const onChange = (dates) => {
    const start = dates[0];
    const end = dates[1];
    setStartDate(start);
    setEndDate(end);
    if(start&&end){
      st_Date(start)
      end_Date(end)
    }
  };
   const EditData = () => {
     console.log("onclick")
     console.log(stdate);
     console.log(eddate);
     props.filterdata(stdate, eddate);
   }
  return (
    <div>
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
    />
    <Button style={btnStyle} onClick={EditData}>조회하기</Button>
    </div>
  )
}

export default Calender;

// const Calender = () => {
//     const [dates, setDates]=useState([])
//     console.log(dates)
//   return (
//     <div style={{margin:"15px", textAlign:'center'}}>
//         <RangePicker
//         onChange={(values)=>{
//             setDates(values.map(item=>{
//                 return moment(item).format('YYYY-DD-MM')
//             }))
//         }}
//         />
//         <Button/>
//     </div>
//   );
// }

// export default Calender