import React from 'react';
import "../../styles/error/Page419.css";

function Page419() {
  return (
    <>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
      <div class="error-header"> </div>
      <div class="container ">
          <section class="error-container text-center">
              <h1>419</h1>
              <div class="error-divider">
                  <h2>PAGE EXPIRED.</h2>
                  <p class="description">We Couldn't Find This Page</p>
              </div>
              <a href="/main" class="return-btn"><i class="fa fa-home"></i>Home</a>
          </section>
      </div>
    </>
  );
}

export default Page419;