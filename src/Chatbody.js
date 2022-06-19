import React from "react";
import "./Styles/chatbody.css";
import Avatar from '@mui/material/Avatar';

const Chatbody=()=>
{
  return(
    <div className="message">
      <Avatar/>
      <div className="message-info">
        <h4>Sssangha
        <span className="message-timestamp">Time Stamp</span>
        </h4>
        <p>This is message</p>

      </div>
      
    </div>
  )
}
export default Chatbody;