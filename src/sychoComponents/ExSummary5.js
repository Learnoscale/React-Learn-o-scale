import React from "react";

import { useHistory } from 'react-router-dom';
import Footer from "./Footer";


// Countdowntimer start
// const CountDownTimer = ({hoursMinSecs}) => {
   
//   const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
//   const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
//   const navigate = useHistory();

//   const tick = () => {
//        if (mins === 0 && secs === 0) {
//           navigate.push('/finish');  }
//      else if (secs === 0) {
//           setTime([hrs, mins - 1, 59]);
//       } else {
//           setTime([hrs, mins, secs - 1]);
//       }
//   };


//   const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  
//   React.useEffect(() => {
//       const timerId = setInterval(() => tick(), 1000);
//       return () => clearInterval(timerId);
//   });

  
//   return (
//       <div>
//           <p>{`${hrs.toString().padStart(2, '0')}:${mins
//           .toString()
//           .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
//       </div>
//   );
// }
// countdown timer end

 export default function ExSummaryFive() {
  
  const navigate = useHistory();


return(
  <>
  <div className="container-fluid">
    <div className="row p-1 bg-dark text-white sticky-md-top"><text>RRC WCR apptitude Test</text></div>
    
   
    <div className="row text-center p-2 border"><h6>Exam Summary</h6></div>
    
      <div className="col-12" style={{ width: '100%', height: '525px', overflow: 'auto'}}>
      <h6>Test 5- Personality Test / व्यक्तित्व परीक्षण</h6>
    <table className="table table-bordered my-3 text-center">
    <thead className="bg-info p-4">
      <tr>
        <th className="py-4">Section Name</th>
        <th className="py-4">No. of Questions</th>
        <th className="py-4">Answered</th>
        <th className="py-4">Not Answered</th>
        <th className="py-4">Marked for review</th>
        <th className="py-4">Answered and Marked for review <br />
        (will not be considerd for evaluation)</th>
        <th className="py-4">Not visited</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="p-3">Personality Test</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">0</td>
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
        <th className="py-4">Marked for review</th>
        <th className="py-4">Answered and Marked for review <br />
        (will not be considerd for evaluation)</th>
        <th className="py-4">Not visited</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="p-3">Intelligence Test</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
      </tr>
    </tbody>
    </table>
    <h6>Test 2- Selective Attention Test / चयनात्मक ध्यान परीक्षण</h6>
    <table className="table table-bordered my-3 text-center">
    <thead className="bg-info p-4">
      <tr>
        <th className="py-4">Section Name</th>
        <th className="py-4">No. of Questions</th>
        <th className="py-4">Answered</th>
        <th className="py-4">Not Answered</th>
        <th className="py-4">Marked for review</th>
        <th className="py-4">Answered and Marked for review <br />
        (will not be considerd for evaluation)</th>
        <th className="py-4">Not visited</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="p-3">Selective Attention Test</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
      </tr>
    </tbody>
    </table>
    <h6>Test 3- Special Scanning Test / विशेष स्कैनिंग परीक्षण</h6>
    <table className="table table-bordered my-3 text-center">
    <thead className="bg-info p-4">
      <tr>
        <th className="py-4">Section Name</th>
        <th className="py-4">No. of Questions</th>
        <th className="py-4">Answered</th>
        <th className="py-4">Not Answered</th>
        <th className="py-4">Marked for review</th>
        <th className="py-4">Answered and Marked for review <br />
        (will not be considerd for evaluation)</th>
        <th className="py-4">Not visited</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="p-3">Special Scanning Test</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
      </tr>
    </tbody>
    </table>
    <h6>Test 4- Information Ordering Test / निर्देशों के अनुसार कार्य करने की क्षमता का परीक्षण</h6> <table className="table table-bordered my-3 text-center">
    <thead className="bg-info p-4">
      <tr>
        <th className="py-4">Section Name</th>
        <th className="py-4">No. of Questions</th>
        <th className="py-4">Answered</th>
        <th className="py-4">Not Answered</th>
        <th className="py-4">Marked for review</th>
        <th className="py-4">Answered and Marked for review <br />
        (will not be considerd for evaluation)</th>
        <th className="py-4">Not visited</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="p-3">Information Ordering Test</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
        <td className="p-3">0</td>
        <td className="p-3">0</td>
        <td className="p-3">4</td>
      </tr>
    </tbody>
    </table>
  
    
    </div>
  
    <div className="row p-1  sticky-md-bottom border">
      <div className="col-5"></div>
      <div className="col-2"><button type="button" className="btn btn-outline-primary px-5 fs-6" onClick={() => navigate.push('/finish')} size="small">Next</button></div>
      <div className="col-5"></div>
      </div>
  
    
  </div>
  <Footer/>
  </>

)

}