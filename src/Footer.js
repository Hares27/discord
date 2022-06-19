import React from "react";
import "./Styles/footer.css";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import GifOutlinedIcon from '@mui/icons-material/GifOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

const Footer=()=>
{
  return(
    <div className="footer">
     
    
     <AddCircleOutlinedIcon/>
      <input type="text" placeholder="Message Test Channel"/>
     
      

      <div className="footer-right">
        < RedeemOutlinedIcon/>
        < GifOutlinedIcon />
        <SentimentSatisfiedOutlinedIcon />

        
      </div>

      
      

      
    </div>
  )
}
export default Footer;