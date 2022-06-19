import React from "react";
import "./Styles/header.css";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


const Header=()=>
{
  return(
    <div className="header">
      <div className="header-text">
       <TagIcon className="header-text-icon"/><h3>TestChannel</h3>
      </div>
      <div className="header-right">
      <div className="header-left-icons">
        <NotificationsIcon/>
        <EditLocationIcon/>
        <GroupIcon/>
      </div>
      <div className="header-input-icon">
        <input type="text" placeholder="Search"/>
          <SearchIcon/>

      </div>
      <div className="header-right-icons">
        <SendIcon/>
        <HelpOutlineOutlinedIcon/>
      </div>

      </div>
      
    </div>
  )
}
export default Header;