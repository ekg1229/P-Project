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
    <div className="wrapper">
      <section className="main_visual">
        <div class="container" style={{marginTop: "180px"}}>
            <section class="error-container text-center" style={{background: "#282c34", opacity: 0.9}}>
                <h1>페이지를 찾을 수 없습니다.</h1>
                <div class="error-divider">
                    <h2>10초 후에 메인 페이지로 이동됩니다.</h2>
                </div>
                <a href="/main" class="return-btn" style={{fontSize: "2rem"}}>Home</a>
            </section>
        </div>
      </section>
    </div>
  );
}

export default Page404;