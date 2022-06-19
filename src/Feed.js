import React from "react";
import "./Styles/feed.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Chatbody  from "./Chatbody.js";


const Feed=()=>
{
  return(
    <div className="feed">
    <Header/>
    <div className="chatbody">
      <Chatbody/>
    </div>
    <Footer/>
    </div>
  )
}

export default Feed;