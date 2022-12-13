import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/error/Page404.css";

function Page404() {
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
              <h1>페이지를 찾을 수 없습니다.</h1>
              <div class="error-divider">
                  <h2>10초 후에 메인 페이지로 이동됩니다.</h2>
                  {/* <p class="description">10초 후에 메인 페이지로 이동됩니다.</p> */}
              </div>
              <a href="/main" class="return-btn" style={{fontSize: "2rem"}}><i class="fa fa-home fa-2x"></i>Home</a>
          </section>
      </div>
    </>
  );
}

export default Page404;