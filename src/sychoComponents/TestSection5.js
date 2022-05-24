import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';
import HowerD from './Hoverabedropdown';
import Footer from './Footer';


// Countdowntimer start
const CountDownTimer = ({hoursMinSecs}) => {
   
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
  const navigate = useHistory();

  const tick = () => {
       if (mins === 0 && secs === 0) {
          navigate.push('/Ex-summary5');  }
     else if (secs === 0) {
          setTime([hrs, mins - 1, 59]);
      } else {
          setTime([hrs, mins, secs - 1]);
      }
  };


  //const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  
  React.useEffect(() => {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
  });

  
  return (
      <div>
          <p>{`${hrs.toString().padStart(2, '0')}:${mins
          .toString()
          .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
      </div>
  );
}
// countdown timer end


 export default function TestSectionOne() {
  const navigate = useHistory();
  const hoursMinSecs = { minutes: 1, seconds:0}

return(
  <>
  <div className="container-fluid">
    <div className="row p-1 bg-dark text-white sticky-md-top">RRC WCR apptitude Test</div>
    <div className="row border">
      <div className="col-10">
      <div className="row p-1 border">
      <div className="col-2 ms-1 border"><div className="row">
        <div className="col-10 px-0"><small>Intelligence Test</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 ms-1 border"><div className="row">
        <div className="col-10 px-0"><small>Selective Attention Test</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 ms-1 border"><div className="row">
        <div className="col-10 px-0"><small>Special Scanning Test</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 ms-1 border"><div className="row">
        <div className="col-10 px-0"><small>Infomation Ordering Te</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 ms-1 border"><div className="row bg-light">
        <div className="col-10 px-0"><small>Personality Test</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 "></div>
      </div>
      <div className="row px-0 border">
      <div className="col-2 "><small>Sections</small></div>
      <div className="col-7"></div>
      
      <div className="col-2 text-center"><text>Time Left:</text></div>
      <div className="col-1"><CountDownTimer hoursMinSecs={hoursMinSecs}/></div>
      
      </div>
      <div className="row p-4 border"></div>
      </div>
      <div className="col-2"> {  <Stack direction="row" spacing={0}> 
      <Avatar sx={{ width: 150, height: 120  }} variant="square"   src="/broken-image.jpg"/>
    
  
    </Stack>} 
    </div>
   
    </div>
    
    <div className="col-12 p-4" style={{ width: '100%', height: '440px', overflow: 'auto'}} >  </div>
    <div className="row p-1 border">
       <div className="col-4">
            
              
       </div>
       
       <div className="col-6"></div>
    
        <div className="col-2"><button type="button" className="btn  btn-outline-danger fs-6" onClick={() => navigate.push('/Ex-summary5')}>Skip Test</button></div>
    </div>
   
  </div>
  <Footer/>
  </>

)

}