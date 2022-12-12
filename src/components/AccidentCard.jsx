import React from 'react'
import '../styles/AccidentCard.css';
import Button from 'react-bootstrap/Button';
import gachon from '../images/gachon.png';
import ReactPlayer from 'react-player/lazy';
import DetailCard from './DetailCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import AccidentCard from './AccidentCard';
// import axios from 'axios';

const AccidentCard =({data})=> {
const [videoData, setVideoData]= useState();

    const videoUrl = "http://localhost:8080/video";
    // axios.post(videoUrl, event.target.files[0], {
    //     headers: { "Content-Type":  `multipart/form-data`}
    //     }
    // ).then((res) => {
    //           console.log(res);
    //         },[])
   const url='videos/video2.mp4'

    return (
    <li className="card">   
        <div className="img_set">
        <ReactPlayer
           width="100%"
           height="100%"
           className='react-player'
           url={videoUrl}
        // url='video/video2.mp4'
           />

        </div>
        <dl>
            <dt >{data.date}</dt>
            <dd>{data.acdContent}</dd>
        </dl>
        <DetailCard
        date={data.date}
        url={url}
        acdContent={data.acdContent}
        />
    </li>
    )
}

export default AccidentCard;

