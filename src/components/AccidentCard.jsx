import React from 'react'
import '../styles/AccidentCard.css';
import Button from 'react-bootstrap/Button';
// import { useEffect, useState } from 'react';
// import AccidentCard from './AccidentCard';
// import axios from 'axios';



const AccidentCard=({data})=> {


    return (
    <li>
        <div className="img_set">
        </div>
        <dl>
            <dt>{data.date}</dt>
            <dd>{data.acdContent}</dd>
        </dl>
        <div className="video_btn">
            <VideoBtn href={data.acdUrl} />
        </div>
    </li>
    )
}

const VideoBtn=()=>{
    return(
      <div>
      <Button variant="outline-dark" className="video_btn">영상보기</Button>
    </div>)
  }
export default AccidentCard;