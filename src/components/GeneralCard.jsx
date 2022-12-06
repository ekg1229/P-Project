import React from 'react'
import '../styles/GeneralCard.css';
import Button from 'react-bootstrap/Button';

const accidentInfo=[
  {
      "id":"1",
      "date":"2022.04.01",
      "acdContent":"후방에 충격",
      "acdUrl":"http://localhost:3000/main"
  },
  {
      "id":"2",
      "date":"2022.04.03",
      "acdContent":"옆에 충격",
      "acdUrl":"http://localhost:3000/signin"
  },
  {
      "id":"3",
      "date":"2022.04.07",
      "acdContent":"열손상",
      "acdUrl":"http://localhost:3000/signup"
  },
  {
      "id":"4",
      "date":"2022.04.01",
      "acdContent":"후방에 충격",
      "acdUrl":"http://localhost:3000/main"
  },
  {
      "id":"5",
      "date":"2022.04.03",
      "acdContent":"옆에 충격",
      "acdUrl":"http://localhost:3000/signin"
  },
  {
      "id":"6",
      "date":"2022.04.07",
      "acdContent":"열손상",
      "acdUrl":"http://localhost:3000/signup"
  }
]
const GeneralCard = () => {
  return (
    <div className="card_area">
    <ul className="card_wrapper">
        {accidentInfo.map((card) => {
            return (
                <li key={card.id}>
                    <div className="img_set">
                    </div>
                    <dl>
                        <dt>{card.date}</dt>
                        <dd>{card.acdContent}</dd>
                    </dl>
                    <div className="video_btn">
                        <VideoBtn href={card.acdUrl} />
                    </div>
                </li>
            )
        })}

    </ul>
</div>
  )
}

export default GeneralCard

const VideoBtn=()=>{
    return(
      <div>
      <Button variant="outline-dark" className="video_btn">영상보기</Button>
    </div>)
  }
  