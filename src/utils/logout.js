export default function setAuthorizationToken(){
  window.localStorage.removeItem("access_token");
  window.localStorage.removeItem("refresh_token");
}