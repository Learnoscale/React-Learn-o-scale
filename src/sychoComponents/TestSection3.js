import React from "react";
import { useHistory } from 'react-router-dom';
import HowerD from './Hoverabedropdown';
import Footer from './Footer';
import classes from './psycho.module.css';


// Countdowntimer start
const CountDownTimer = ({hoursMinSecs}) => {
   
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
  const navigate = useHistory();

  const tick = () => {
       if (mins === 0 && secs === 0) {
          navigate.push('/Ex-summary3');  }
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
          <span>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</span> 
      </div>
  );
}
// countdown timer end

 export default function TestSectionThree() {
  const navigate = useHistory();
  const hoursMinSecs = { minutes: 2, seconds:0}

return(
  <>
  <div className="container-fluid">
    <div className="row p-1 bg-dark text-white sticky-md-top">RRC WCR apptitude Test</div>
    <div className="row border">
      <div className="col-11">
      <div className="row p-1 border">
        <div className="col-2 ms-1 border"><div className="row">
        <div className="col-10 px-0"><small>Intelligence Test</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 ms-1 border"><div className="row">
        <div className="col-10 px-0"><small>Selective Attention Test</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 ms-1 border"><div className="row bg-light">
        <div className="col-10 px-0"><small>Special Scanning Test</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 ms-1 border"><div className="row">
        <div className="col-10 px-0"><small>Infomation Ordering Te</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 ms-1 border"><div className="row">
        <div className="col-10 px-0"><small>Personality Test</small></div><div className="col-2 px-0"><HowerD/></div></div></div>
        <div className="col-2 "></div>
        
      </div>
      <div className="row py-3 border">
      <div className="col-2 text-center"><text>Sections</text></div>
      <div className="col-6"></div>
      
      <div className="col-2 text-end"><text>Time Left:</text></div>
      <div className="col-2 text-start">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
        </div>
      
      </div>
     
      </div>
      <div className="col-1"> <img alt="" src="https://soe-buck-lb.storage.googleapis.com/front-end/images/candidateImg.jpg" className={classes.img}/>
   
    </div>
    </div>
   
    <div className="row" >
      <div className="col-12 p-4" style={{ maxWidth: '100%', minHeight: '440px', overflow: 'auto'}} > </div>
      
   
    </div>
    <div className="row px-1 bg-white border" style={{ position: 'fixed',bottom: '10px', width: '100%'}}>
       <div className="col-2"></div>
       <div className="col-8 text-center"><button type="button" className="btn  btn-outline-danger px-4 fs-6 " onClick={() => navigate.push('/Ex-summary3')}>Skip</button></div>
        <div className="col-2"></div>
    </div>
    
  </div>
  <Footer/>
  </>

)

}