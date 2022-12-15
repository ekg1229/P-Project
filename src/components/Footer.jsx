import React from 'react';
import gachon from '../images/gachon.png';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div class="left">
        <p><img src={gachon} height="30px" /></p>
      </div>
      <div class="right">
        <p>가천대학교 | P프로젝트 2조 블랙박스</p>
      </div>
    </footer>
  );
}
export default Footer;