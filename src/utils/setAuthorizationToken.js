import axios from "axios";
import logout from "./logout";

export default function setAuthorizationToken(){
  console.log("Authorization");
  const token = localStorage.getItem('access_token'); //LS에서 access_token 가져옴
  
  if(token) { //token이 존재하면
    console.log("success");
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  else{ //token 없으면(권한 X)
    console.log("error");
    delete axios.defaults.headers.common['Authorization'];
    window.location.href = "/";
    console.log("권한 없음");
  }

  axios.post('/api/blockchain/findBlock', {
    imei: "7f409b1b3211c37499"
  },
  {
    headers: {
      withCredentials: true,
    }
  })
  .then((res) => {
    console.log("resSuccess");
    console.log(res);
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
    if (err.response.status === 419){
      logout();
      window.location.href = "/signin";
    }
  })
}