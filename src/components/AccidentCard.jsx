import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy';
import DetailCard from './DetailCard';
import Calender from './Calender';

const AccidentCard =({time, sensors, imei, video})=> {
  const URL = "http://141.164.35.18:8080/video/";


  function time_cal(time){ //시간 형변환
    let result = time.slice(0,4)+'-'+time.slice(4,6)+'-'+time.slice(6,8)+' '+time.slice(8,10)+':'+time.slice(10,12); 
    return result;
  }

 
  return (
    <div className="card mb-3">
      <div className="img_set">
        <ReactPlayer
          width="w-100"
          height="h-100"
          className='react-player'
          url={URL+video+'.mp4'}
        />
      </div>
      <hr/>
      <div>
        <p className='fw-bold fs-3'>{time_cal(time)}</p>
      </div>

      <DetailCard
        time={time_cal(time)}
        video={URL+video+'.mp4'}
        sensors={sensors}
        
      />
    </div>
  )
}

export default AccidentCard;