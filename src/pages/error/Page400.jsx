import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/error/Page400.css";

function Page400() {
  const navigate = useNavigate();
  
  const timeout = () => {
    setTimeout(()=>{
      navigate('/main');
    }, 10000);
  };

  useEffect(()=>{
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
      <div class="error-header"></div>
      <div class="container">
          <section class="error-container text-center">
              <h1>400</h1>
              <div class="error-divider">
                  <h2>토큰 에러</h2>
                  <p class="description">10초 후에 메인 페이지로 이동됩니다.</p>
              </div>
              <a href="/main" class="return-btn"><i class="fa fa-home"></i>Home</a>
          </section>
      </div>
    </>
  );
}

export default Page400;