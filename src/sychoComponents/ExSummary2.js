import React from "react";
import { useHistory } from 'react-router-dom';
import Footer from "./Footer";
import classes from './psycho.module.css';


// Countdowntimer start
const CountDownTimer = ({hoursMinSecs}) => {
   
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
  const navigate = useHistory();

  const tick = () => {
       if (mins === 0 && secs === 0) {
          navigate.push('/gs-test3');  }
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
      
       <span>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</span> 
      
  );
}
// countdown timer end
 export default function ExSummaryTwo() {
  const hoursMinSecs = { minutes: 1, seconds:0}
  const navigate = useHistory();


return(
  <>
  <div className="container-fluid">
    <div className="row p-1 bg-dark text-white"><text>RRC WCR apptitude Test</text></div>
    <div className="row border">
      <div className="col-11">
      
      <div className="row text-end"><span><text>Timer:</text> <CountDownTimer hoursMinSecs={hoursMinSecs}/></span></div>
      
      <div className="row text-center"><h6>Exam Summary</h6></div>
      </div>
      <div className="col-1"> <img alt="" src="https://soe-buck-lb.storage.googleapis.com/front-end/images/candidateImg.jpg" className={classes.img}/>
   
    </div>
    </div>   
      <div className="col-12 py-3" style={{ width: '100%', height: '465px', overflow: 'auto'}}>
      <h6>Test 2- Selective Attention Test / चयनात्मक ध्यान परीक्षण</h6>
      <table className="table table-bordered my-3 text-center">
    <thead className="bg-info p-4">
      <tr>
        <th className="py-4">Section Name</th>
        <th className="py-4">No. of Questions</th>
        <th className="py-4">Answered</th>
        <th className="py-4">Not Answered</th>
        <th className="py-4">Not visited</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="p-3">Selective Attention Test</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
        <td className="p-3">4</td>
      </tr>
    </tbody>
    </table>
      <h6>Test 1- Intelligence Test / बुद्धि-परीक्षण</h6>
      <table className="table table-bordered my-3 text-center">
    <thead className="bg-info p-4">
      <tr>
        <th className="py-4">Section Name</th>
        <th className="py-4">No. of Questions</th>
        <th className="py-4">Answered</th>
        <th className="py-4">Not Answered</th>
        <th className="py-4">Not visited</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="p-3">Intelligence Test</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
        <td className="p-3">4</td>
      </tr>
    </tbody>
    </table>
    <h6>Test 3- Special Scanning Test / विशेष स्कैनिंग परीक्षण</h6><br />
    <h6>Test 4- Information Ordering Test / निर्देशों के अनुसार कार्य करने की क्षमता का परीक्षण</h6><br />
    <h6>Test 5- Personality Test / व्यक्तित्व परीक्षण</h6><br />
    
    
    </div>
  
    <div className="row px-1 bg-white border" style={{ position: 'fixed',bottom: '10px', width: '100%'}}>
      <div className="col-2"></div>
      <div className="col-8 text-center"><button type="button" className="btn btn-outline-danger px-4 fs-6" onClick={() => navigate.push('/gs-test3')} size="small">Skip</button></div>
      </div>
      <div className="col-2"></div>
    
  </div>
  <Footer/>
  </>

)

}