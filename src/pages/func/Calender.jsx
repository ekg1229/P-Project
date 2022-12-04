import {DatePicker}from 'antd';
import {useState} from 'react';
import moment from 'moment';
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