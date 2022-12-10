import React from 'react';
import "../../styles/error/Page500.css";

function Page500() {
  return (
    <>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
      <div class="error-header"> </div>
      <div class="container ">
          <section class="error-container text-center">
              <h1>500</h1>
              <div class="error-divider">
                  <h2>ooops!!</h2>
                  <p class="description">SOMETHING WENT WRONG.</p>
              </div>
              <a href="/main" class="return-btn"><i class="fa fa-home"></i>Home</a>
          </section>
      </div>
    </>
  );
}

export default Page500;