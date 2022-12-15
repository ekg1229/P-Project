import axios from "axios";
import logout from "./logout";

export default function setAuthorizationToken(){
  const token = localStorage.getItem('access_token'); //LS에서 access_token 가져옴
  
  if(token) { //token이 존재하면
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  else{ //token 없으면(권한 X)
    delete axios.defaults.headers.common['Authorization'];
    window.location.href = "/";
  }
  axios.post('/api/blockchain/findBlock', {
    imei: "fbda537ae7d7796425"
  },
  {
    headers: {
      withCredentials: true,
    }
  })
  .then((res) => {
  })
  .catch((err) => {
    if (err.response.status === 404){
      logout();
      window.location.href = "/page404";
    }
    else if (err.response.status === 419){
      logout();
      window.location.href = "/page419";
    }
    else if (err.response.status === 500){
      logout();
      window.location.href = "/page500";
    }
  })
};