import React from "react";
import "./style.css";
import Feed from "./Feed.js";
import Sidebar from "./Sidebar.js";
import {useSelector} from "react-redux";
import Login from "./Login.js";


export default function App() {
  const user=useSelector((state)=>state.user.user);
  return (
    <div className="app">

      {user?(
        <>
        <Sidebar/>
        <Feed/>
        </>

      ):(<h2> <Login/>
        </h2>)}

      
    </div>
  );
}
