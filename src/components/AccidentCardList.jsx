import React from 'react';
import '../styles/AccidentCard.css';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';
import AccidentCard from './AccidentCard';
import axios from 'axios';


const AccidentCardList = (card) => {

    const [cardData, setCardData]=useState([]);
    const dataurl='../sampleData.json';

    useEffect(()=>{
        axios.get(dataurl)
        .then(res=>setCardData(res.data))
    },[])
 
  return (
    <div className="card_area">
            <ul className="card_wrapper">
                {cardData.map((card) =><AccidentCard data={card}
                key={card.id}/>
                )}

            </ul>
        </div>
  )
}

export default AccidentCardList;



// const AccidentCard = ({data}) => {
 
//   return (
//     <li>
//     <div className="img_set">
//     </div>
//     <dl>
//       <dt>{data.date}</dt>
//       <dd>{data.acdContent}</dd>
//     </dl>
//     <div className="video_btn">
//       <VideoBtn href={data.acdUrl}/>
//     </div>
//   </li>
//   )
// }

// export default AccidentCard



// function CardList(props) {
//   return (
//     <div className="card_area">
//       <ul className="card_wrapper">
        
//       <li>
//         <div className="img_set"></div>
//         <dl>
//           <dt>title</dt>
//           <dd>content</dd>
//         </dl>
//         <div className="video_btn">
//           <VideoBtn/>
//         </div>
//       </li>
//       <li>
//         <div className="img_set"></div>
//       </li>
//       </ul>
//     </div>
//   );
// }
  