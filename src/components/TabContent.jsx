import React from "react"

import CheckInfo from '../pages/user/CheckInfo';
import EditInfo from '../pages/user/EditInfo';
import EditPw from '../pages/user/EditPw';
import EditImei from '../pages/user/EditImei';

//tab content
function TabContent(props){
  const state = props.state;

  if(state === "0"){
    return <div><CheckInfo/></div>
  }
  else if(state === "1"){
    return <div><EditInfo/></div>
  }
  else if(state === "2"){
    return <div><EditPw/></div>
  }
  else if(state === "3"){
    return <div><EditImei/></div>
  }
}

export default TabContent;